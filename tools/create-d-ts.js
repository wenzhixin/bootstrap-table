/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Constants from '../src/constants/index.js'
import {
  COLUMN_TYPES,
  EXCLUDE_KEYS,
  ICON_EXTRA_KEYS,
  LOCALE_TYPES,
  OPTION_TYPES
} from './type-overrides.js'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(here, '..')
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const write = (file, content) => fs.writeFileSync(path.join(root, file), content)

const { DEFAULTS, COLUMN_DEFAULTS, EVENTS, ICONS, LOCALES } = Constants
const EN = LOCALES.en

// ---------------------------------------------------------------------------
// 1. Frozen-contract sanity checks (plan §3.3-5): EXCLUDE_KEYS must exactly
// match the EN keys that Object.assign(DEFAULTS, EN) mixes into DEFAULTS.
// ---------------------------------------------------------------------------
const enKeys = Object.keys(EN).sort()
const excludeKeys = [...EXCLUDE_KEYS].sort()

if (JSON.stringify(enKeys) !== JSON.stringify(excludeKeys)) {
  throw new Error('EXCLUDE_KEYS is out of sync with Constants.LOCALES.en; update tools/type-overrides.js')
}
const localeKeysInDefaults = enKeys.filter(key => Object.prototype.hasOwnProperty.call(DEFAULTS, key))

if (localeKeysInDefaults.length !== enKeys.length) {
  throw new Error('DEFAULTS no longer contains all EN locale keys; review EXCLUDE_KEYS')
}

// ---------------------------------------------------------------------------
// 2. Extension source scanning. Recursively collect bootstrap-table-*.js and
// extract the top-level keys of Object.assign($.fn.bootstrapTable.defaults, {})
// and Object.assign($.fn.bootstrapTable.columnDefaults, {}). A brace-pairing
// scan is used instead of a non-greedy regex so nested objects/arrays
// (exportOptions: {}, exportTypes: [...]) cannot truncate the match.
// ---------------------------------------------------------------------------
const extensionFiles = []
const walk = dir => {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name)

    if (entry.isDirectory()) walk(rel)
    else if (/^bootstrap-table-.*\.js$/.test(entry.name)) extensionFiles.push(rel)
  }
}

walk('src/extensions')
extensionFiles.sort()

// Skip strings, comments and template literals while tracking bracket depth.
// The scanner owns the quote state: comment detection only applies outside
// quotes, and an escape sequence consumes the escaped character as well.
const createScanner = () => {
  let depth = 0
  let quote = null

  return (ch, next) => {
    if (quote) {
      if (ch === '\\') return 'escape'
      if (ch === quote) quote = null
      return 'skip'
    }
    if (ch === '"' || ch === '\'' || ch === '`') {
      quote = ch
      return 'skip'
    }
    if (ch === '/' && next === '/') return 'lineComment'
    if (ch === '/' && next === '*') return 'blockComment'
    if (ch === '{' || ch === '[' || ch === '(') {
      depth++
      return 'open'
    }
    if (ch === '}' || ch === ']' || ch === ')') {
      depth--
      return depth === 0 ? 'close' : 'skip'
    }
    return depth === 0 && ch === ',' ? 'comma' : 'skip'
  }
}

const skipLineComment = (content, i) => {
  while (i < content.length && content[i] !== '\n') i++
  return i
}
const skipBlockComment = (content, i) => {
  i += 2
  while (i < content.length && !(content[i] === '*' && content[i + 1] === '/')) i++
  return i + 1
}

const extractObjectBody = (content, braceStart) => {
  const scan = createScanner()

  for (let i = braceStart; i < content.length; i++) {
    const action = scan(content[i], content[i + 1])

    if (action === 'lineComment') {
      i = skipLineComment(content, i)
      continue
    }
    if (action === 'blockComment') {
      i = skipBlockComment(content, i)
      continue
    }
    if (action === 'escape') {
      i++
      continue
    }
    if (action === 'close') return { body: content.slice(braceStart + 1, i), end: i }
  }
  return null
}

const splitTopLevel = body => {
  const segments = []
  const scan = createScanner()
  let start = 0

  for (let i = 0; i < body.length; i++) {
    const action = scan(body[i], body[i + 1])

    if (action === 'lineComment') {
      i = skipLineComment(body, i)
      continue
    }
    if (action === 'blockComment') {
      i = skipBlockComment(body, i)
      continue
    }
    if (action === 'escape') {
      i++
      continue
    }
    if (action === 'comma') {
      segments.push(body.slice(start, i))
      start = i + 1
    }
  }
  segments.push(body.slice(start))
  return segments
}

const parseTopLevelEntries = body => {
  const entries = []

  for (const segment of splitTopLevel(body)) {
    const clean = segment.split('\n')
      .filter(line => !/^\s*\/\//.test(line))
      .join('\n')
      .trim()

    if (!clean) continue
    const m = clean.match(/^(?:'([^']+)'|"([^"]+)"|([A-Za-z_$][\w$]*))\s*(?::|\()/)

    if (!m) continue
    const key = m[1] || m[2] || m[3]
    const isMethod = m[0].trim().endsWith('(')

    entries.push({ key, value: isMethod ? '(' : clean.slice(m[0].length).trim() })
  }
  return entries
}

const ASSIGN_RE = /Object\.assign\(\s*\$\.fn\.bootstrapTable\.(defaults|columnDefaults)\s*,\s*\{/g
const extOptionValues = new Map()
const extColumnValues = new Map()
let assignBlocks = 0

for (const file of extensionFiles) {
  const content = read(file)

  ASSIGN_RE.lastIndex = 0
  let m

  while ((m = ASSIGN_RE.exec(content)) !== null) {
    const braceStart = m.index + m[0].length - 1
    const extracted = extractObjectBody(content, braceStart)

    if (!extracted) continue
    assignBlocks++
    const target = m[1] === 'defaults' ? extOptionValues : extColumnValues

    for (const { key, value } of parseTopLevelEntries(extracted.body)) {
      if (!target.has(key)) target.set(key, value)
    }
  }
}

// ---------------------------------------------------------------------------
// 3. Documentation types. Both api docs (**Type:**, ## sections) and extension
// docs (**type:** / **Type:**, ### sections) are read, case-insensitively.
// ---------------------------------------------------------------------------
const DOC_TYPE_MAP = {
  string: 'string',
  number: 'number',
  integer: 'number',
  boolean: 'boolean',
  bool: 'boolean',
  array: 'any[]',
  object: 'object',
  function: 'Function',
  null: 'null',
  undefined: 'undefined',
  node: 'Node',
  selector: 'any',
  any: 'any'
}

const mapDocType = raw => {
  const tokens = raw.split(/\s*[|/]\s*/).map(t => t.trim().toLowerCase()).filter(Boolean)
  const mapped = tokens.map(t => DOC_TYPE_MAP[t])

  if (!mapped.length || mapped.some(t => !t)) return null
  return [...new Set(mapped)].join(' | ')
}

// Table options and column options are separate maps: the same key can have
// different documented types (e.g. filterControl is Boolean as a table option
// but String as a column option).
const optionDocTypes = new Map()
const columnDocTypes = new Map()
const TYPE_LINE = /\*\*[Tt]ype:\*\*\s*`([^`]+)`/
const docFiles = []
const collectDocs = dir => {
  const full = path.join(root, dir)

  if (!fs.existsSync(full)) return
  for (const name of fs.readdirSync(full).filter(f => f.endsWith('.mdx')).sort()) {
    docFiles.push(path.join(dir, name))
  }
}

// Extension docs first, api docs last (api wins when both define a type).
collectDocs('site/src/pages/docs/extensions')
const extDocCount = docFiles.length

collectDocs('site/src/pages/docs/api')

for (const file of docFiles) {
  const isApi = file.includes('/api/')
  const apiTarget = file.endsWith('column-options.mdx') ? columnDocTypes : optionDocTypes
  let target = isApi ? apiTarget : null
  let key = null

  for (const line of read(file).split('\n')) {
    const heading = line.match(/^(#{2,3})\s+(.+?)\s*$/)

    if (heading) {
      const title = heading[2]

      if (heading[1] === '##') {
        if (!isApi) {
          // Extension docs: only Options / Column options sections qualify.
          target = /^column\s+options$/i.test(title) ? columnDocTypes :
            /^options$/i.test(title) ? optionDocTypes : null
        }
        key = isApi ? title.match(/^[A-Za-z_$][\w$]*$/) ? title : null : null
      } else {
        key = target && /^[A-Za-z_$][\w$]*$/.test(title) ? title : null
      }
      continue
    }
    if (!key || !target) continue
    const m = line.match(TYPE_LINE)

    if (!m) continue
    const tsType = mapDocType(m[1])

    if (tsType) target.set(key, tsType)
  }
}

// ---------------------------------------------------------------------------
// 4. Type resolution: overrides > docs > runtime/default value > any.
// ---------------------------------------------------------------------------
const inferFromValue = value => {
  if (value === undefined || value === null) return null
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return 'number'
  if (typeof value === 'boolean') return 'boolean'
  if (Array.isArray(value)) {
    return value.length ? `${inferFromValue(value[0]) || 'any'}[]` : 'any[]'
  }
  if (typeof value === 'function') return 'Function'
  if (typeof value === 'object') return 'object'
  return null
}

const inferFromSource = text => {
  const t = text.trim()

  if (/^(true|false)\b/.test(t)) return 'boolean'
  if (/^'|^"|^`/.test(t)) return 'string'
  if (/^-?\d/.test(t)) return 'number'
  if (/^\[/.test(t)) return 'any[]'
  if (/^\{/.test(t)) return 'object'
  if (/^\(/.test(t) || /^function\b/.test(t) || /^async\b/.test(t) || /^[A-Za-z_$][\w$]*\s*=>/.test(t)) return 'Function'
  return null
}

const resolveType = (key, overrides, docs, defaults, sourceValues) => {
  if (Object.prototype.hasOwnProperty.call(overrides, key)) {
    return [overrides[key], 'overrides']
  }
  const doc = docs.get(key)

  if (doc) return [doc, 'docs']
  if (Object.prototype.hasOwnProperty.call(defaults, key)) {
    const inferred = inferFromValue(defaults[key])

    if (inferred) return [inferred, 'defaults']
  }
  if (sourceValues.has(key)) {
    const inferred = inferFromSource(sourceValues.get(key))

    if (inferred) return [inferred, 'source']
  }
  return ['any', 'any']
}

const formatKey = key => /^[A-Za-z_$][\w$]*$/.test(key) ? key : `'${key}'`
const access = key => /^[A-Za-z_$][\w$]*$/.test(key) ? `.${key}` : `['${key}']`

// ---------------------------------------------------------------------------
// 5. Build the option / column key sets. Overrides contribute keys too, so no
// previously published option can disappear (zero breaking change).
// ---------------------------------------------------------------------------
const optionKeys = [...new Set([
  ...Object.keys(DEFAULTS).filter(key => !EXCLUDE_KEYS.includes(key)),
  ...extOptionValues.keys(),
  ...Object.keys(OPTION_TYPES)
])].sort()
const columnKeys = [...new Set([
  ...Object.keys(COLUMN_DEFAULTS),
  ...extColumnValues.keys(),
  ...Object.keys(COLUMN_TYPES)
])].sort()

const resolvedOptions = optionKeys.map(key => {
  const [type, from] = resolveType(key, OPTION_TYPES, optionDocTypes, DEFAULTS, extOptionValues)

  return { key, type, from }
})
const resolvedColumns = columnKeys.map(key => {
  const [type, from] = resolveType(key, COLUMN_TYPES, columnDocTypes, COLUMN_DEFAULTS, extColumnValues)

  return { key, type, from }
})

const iconNames = [...new Set([
  ...Object.values(ICONS).flatMap(set => Object.keys(set)),
  ...ICON_EXTRA_KEYS
])].sort()

// ---------------------------------------------------------------------------
// 6. Static fragments: BootstrapAjaxParams and the jQuery global augmentation.
// Emitted verbatim, never influenced by the data sources, so declare global
// (missing on feature/index-ts) can never be dropped.
// ---------------------------------------------------------------------------
const AJAX_PARAMS = `export interface BootstrapAjaxParams {
  cache: boolean;
  data: {
    search: string;
    offset: number;
    limit: number;
    sort?: any;
    order?: any;
  };
  dataType: string;
  type: string;
  contentType: string;
  error: (jqXHR: JQuery.jqXHR) => any;
  success: (results: any, textStatus?: string, jqXHR?: JQuery.jqXHR) => any;
}`

const DECLARE_GLOBAL = `declare global {
  interface JQuery {
    bootstrapTable(options: BootstrapTableOptions): JQuery;

    bootstrapTable(method: string, ...parameters: any[]): JQuery | any;
  }
}`

const renderInterface = (name, entries, optional = true) => [
  `export interface ${name} {`,
  ...entries.map(({ key, type }) => `  ${formatKey(key)}${optional ? '?' : ''}: ${type};`),
  '}'
].join('\n')

const iconsInterface = renderInterface('BootstrapTableIcons',
  iconNames.map(key => ({ key, type: 'string' })))
const eventsInterface = renderInterface('BootstrapTableEvents',
  Object.keys(EVENTS).sort().map(key => ({ key, type: 'string' })), false)
const localeInterface = renderInterface('BootstrapTableLocale',
  enKeys.map(key => ({ key, type: LOCALE_TYPES[key] || '() => string' })))
const columnInterface = renderInterface('BootstrapTableColumn', resolvedColumns)
const optionsInterface = renderInterface('BootstrapTableOptions', resolvedOptions)

const indexDts = [
  '/// <reference types="jquery" />',
  '',
  '/* AUTO-GENERATED by tools/create-d-ts.js — DO NOT EDIT MANUALLY */',
  '/* Type overrides: tools/type-overrides.js */',
  '',
  iconsInterface,
  '',
  eventsInterface,
  '',
  columnInterface,
  '',
  localeInterface,
  '',
  AJAX_PARAMS,
  '',
  optionsInterface,
  '',
  DECLARE_GLOBAL,
  ''
].join('\n')

// ---------------------------------------------------------------------------
// 7. generated-options.test.ts: one self-assignment per extracted option.
// A missing key fails tsc; a shortened file fails git diff --exit-code.
// ---------------------------------------------------------------------------
const generatedTest = [
  '/* AUTO-GENERATED by tools/create-d-ts.js — DO NOT EDIT MANUALLY */',
  'import type { BootstrapTableOptions, BootstrapTableColumn } from \'bootstrap-table\'',
  '',
  'const options: BootstrapTableOptions = {}',
  'const column: BootstrapTableColumn = {}',
  '',
  ...optionKeys.map(key => `options${access(key)} = options${access(key)}`),
  ...columnKeys.map(key => `column${access(key)} = column${access(key)}`),
  ''
].join('\n')

fs.mkdirSync(path.join(root, 'tests', 'types'), { recursive: true })
write('index.d.ts', indexDts)
write('tests/types/generated-options.test.ts', generatedTest)

// ---------------------------------------------------------------------------
// 8. Report (deterministic: every key set is sorted).
// ---------------------------------------------------------------------------
const countBy = entries => entries.reduce((acc, { from }) => {
  acc[from] = (acc[from] || 0) + 1
  return acc
}, {})
const anyKeys = [...resolvedOptions, ...resolvedColumns]
  .filter(({ from }) => from === 'any')
  .map(({ key }) => key)
const overridesOnly = optionKeys.filter(key =>
  !Object.prototype.hasOwnProperty.call(DEFAULTS, key) && !extOptionValues.has(key))

console.info('=== bootstrap-table index.d.ts generation ===')
console.info(`DEFAULTS: ${Object.keys(DEFAULTS).length} (${enKeys.length} EN locale keys excluded)`)
console.info(`COLUMN_DEFAULTS: ${Object.keys(COLUMN_DEFAULTS).length} | EVENTS: ${Object.keys(EVENTS).length} | ICONS sets: ${Object.keys(ICONS).length}`)
console.info(`extension files: ${extensionFiles.length} | Object.assign blocks: ${assignBlocks}`)
console.info(`extension option keys: ${extOptionValues.size} | extension column keys: ${extColumnValues.size}`)
console.info(`doc files: ${docFiles.length} (${extDocCount} extensions) | typed option/col sections: ${optionDocTypes.size}/${columnDocTypes.size}`)
console.info('--- generated ---')
console.info(`BootstrapTableIcons: ${iconNames.length} | BootstrapTableEvents: ${Object.keys(EVENTS).length} | BootstrapTableLocale: ${enKeys.length}`)
console.info(`BootstrapTableColumn: ${columnKeys.length} (>= ${Object.keys(COLUMN_DEFAULTS).length} required)`)
console.info(`BootstrapTableOptions: ${optionKeys.length} (> 171 required)`)
console.info(`option type sources: ${JSON.stringify(countBy(resolvedOptions))}`)
console.info(`column type sources: ${JSON.stringify(countBy(resolvedColumns))}`)
console.info(`any-typed keys (${anyKeys.length}), consider adding overrides: ${anyKeys.join(', ') || '(none)'}`)
console.info(`overrides-only keys (${overridesOnly.length}), not in runtime defaults: ${overridesOnly.join(', ') || '(none)'}`)

if (optionKeys.length <= 171) throw new Error('BootstrapTableOptions key count fell below the >171 baseline')
if (columnKeys.length < Object.keys(COLUMN_DEFAULTS).length) throw new Error('BootstrapTableColumn key count fell below COLUMN_DEFAULTS')
if (localeInterface.includes(': any;')) throw new Error('BootstrapTableLocale lost precision')

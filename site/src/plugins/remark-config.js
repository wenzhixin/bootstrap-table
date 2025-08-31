import { visit } from 'unist-util-visit'
import Config from '../config.js'

const getNestedValue = (obj, path) => path.split('.').reduce((current, key) =>
  current && current[key] !== undefined ? current[key] : undefined, obj)
const replaceConfigInText = text => text.replace(/\[\[config:(?<name>[\w.]+)]]/g, (match, key) => {
  const value = getNestedValue(Config, key)

  if (value === undefined) {
    console.warn(`Warning: Configuration key '${key}' not found in config.js. Placeholder will remain unchanged in generated content.`)
    return match
  }

  return value
})

const replaceConfigInAttributes = attributes => attributes.map(attribute => {
  if (attribute.type === 'mdxJsxAttribute' && typeof attribute.value === 'string') {
    attribute.value = replaceConfigInText(attribute.value)
  }

  return attribute
})

export default function remarkInjectConfig () {
  return tree => {
    visit(tree, ['code', 'definition', 'image', 'inlineCode', 'link', 'text', 'mdxJsxFlowElement'], node => {
      switch (node.type) {
        case 'code':
        case 'inlineCode':
        case 'text': {
          node.value = replaceConfigInText(node.value)
          break
        }
        case 'image': {
          if (node.alt) {
            node.alt = replaceConfigInText(node.alt)
          }

          node.url = replaceConfigInText(node.url)
          break
        }
        case 'definition':
        case 'link': {
          node.url = replaceConfigInText(node.url)
          break
        }
        case 'mdxJsxFlowElement': {
          node.attributes = replaceConfigInAttributes(node.attributes)
          break
        }
        default: {
          break
        }
      }
    })
  }
}

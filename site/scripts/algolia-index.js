#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { JSDOM } from 'jsdom'
import { algoliasearch } from 'algoliasearch'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Algolia configuration
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME

// Initialize Algolia client only if credentials are provided
let client = null

if (ALGOLIA_APP_ID && ALGOLIA_API_KEY && ALGOLIA_INDEX_NAME) {
  client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
}

// Paths to ignore
const IGNORE_PATHS = [
  '/assets/',
  '/favicon',
  '/robots.txt',
  '/404.html'
]

// Selectors to ignore
const IGNORE_SELECTORS = [
  'nav',
  'footer',
  'script',
  'style',
  '.bd-sidebar',
  '.bd-toc',
  '.bd-search',
  '.navbar',
  '.alert',
  '.admonition',
  '.highlight',
  'pre',
  'code',
  '.btn',
  '.pagination',
  '.breadcrumb'
]

/**
 * Record generator - Based on jekyll-algolia design pattern
 */
class RecordGenerator {
  constructor (dom, url) {
    this.dom = dom
    this.url = url
    this.document = dom.window.document
  }

  /**
   * Generate all records
   */
  generateRecords () {
    const records = []

    // Generate main page record
    const mainRecord = this.generateMainRecord()

    if (mainRecord) {
      records.push(mainRecord)
    }

    // Generate section records
    const sectionRecords = this.generateSectionRecords()

    records.push(...sectionRecords)

    return records
  }

  /**
   * Generate main page record
   */
  generateMainRecord () {
    const title = this.extractTitle()
    const content = this.extractMainContent()
    const hierarchy = this.extractHierarchy()

    if (!title || content.length < 100) {
      return null
    }

    let record = {
      objectID: this.url,
      title,
      content: this.truncateContent(content, 2000), // Further reduce content length for Chinese
      text: '', // Will be set after size check
      hierarchy,
      type: 'content',
      url: this.url,
      anchor: '',
      timestamp: Date.now()
    }

    // Set text field before optimization (DocSearch requires text field)
    record.text = record.content

    // Optimize record size after setting all fields
    record = this.optimizeRecordSize(record)

    return record
  }

  /**
   * Generate section records
   */
  generateSectionRecords () {
    const records = []
    const headings = this.document.querySelectorAll('h2, h3, h4')

    headings.forEach((heading, index) => {
      const headingText = heading.textContent?.trim()

      if (!headingText || headingText.length < 3) return

      const level = parseInt(heading.tagName.charAt(1))
      const content = this.extractSectionContent(heading, level, headings, index)

      if (content.length < 50) return

      const hierarchy = this.extractSectionHierarchy(heading, level)
      const anchor = this.generateAnchor(headingText)

      let record = {
        objectID: `${this.url}#${anchor}`,
        title: headingText,
        content: this.truncateContent(content, 1500), // Much shorter section content for Chinese
        text: '', // Will be set after size check
        hierarchy,
        type: `lvl${level}`,
        url: `${this.url}#${anchor}`,
        anchor,
        timestamp: Date.now()
      }

      // Set text field before optimization (DocSearch requires text field)
      record.text = record.content

      // Optimize record size after setting all fields
      record = this.optimizeRecordSize(record)

      records.push(record)
    })

    return records
  }

  /**
   * Extract page title
   */
  extractTitle () {
    // Priority: title tag > h1 > first h2
    const titleElement = this.document.querySelector('title')

    if (titleElement) {
      let title = titleElement.textContent?.trim()

      if (title) {
        // Remove website identifier
        title = title.replace(/·[^·]*$/, '').trim()
        return title
      }
    }

    const h1Element = this.document.querySelector('h1')

    if (h1Element) {
      const h1Text = h1Element.textContent?.trim()

      if (h1Text) return h1Text
    }

    return null
  }

  /**
   * Extract main content
   */
  extractMainContent () {
    // Find main content container
    const contentSelectors = [
      '.bd-content',
      '.content',
      'main',
      'article',
      '.documentation'
    ]

    let contentElement = null

    for (const selector of contentSelectors) {
      contentElement = this.document.querySelector(selector)
      if (contentElement) break
    }

    // If no specific container found, use body
    if (!contentElement) {
      contentElement = this.document.body
    }

    return this.cleanContent(contentElement)
  }

  /**
   * Extract section content
   */
  extractSectionContent (heading, level) {
    let content = ''
    let currentElement = heading.nextElementSibling

    while (currentElement) {
      // Check if encountering next same-level or higher-level heading
      if (currentElement.tagName && /^H[1-4]$/.test(currentElement.tagName)) {
        const currentLevel = parseInt(currentElement.tagName.charAt(1))

        if (currentLevel <= level) {
          break
        }
      }

      // Add content
      content += `${currentElement.textContent} `
      currentElement = currentElement.nextElementSibling
    }

    return this.cleanContentText(content)
  }

  /**
   * Extract page hierarchy
   */
  extractHierarchy () {
    const hierarchy = {
      lvl0: 'Documentation'
    }

    const urlPath = new URL(this.url).pathname

    // Extract hierarchy from breadcrumbs
    const breadcrumbElement = this.document.querySelector('.breadcrumb, [aria-label="breadcrumb"]')

    if (breadcrumbElement) {
      const breadcrumbItems = breadcrumbElement.querySelectorAll('li, .breadcrumb-item')
      let level = 1

      breadcrumbItems.forEach((item, index) => {
        if (index < 3) { // Maximum 3 levels of breadcrumbs
          hierarchy[`lvl${level}`] = item.textContent?.trim()
          level++
        }
      })
    }

    // Infer hierarchy from URL path
    if (urlPath.startsWith('/docs/')) {
      const pathParts = urlPath.replace('/docs/', '').split('/').filter(p => p)

      if (pathParts.length > 0 && !hierarchy.lvl1) {
        hierarchy.lvl1 = this.formatPathPart(pathParts[0])
      }
      if (pathParts.length > 1 && !hierarchy.lvl2) {
        hierarchy.lvl2 = this.formatPathPart(pathParts[1])
      }
    } else if (urlPath.startsWith('/themes/') && !hierarchy.lvl1) {
      hierarchy.lvl1 = 'Themes'
    } else if (urlPath === '/news' && !hierarchy.lvl1) {
      hierarchy.lvl1 = 'News'
    } else if (urlPath === '/' && !hierarchy.lvl1) {
      hierarchy.lvl1 = 'Home'
    }

    return hierarchy
  }

  /**
   * Extract section-specific hierarchy
   */
  extractSectionHierarchy (heading, level) {
    const baseHierarchy = this.extractHierarchy()

    if (level === 2) {
      baseHierarchy.lvl2 = heading.textContent?.trim()
    } else if (level === 3) {
      baseHierarchy.lvl3 = heading.textContent?.trim()
    } else if (level === 4) {
      baseHierarchy.lvl4 = heading.textContent?.trim()
    }

    return baseHierarchy
  }

  /**
   * Clean content, remove unwanted elements
   */
  cleanContent (element) {
    if (!element) return ''

    // Clone element to avoid modifying original DOM
    const clone = element.cloneNode(true)

    // Remove ignored elements
    IGNORE_SELECTORS.forEach(selector => {
      const elementsToRemove = clone.querySelectorAll(selector)

      elementsToRemove.forEach(el => el.remove())
    })

    return this.cleanContentText(clone.textContent || '')
  }

  /**
   * Clean text content
   */
  cleanContentText (text) {
    return text
      .replace(/\s+/g, ' ')
      .replace(/\n+/g, ' ')
      .trim()
  }

  /**
   * Format path part
   */
  formatPathPart (part) {
    return part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
  }

  /**
   * Generate anchor
   */
  generateAnchor (text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  /**
   * Truncate content
   */
  truncateContent (content, maxLength = 5000) {
    if (content.length <= maxLength) return content
    return `${content.substring(0, maxLength)}...`
  }

  /**
   * Optimize record size to ensure it doesn't exceed Algolia limits
   */
  optimizeRecordSize (record) {
    const MAX_SIZE = 4000 // Aggressively reduce to ensure UTF-8 encoding stays under 10KB
    const jsonString = JSON.stringify(record)
    const originalSize = Buffer.byteLength(jsonString, 'utf8')

    if (originalSize <= MAX_SIZE) {
      return record
    }


    const optimizedRecord = { ...record }

    // Step 1: Further compress content
    const contentLength = optimizedRecord.content.length
    const reductionNeeded = originalSize - MAX_SIZE + 500 // Additional buffer

    if (contentLength > reductionNeeded) {
      const newLength = Math.max(contentLength - reductionNeeded, 500) // Keep at least 500 characters

      optimizedRecord.content = `${optimizedRecord.content.substring(0, newLength)}...`
    }

    // Step 2: Remove optional fields to save space
    let currentJsonString = JSON.stringify(optimizedRecord)
    let currentSize = Buffer.byteLength(currentJsonString, 'utf8')

    if (currentSize > MAX_SIZE) {
      delete optimizedRecord.timestamp
      currentJsonString = JSON.stringify(optimizedRecord)
      currentSize = Buffer.byteLength(currentJsonString, 'utf8')
    }

    if (currentSize > MAX_SIZE) {
      delete optimizedRecord.anchor
      currentJsonString = JSON.stringify(optimizedRecord)
      currentSize = Buffer.byteLength(currentJsonString, 'utf8')
    }

    // Step 3: Compress hierarchy
    if (currentSize > MAX_SIZE) {
      const hierarchy = optimizedRecord.hierarchy
      // Keep only the most important levels
      const compactHierarchy = {}

      if (hierarchy.lvl0) compactHierarchy.lvl0 = hierarchy.lvl0
      if (hierarchy.lvl1) compactHierarchy.lvl1 = hierarchy.lvl1
      if (hierarchy.lvl2) compactHierarchy.lvl2 = hierarchy.lvl2
      if (hierarchy.lvl3) compactHierarchy.lvl3 = hierarchy.lvl3

      optimizedRecord.hierarchy = compactHierarchy
      currentJsonString = JSON.stringify(optimizedRecord)
      currentSize = Buffer.byteLength(currentJsonString, 'utf8')
    }

    // Step 4: Final content compression
    if (currentSize > MAX_SIZE) {
      const finalReduction = currentSize - MAX_SIZE + 100

      if (optimizedRecord.content.length > finalReduction) {
        optimizedRecord.content = `${optimizedRecord.content.substring(0, optimizedRecord.content.length - finalReduction)}...`
      }
    }


    return optimizedRecord
  }
}

/**
 * Scan directory and generate index
 */
async function generateIndex (distPath) {
  const allRecords = []
  let processedCount = 0

  function scanDirectory (dir, basePath = '') {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        scanDirectory(filePath, path.join(basePath, file))
      } else if (file.endsWith('.html')) {
        const relativePath = path.join(basePath, file)
        const cleanPath = `/${relativePath.replace(/\\/g, '/').replace('/index.html', '')}`
        const urlPath = cleanPath || '/'

        // Check if this path should be ignored
        if (IGNORE_PATHS.some(ignorePath => urlPath.includes(ignorePath))) {
          continue
        }

        try {
          const html = fs.readFileSync(filePath, 'utf8')
          const url = `https://bootstrap-table.com${urlPath}`

          // Parse HTML using JSDOM
          const dom = new JSDOM(html, {
            url,
            contentType: 'text/html'
          })

          const generator = new RecordGenerator(dom, url)
          const records = generator.generateRecords()

          allRecords.push(...records)
          processedCount++
        } catch (error) {
          console.error(`✗ Error processing ${filePath}:`, error.message)
        }
      }
    }
  }

  scanDirectory(distPath)
  if (processedCount > 0) {
    console.log(`✓ Processed ${processedCount} files`)
  }
  return allRecords
}

/**
 * Main function
 */
async function main () {
  const distPath = path.join(__dirname, '../dist')

  if (!fs.existsSync(distPath)) {
    console.error(`Dist directory not found: ${distPath}`)
    process.exit(1)
  }

  console.log('🔍 Generating Algolia index with jekyll-algolia style parser...')
  const records = await generateIndex(distPath)

  if (records.length === 0) {
    console.log('⚠️  No records found to index')
    return
  }

  // Skip upload if Algolia client is not initialized
  if (!client) {
    const maxSize = 10000
    const oversizedCount = records.filter(r => Buffer.byteLength(JSON.stringify(r), 'utf8') > maxSize).length

    console.log(`\n📊 Found ${records.length} records to index`)
    if (oversizedCount > 0) {
      console.log(`⚠️  ${oversizedCount} records exceed ${maxSize} bytes limit`)
    }
    console.log('⚠️  Algolia credentials not provided - skipping upload')
    return
  }

  try {
    // Clear existing index
    console.log('🗑️  Clearing existing index...')
    await client.clearObjects({
      indexName: ALGOLIA_INDEX_NAME
    })

    // Upload records in batches
    const batchSize = 100

    // Filter out oversized records that exceed Algolia's 10KB limit
    const MAX_ALGOLIA_SIZE = 10000
    const validRecords = []
    const oversizedRecords = []

    for (const record of records) {
      const jsonString = JSON.stringify(record)
      const recordSize = Buffer.byteLength(jsonString, 'utf8') // Use actual byte length for UTF-8

      if (recordSize > MAX_ALGOLIA_SIZE) {
        oversizedRecords.push({ ...record, size: recordSize })
      } else {
        validRecords.push(record)
      }
    }


    if (oversizedRecords.length > 0) {
      console.warn(`⚠️  Skipped ${oversizedRecords.length} oversized records`)
    }

    console.log(`📤 Uploading ${validRecords.length} records...`)

    for (let i = 0; i < validRecords.length; i += batchSize) {
      const batch = validRecords.slice(i, i + batchSize)

      await client.saveObjects({
        indexName: ALGOLIA_INDEX_NAME,
        objects: batch
      })
    }

    console.log('🎉 Successfully uploaded all records to Algolia!')
  } catch (error) {
    console.error('❌ Error uploading to Algolia:', error.message)

    // Try to extract record info from error message
    const errorMsg = error.message
    const objectIDMatch = errorMsg.match(/objectID=([^\s]+)/)

    if (objectIDMatch) {
      console.error('\n📍 Problematic record details:')
      console.error(`  objectID: ${objectIDMatch[1]}`)

      // Find the record in our collection
      const problematicRecord = records.find(r => r.objectID === objectIDMatch[1])

      if (problematicRecord) {
        const jsonString = JSON.stringify(problematicRecord)

        console.error(`  string length: ${jsonString.length}`)
        console.error(`  byte length (UTF-8): ${Buffer.byteLength(jsonString, 'utf8')} bytes`)
        console.error(`  title: ${problematicRecord.title}`)
        console.error(`  type: ${problematicRecord.type}`)
        console.error(`  content length: ${problematicRecord.content?.length || 0}`)
        console.error(`  text length: ${problematicRecord.text?.length || 0}`)
      }
    }

    process.exit(1)
  }
}

// Run main function
main().catch(console.error)

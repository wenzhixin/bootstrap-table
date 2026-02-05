import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import * as dom from '@/utils/dom.js'

describe('getScrollBarWidth', () => {
  let originalBody

  beforeEach(() => {
    originalBody = document.body.innerHTML
  })

  afterEach(() => {
    document.body.innerHTML = originalBody
  })

  it('should return a non-negative number and cache the result', () => {
    const width = dom.getScrollBarWidth()

    expect(typeof width).toBe('number')
    expect(width).toBeGreaterThanOrEqual(0)

    const width2 = dom.getScrollBarWidth()

    expect(width).toBe(width2)
  })
})

describe('classToString', () => {
  it('should return string as is', () => {
    expect(dom.classToString('foo')).toBe('foo')
    expect(dom.classToString('foo bar')).toBe('foo bar')
    expect(dom.classToString('')).toBe('')
  })

  it('should handle array input', () => {
    expect(dom.classToString(['foo', 'bar'])).toBe('foo bar')
    expect(dom.classToString(['foo', 'bar', 'baz'])).toBe('foo bar baz')
  })

  it('should filter empty strings in array', () => {
    expect(dom.classToString(['foo', '', 'bar'])).toBe('foo bar')
    expect(dom.classToString(['', '', ''])).toBe('')
  })

  it('should handle nested arrays', () => {
    expect(dom.classToString(['foo', ['bar', 'baz']])).toBe('foo bar baz')
    expect(dom.classToString([['foo'], [['bar']]])).toBe('foo bar')
  })

  it('should handle object input', () => {
    expect(dom.classToString({ foo: true, bar: true })).toBe('foo bar')
    expect(dom.classToString({ foo: true, bar: false })).toBe('foo')
    expect(dom.classToString({ foo: false, bar: false })).toBe('')
  })

  it('should handle mixed types in array', () => {
    expect(dom.classToString(['foo', { bar: true }, 'baz'])).toBe('foo bar baz')
    expect(dom.classToString([{ a: true }, { b: false }, 'c'])).toBe('a c')
  })

  it('should handle null and undefined', () => {
    expect(dom.classToString(null)).toBe('')
    expect(dom.classToString(undefined)).toBe('')
  })
})

describe('parseStyle', () => {
  it('should handle string, object, and array input', () => {
    const el1 = document.createElement('div')
    const el2 = document.createElement('div')
    const el3 = document.createElement('div')

    dom.parseStyle(el1, 'color: red; background: blue')
    dom.parseStyle(el2, { color: 'red', background: 'blue' })
    dom.parseStyle(el3, ['color: red', 'background: blue'])

    expect(el1.style.color).toBe('red')
    expect(el1.style.background).toBe('blue')
    expect(el2.style.color).toBe('red')
    expect(el2.style.background).toBe('blue')
    expect(el3.style.color).toBe('red')
    expect(el3.style.background).toBe('blue')
  })

  it('should handle !important priority', () => {
    const el1 = document.createElement('div')
    const el2 = document.createElement('div')

    dom.parseStyle(el1, { color: 'red !important' })
    dom.parseStyle(el2, 'color: red !important; background: blue')

    expect(el1.style.getPropertyValue('color')).toBe('red')
    expect(el1.style.getPropertyPriority('color')).toBe('important')
    expect(el2.style.getPropertyPriority('color')).toBe('important')
    expect(el2.style.getPropertyPriority('background')).toBe('')
  })

  it('should return the element and handle empty styles', () => {
    const el1 = document.createElement('div')
    const el2 = document.createElement('div')

    expect(dom.parseStyle(el1, 'color: red')).toBe(el1)

    dom.parseStyle(el2, '')
    dom.parseStyle(el2, {})
    dom.parseStyle(el2, [])

    expect(el2.style.length).toBe(0)
  })
})

describe('h', () => {
  it('should create element with tag name', () => {
    const el = dom.h('div')

    expect(el.tagName).toBe('DIV')
  })

  it('should set attributes', () => {
    const el = dom.h('div', { id: 'test', class: 'foo' })

    expect(el.id).toBe('test')
    expect(el.className).toBe('foo')
  })

  it('should handle class attribute', () => {
    const el1 = dom.h('div', { class: 'foo bar' })
    const el2 = dom.h('div', { class: ['foo', 'bar'] })
    const el3 = dom.h('div', { class: { foo: true, bar: false } })

    expect(el1.className).toBe('foo bar')
    expect(el2.className).toBe('foo bar')
    expect(el3.className).toBe('foo')
  })

  it('should handle style attribute', () => {
    const el1 = dom.h('div', { style: 'color: red' })
    const el2 = dom.h('div', { style: { color: 'blue' } })

    expect(el1.style.color).toBe('red')
    expect(el2.style.color).toBe('blue')
  })

  it('should handle text and innerText attributes', () => {
    const el1 = dom.h('div', { text: 'hello' })
    const el2 = dom.h('div', { innerText: 'world' })

    expect(el1.innerText).toBe('hello')
    expect(el2.innerText).toBe('world')
  })

  it('should handle html and innerHTML attributes', () => {
    const el1 = dom.h('div', { html: '<span>test</span>' })
    const el2 = dom.h('div', { innerHTML: '<span>test</span>' })

    expect(el1.innerHTML).toBe('<span>test</span>')
    expect(el2.innerHTML).toBe('<span>test</span>')
  })

  it('should handle event handlers with @ prefix', () => {
    let clicked = false
    const el = dom.h('button', { '@click': () => {
      clicked = true
    } })

    el.click()

    expect(clicked).toBe(true)
  })

  it('should handle event handlers with on prefix', () => {
    let clicked = false
    const el = dom.h('button', { onclick: () => {
      clicked = true
    } })

    el.click()

    expect(clicked).toBe(true)
  })

  it('should handle property setters with . prefix', () => {
    const el = dom.h('input', { '.value': 'test', '.type': 'text' })

    expect(el.value).toBe('test')
    expect(el.type).toBe('text')
  })

  it('should handle children array', () => {
    const child1 = document.createElement('span')
    const child2 = document.createElement('span')
    const el = dom.h('div', {}, [child1, child2])

    expect(el.children.length).toBe(2)
    expect(el.children[0]).toBe(child1)
    expect(el.children[1]).toBe(child2)
  })

  it('should handle children attribute', () => {
    const child1 = document.createElement('span')
    const child2 = document.createElement('span')
    const el = dom.h('div', { children: [child1, child2] })

    expect(el.children.length).toBe(2)
  })

  it('should add string children as text nodes', () => {
    const el = dom.h('div', {}, ['hello', 'world'])

    expect(el.childNodes.length).toBe(2)
    expect(el.childNodes[0].textContent).toBe('hello')
    expect(el.childNodes[1].textContent).toBe('world')
  })

  it('should set default href for anchor tags', () => {
    const el = dom.h('a')

    expect(el.href).toBe('javascript:')
  })

  it('should not override href if provided', () => {
    const el = dom.h('a', { href: 'https://example.com' })

    // Browsers may normalize URLs, so check that the custom href is set
    expect(el.href).toContain('https://example.com')
  })

  it('should ignore undefined attributes', () => {
    const el = dom.h('div', { id: undefined, class: 'test' })

    expect(el.id).toBe('')
    expect(el.className).toBe('test')
  })

  it('should accept existing element', () => {
    const existing = document.createElement('div')
    const el = dom.h(existing, { id: 'test' })

    expect(el).toBe(existing)
    expect(el.id).toBe('test')
  })
})

describe('htmlToNodes', () => {
  it('should convert HTML string, text, and multiple elements to nodes', () => {
    const nodes1 = dom.htmlToNodes('<div>test</div>')
    const nodes2 = dom.htmlToNodes('plain text')
    const nodes3 = dom.htmlToNodes('<div>1</div><div>2</div>')

    expect(nodes1.length).toBe(1)
    expect(nodes1[0].textContent).toBe('test')
    expect(nodes2.length).toBe(1)
    expect(nodes2[0].textContent).toBe('plain text')
    expect(nodes3.length).toBe(2)
  })

  it('should handle Node and jQuery-like objects', () => {
    const el = document.createElement('div')
    const jqueryObj = { jquery: true, 0: el, 1: document.createElement('span'), length: 2 }

    const nodes1 = dom.htmlToNodes(el)
    const nodes2 = dom.htmlToNodes(jqueryObj)

    expect(Array.isArray(nodes1)).toBe(true)
    expect(nodes1.length).toBe(1)
    expect(nodes1[0]).toBe(el)
    expect(nodes2.length).toBe(2)
    expect(nodes2[0]).toBe(el)
  })

  it('should handle non-string values, empty string, and complex HTML', () => {
    const nodes1 = dom.htmlToNodes(123)
    const nodes2 = dom.htmlToNodes('')
    const nodes3 = dom.htmlToNodes('<div class="test"><span>nested</span>text</div>')

    expect(nodes1.length).toBe(1)
    expect(nodes1[0].textContent).toBe('123')
    expect(nodes2.length).toBe(0)
    expect(nodes3.length).toBe(1)
    expect(nodes3[0].className).toBe('test')
  })
})

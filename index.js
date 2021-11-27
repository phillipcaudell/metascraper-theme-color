'use strict'

const { $jsonld, $filter, title, toRule } = require('@metascraper/helpers')

const toColor = toRule(title)

module.exports = () => ({
  color: [
    toColor($ => $('meta[name="theme-color"]').attr('content'))
  ]
})
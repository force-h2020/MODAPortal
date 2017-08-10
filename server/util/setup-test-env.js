/* eslint-disable import/no-extraneous-dependencies */
// To get normal classnames instead of CSS Modules classnames for testing
const jsdom = require("jsdom")

const { JSDOM } = jsdom

require('mock-css-modules')

// Ignore assets
require.extensions['.jpg'] = noop => noop
require.extensions['.jpeg'] = noop => noop
require.extensions['.png'] = noop => noop
require.extensions['.gif'] = noop => noop

require('babel-register')
require('babel-polyfill')

const dom = new JSDOM('<body></body>')
global.window = dom.window
global.document = dom.window.document
//global.navigator = dom.window.navigator
global.navigator = {
  userAgent: 'node.js'
};
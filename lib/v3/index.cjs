var ElementUI = require('element-plus')
require('element-plus/dist/index.css')

Object.keys(ElementUI).forEach(function(key) {
  exports[key] = ElementUI[key]
})

exports.ElementUI = ElementUI

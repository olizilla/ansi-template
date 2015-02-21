var ansi = require('ansi-styles')

function toAnsi (position, match, style) {
  if (!ansi.hasOwnProperty(style)) return match
  return ansi[style][position]
}

var openAnsiCode = toAnsi.bind(null, 'open')
var closeAnsiCode = toAnsi.bind(null, 'close')

module.exports = function (str) {
  return str
    .replace(/{(\w+)}/g, openAnsiCode)
    .replace(/{\/(\w+)}/g, closeAnsiCode)
}

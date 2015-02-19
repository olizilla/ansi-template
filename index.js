var ansi = require('ansi-styles')

module.exports = function (str) {
  return str
    .replace(/{(\w+)}/g, function (match, name) {
    var res = ansi[name]
    return res ? res.open : match
  })
  .replace(/{\/(\w+)}/g, function (match, name) {
    var res = ansi[name]
    return res ? res.close : match
  })
}
var chalkTpl = require('../index.js')
console.log(chalkTpl('{red}this should be red{/red}'))
console.log(chalkTpl('{bold}well {yellow}this should be yellow{/yellow} and bold{/bold}'))
console.log(chalkTpl('{baa} leave unknown tags in the output {green}but this should be green{/green} {/baa}'))
console.log(chalkTpl('{green}odd {underline}nesting{/green} is fine{/underline}'))

var res = Object.keys(require('ansi-styles')).map(function (style) {
  return '{style}style{/style}'.replace(/style/g, style)
})
console.log('')
console.log('Available styles:')
console.log(chalkTpl(res.join(' ')))
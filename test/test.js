var chalk = require('chalk')
var chalkTpl = require('../index.js')
var test = require('tape')

chalk.enabled = true

test('red', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{red}this should be red{/red}'),
    chalk.red('this should be red')
  )
})

test('nesting', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{bold}well {red}this should be red{/red} and bold{/bold}'),
    chalk.bold('well ' + chalk.red('this should be red') + ' and bold')
  )
})

test('ignore nonsense', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{baa} well {foo}this should be red{/foo} and bold{/baa}'),
    '{baa} well {foo}this should be red{/foo} and bold{/baa}'
  )
})
var chalk = require('chalk')
var ansi = require('ansi-styles')
var chalkTpl = require('../index.js')
var test = require('tape')

chalk.enabled = true

test('Replace {red} with the ansi code for red', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{red}this should be red{/red}'),
    chalk.red('this should be red')
  )
})

test('Handle nested styles', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{bold}well {yellow}this should be yellow{/yellow} and bold{/bold}'),
    chalk.bold('well ' + chalk.yellow('this should be yellow') + ' and bold')
  )
})

test('Ignore nonsense styles', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{baa} leave unknown tags in the output {green}but this should be green{/green} {/baa}'),
    '{baa} leave unknown tags in the output ' + chalk.green('but this should be green') + ' {/baa}'
  )
})

test('It\'s not xml; mess up the nesting as much as you like', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('{green}odd {underline}nesting{/green} is fine{/underline}'),
    ansi.green.open + 'odd ' + ansi.underline.open + 'nesting' + ansi.green.close + ' is fine' + ansi.underline.close
  )
})

test('...but no funny stuffs, Lebowski', function (t) {
  t.plan(1)
  t.equal(
    chalkTpl('thwat the leet haxors; no funny stuff {toString}'),
   'thwat the leet haxors; no funny stuff {toString}'
  )
})

test('all ansi styles are available', function (t) {
  var styles = Object.keys(ansi)
  t.plan(styles.length)
  styles.map(function (style) {
    var tpl = '{style}style{/style}'.replace(/style/g, style)
    var expected = ansi[style].open + style + ansi[style].close
    t.equal(chalkTpl(tpl), expected)
  })
})
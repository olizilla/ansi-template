# ansi-template
A String.prototype friendly replacement for colors-tmpl

[Workshopper][1] use [colors-tmpl][2] to replace `{red}`-like template commands with ansi colour / formatting codes.
It also uses `chalk` for ad-hoc terminal formatting.

```js
var ansi = require('ansi-template')
ansi('{red}Error{/red} don\'t hold much hope for the {underline}creedence tapes{/underline}')

// will return a strin with the {foo}'s replaced with the equivelant ansi-style code
```

This module is intended to be a simpler, chalk friendly alternative to colors-tmpl with no String.prototype noodling.

But then I found that `colors/safe` as used by [colors-tmpl][2] doesn't have the same String.prototpye noodling horror.
So, a timely reminder to research before adding to the pile of code. Regardless, if you want super simple colors-tmpl style templatin
for crafting terminal messages from plain text without having to look at the madness that is ansi formatting codes, this'll do that.

Made possible by the clean seperation of concerns that is [chalk][3] and [ansi-styles][4]

[1]: https://github.com/rvagg/workshopper
[2]: https://github.com/rvagg/colors-tmpl
[3]: https://github.com/sindresorhus/chalk
[4]: https://github.com/sindresorhus/ansi-styles

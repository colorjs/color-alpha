# color-alpha [![test](https://github.com/colorjs/color-alpha/actions/workflows/test.js.yml/badge.svg)](https://github.com/colorjs/color-alpha/actions/workflows/test.js.yml) [![size](https://img.shields.io/bundlephobia/minzip/color-alpha?label=size)](https://bundlephobia.com/result?p=color-alpha) ![stable](https://img.shields.io/badge/stability-stable-green)

Change alpha of a color.

[![npm install color-alpha](https://nodei.co/npm/color-alpha.png?mini=true)](https://npmjs.org/package/color-alpha/)

```js
import α from 'color-alpha'
α('white', .4); // 'rgba(255,255,255, 0.4)'
α('oklch(0.628 0.258 29.234)', .3); // 'oklch(0.628 0.258 29.234 / 0.3)'
α('rgba(244, 244, 244, .3)'); // 'rgba(244,244,244, 0.3)' — no alpha reads the color's own
```

Input color is parsed with [color-parse](https://ghub.io/color-parse): legacy `rgb`/`hsl` keep comma syntax, modern spaces (`lab`, `oklch`, `color(display-p3 …)` etc.) serialize with css slash syntax. Unparseable input returns `undefined`.

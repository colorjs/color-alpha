import assert from 'assert';
import α from './index.js';

assert.equal(α('white', .1), 'rgba(255,255,255, 0.1)');
assert.equal(α('rgba(244, 244, 244, .3)', 1), 'rgba(244,244,244, 1)');
assert.equal(α('hsla(1, 2%, 3%, .3)', 1), 'hsla(1, 2%, 3%, 1)');

// modern spaces serialize with css slash syntax
assert.equal(α('lab(54.291 80.805 69.891)', .5), 'lab(54.291 80.805 69.891 / 0.5)');
assert.equal(α('oklch(0.62796 0.25768 29.234)', .3), 'oklch(0.62796 0.25768 29.234 / 0.3)');
assert.equal(α('color(display-p3 1 0 0)', .5), 'color(display-p3 1 0 0 / 0.5)');

// no value reads the color's own alpha; unknown input is undefined, not a crash
assert.equal(α('rgba(244, 244, 244, .3)'), 'rgba(244,244,244, 0.3)');
assert.equal(α('#ff000080', 0), 'rgba(255,0,0, 0)');
assert.equal(α('yellowblue', .5), undefined);

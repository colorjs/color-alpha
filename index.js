/**
 * @module  color-alpha
 */
const parse = require('color-parse');

module.exports = alpha;

function alpha (color, value) {
	let obj = parse(color);

	if (value == null) value = obj.alpha;

	//catch percent
	if (obj.space[0] === 'h') {
		return obj.space + `a(${obj.values[0]},${obj.values[1]}%,${obj.values[2]}%,${value})`;
	}

	return obj.space + `a(${obj.values},${value})`;
}
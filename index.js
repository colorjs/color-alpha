/**
 * @module  color-alpha
 */
import parse from 'color-parse';

export default function alpha(color, value) {
	var { space, values, alpha } = parse(color);
	//catch percent
	if (space[0] === 'h') {
		return `${space}a(${values[0]}, ${values[1]}%, ${values[2]}%, ${value})`;
	}

	return `${space}a(${values}, ${value})`;
}

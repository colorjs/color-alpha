/**
 * @module  color-alpha
 */
import parse from 'color-parse';

//spaces serialized as css color(<space> c1 c2 c3 / a)
const COLORFN = /^(?:srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)$/;

export default function alpha(color, value) {
	var { space, values, alpha } = parse(color);

	if (!space) return;
	if (value == null) value = alpha;

	//legacy comma forms
	if (space[0] === 'h') {
		return `${space}a(${values[0]}, ${values[1]}%, ${values[2]}%, ${value})`;
	}
	if (space === 'rgb') {
		return `rgba(${values}, ${value})`;
	}

	//modern slash forms: lab(l a b / a), color(display-p3 r g b / a)
	if (COLORFN.test(space)) {
		return `color(${space} ${values.join(' ')} / ${value})`;
	}
	return `${space}(${values.join(' ')} / ${value})`;
}

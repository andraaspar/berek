# berek

> Utilities for the browser in TypeScript.

Depends on:
[illa](https://github.com/andraaspar/illa)
[jquery-ts](https://github.com/andraaspar/jquery-ts)

## Install

To install using [Bower](https://bower.io/):

```
bower install andraaspar/berek --save
```

Set up TypeScript using `tsconfig.json`:

```JSON
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"*": [
				"bower_components/*",
				"*"
			]
		}
	},
	"exclude": [
		"bower_components",
		"node_modules"
	]
}
```

### Webpack

`webpack.config.js` will need:

```JavaScript
resolve: {
	modulesDirectories: [
		'bower_components',
		'node_modules'
	]
}
```

## Use

Example:

```TypeScript
import $ from 'jquery-ts';
import Axis from 'illa/Axis2D';
import {
	getSize
} from 'berek/DimensionsUtil';

$(() => {
	var outJq = $('<pre></pre>').appendTo('body');
	outJq.text(getSize($('body'), Axis.X));
});
```

## License

MIT
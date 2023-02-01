<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# filledarrayBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a filled array according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
filledarrayBy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var filledarrayBy = require( 'path/to/vendor/umd/array-filled-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.filledarrayBy;
})();
</script>
```

#### filledarrayBy( \[dtype] )

Creates a filled array having a specified data type `dtype`.

```javascript
var arr = filledarrayBy();
// returns <Float64Array>
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = filledarrayBy( 'int32' );
// returns <Int32Array>
```

#### filledarrayBy( length\[, dtype], clbk\[, thisArg] )

Returns a filled array according to a provided callback function and having a specified `length`.

```javascript
function constant() {
    return 1.0;
}

var arr1 = filledarrayBy( 5, constant );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

var arr2 = filledarrayBy( 5, 'uint8', constant );
// returns <Uint8Array>[ 1, 1, 1, 1, 1 ]
```

#### filledarrayBy( array\[, dtype], clbk\[, thisArg] )

Creates a filled array from another array (or array-like object) according to a provided callback function.

```javascript
var arr0 = {
    '0': 0.5,
    '1': 0.5,
    '2': 0.5,
    'length': 3
};

function clbk1() {
    return 1.0;
}
var arr1 = filledarrayBy( arr0, clbk1 );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

function clbk2() {
    return 2.0;
}
var arr2 = filledarrayBy( arr1, clbk2 );
// returns <Float64Array>[ 2.0, 2.0, 2.0 ]

function clbk3() {
    return 3.0;
}
var arr3 = filledarrayBy( arr1, 'int32', clbk3 );
// returns <Int32Array>[ 3, 3, 3 ]
```

#### filledarrayBy( iterable\[, dtype], clbk\[, thisArg] )

Creates a filled array from an iterable according to a provided callback function.

```javascript
var iterConstant = require( '@stdlib/iter-constant' );

function clbk() {
    return 1.0;
}

var it = iterConstant( 3.0, {
    'iter': 3
});

var arr1 = filledarrayBy( it, clbk );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarrayBy( it, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0 ]
```

#### filledarrayBy( buffer\[, byteOffset\[, length]]\[, dtype], clbk\[, thisArg] )

Returns a filled [typed array][mdn-typed-array] view of an [`ArrayBuffer`][mdn-arraybuffer] according to a provided callback function.

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

function clbk() {
    return 1.0;
}

var buf = new ArrayBuffer( 32 );
var arr = filledarrayBy( buf, clbk );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, clbk );
// returns <Float64Array>[ 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, 1, clbk );
// returns <Float64Array>[ 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 10, 4, 'int16', clbk );
// returns <Int16Array>[ 1, 1, 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Creating a generic [array][mdn-array] from an [`ArrayBuffer`][mdn-arraybuffer] is **not** supported.

-   A callback function is provided a single argument:

    -   **index**: the current array index.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var dtypes = require( '@stdlib/array-typed-real-dtypes' );
var filledarrayBy = require( '@stdlib/array-filled-by' );

// Create a pseudorandom number generator:
var rand = discreteUniform( 0, 100 );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = filledarrayBy( 10, dt[ i ], rand );
    console.log( arr );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-filled-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-filled-by

[test-image]: https://github.com/stdlib-js/array-filled-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-filled-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-filled-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-filled-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-filled-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-filled-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-filled-by/tree/deno
[umd-url]: https://github.com/stdlib-js/array-filled-by/tree/umd
[esm-url]: https://github.com/stdlib-js/array-filled-by/tree/esm
[branches-url]: https://github.com/stdlib-js/array-filled-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-filled-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

</section>

<!-- /.links -->

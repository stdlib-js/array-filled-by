/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isBooleanDataType = require( '@stdlib/array-base-assert-is-boolean-data-type' );
var isCollection = require( '@stdlib/assert-is-collection' );
var isArrayBuffer = require( '@stdlib/assert-is-arraybuffer' );
var isObject = require( '@stdlib/assert-is-object' );
var isFunction = require( '@stdlib/assert-is-function' );
var ctors = require( '@stdlib/array-ctors' );
var gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );
var filledArray = require( '@stdlib/array-base-filled-by' );
var hasIteratorSymbolSupport = require( '@stdlib/assert-has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol-iterator' );
var iterLength = require( '@stdlib/iter-length' );
var defaults = require( '@stdlib/array-defaults' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// FUNCTIONS //

/**
* Creates a filled "generic" array from an iterator.
*
* @private
* @param {Iterable} it - iterator
* @param {Callback} clbk - callback function
* @param {*} thisArg - callback function execution context
* @returns {Array} filled array
*/
function filledArrayIterator( it, clbk, thisArg ) {
	var arr;
	var i;
	var v;

	arr = [];
	i = -1;
	while ( true ) {
		v = it.next();
		if ( v.done ) {
			break;
		}
		i += 1;
		arr.push( clbk.call( thisArg, i ) );
	}
	return arr;
}

/**
* Fills an array exposing accessors for getting and setting array elements.
*
* @private
* @param {Collection} arr - input array
* @param {Callback} clbk - callback function
* @param {*} thisArg - callback function execution context
* @returns {Collection} input array
*/
function filledAccessors( arr, clbk, thisArg ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		arr.set( clbk.call( thisArg, i ), i );
	}
	return arr;
}


// MAIN //

/**
* Creates a filled array according to a provided callback function.
*
* @param {(NonNegativeInteger|TypedArray|ArrayLikeObject|ArrayBuffer|Iterable)} [arg] - a length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="float64"] - data type
* @param {Callback} [clbk] - callback to invoke
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} must provide a recognized data type
* @throws {TypeError} must provide a length, typed array, array-like object, buffer, or iterable
* @throws {TypeError} callback argument must be a function.
* @throws {Error} creating a generic array from an `ArrayBuffer` is not supported
* @returns {(TypedArray|Array)} array or typed array
*
* @example
* var arr = filledarrayBy();
* // returns <Float64Array>
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'generic', clbk );
* // returns [ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( [ 0.5, 0.5 ], clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1;
* }
*
* var arr = filledarrayBy( [ 5, -3 ], 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* function clbk1() {
*     return 10;
* }
*
* function clbk2() {
*     return 1.0;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, clbk2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk1() {
*     return 1.0;
* }
*
* function clbk2() {
*     return 2;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, 'uint32', clbk2 );
* // returns <Uint32Array>[ 2, 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, clbk );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* function clbk() {
*     return 1;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*/
function filledarrayBy() {
	var thisArg;
	var nargs;
	var dtype;
	var clbk;
	var ctor;
	var arr;
	var len;
	var arg;

	nargs = arguments.length;

	// If we weren't provided any arguments, return an empty array...
	if ( nargs === 0 ) {
		ctor = ctors( DEFAULT_DTYPE );
		return new ctor( 0 );
	}
	// Check if we were provided a dtype as the first argument...
	dtype = arguments[ 0 ];
	if ( isString( dtype ) ) {
		// Invoking this function with arguments `f( dtype, clbk[, thisArg] )` is not allowed (otherwise, we'd need to also allow `f( clbk[, thisArg] )`)...
		if ( nargs > 1 ) {
			throw new TypeError( 'invalid arguments. Must provide a length, typed array, array-like object, or an iterable.' );
		}
		ctor = ctors( dtype );
		if ( ctor === null ) {
			throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
		}
		// Return an empty array having the specified dtype:
		return new ctor( 0 );
	}
	// For all other supported invocations, we need at least two arguments...
	if ( nargs < 2 ) {
		throw new TypeError( 'invalid arguments. Must provide a length, typed array, array-like object, or an iterable.' );
	}
	// At this point, we need to do some argument juggling...
	nargs -= 1; // henceforth, the number of available arguments is `nargs+1`

	// Determine whether the last argument is a callback or "this" context...
	if ( isFunction( arguments[ nargs ] ) ) {
		// If the last argument is a function, we need to check the next-to-last argument, and, if the next-to-last argument is a function, assume that the next-to-last argument is the callback and the last argument is a "this" context...
		if ( isFunction( arguments[ nargs-1 ] ) ) {
			thisArg = arguments[ nargs ];
			nargs -= 1;
			clbk = arguments[ nargs ];

			// Check if we were provided only a callback and a "this" context..
			if ( nargs === 0 ) {
				throw new TypeError( 'invalid arguments. Must provide a length, typed array, array-like object, or an iterable.' );
			}
		} else {
			// "this" context is left undefined...
			clbk = arguments[ nargs ];
		}
	}
	// If we were provided 3 or more arguments and the last argument was not a function, assume that we were provided a callback and a "this" context...
	else if ( nargs >= 2 ) {
		thisArg = arguments[ nargs ];
		nargs -= 1;
		clbk = arguments[ nargs ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
	}
	// If were were only provided 2 arguments and the last argument was not a function, we've been provided an insufficient number of arguments...
	else {
		throw new TypeError( 'invalid arguments. Must provide a length, typed array, array-like object, or an iterable.' );
	}
	// Now that we've processed the callback arguments, let's continue working backward to see if we've been provided a `dtype` argument...
	nargs -= 1;
	if ( nargs >= 0 && isString( arguments[ nargs ] ) ) {
		dtype = arguments[ nargs ];
		nargs -= 1;
	} else {
		dtype = DEFAULT_DTYPE;
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
	}
	// At this point, we've resolved the output array data type, and now we can actually create the output array...
	if ( dtype === 'generic' ) {
		arg = arguments[ 0 ];
		if ( nargs === 0 ) {
			if ( isNonNegativeInteger( arg ) ) {
				len = arg;
			} else if ( isCollection( arg ) ) {
				len = arg.length;
			}
			if ( len !== void 0 ) {
				return filledArray( len, clbk, thisArg );
			}
			if ( isArrayBuffer( arg ) ) {
				throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
			}
			if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.', arg ) );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				arg = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( arg.next ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				return filledArrayIterator( arg, clbk, thisArg );
			}
			throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
		} else if ( isArrayBuffer( arg ) ) {
			throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
		}
		throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
	}
	if ( nargs === 0 ) { // length || array-like || ArrayBuffer || iterable
		arg = arguments[ 0 ];
		if ( isCollection( arg ) ) {
			arr = new ctor( arg.length );
		} else if ( isArrayBuffer( arg ) ) {
			arr = new ctor( arg );
		} else if ( isNonNegativeInteger( arg ) ) {
			arr = new ctor( arg );
		} else if ( isObject( arg ) ) {
			if ( HAS_ITERATOR_SYMBOL === false ) {
				throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.', arg ) );
			}
			if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
			arg = arg[ ITERATOR_SYMBOL ]();
			if ( !isFunction( arg.next ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
			arr = new ctor( iterLength( arg ) );
		} else {
			throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
		}
	} else if ( nargs === 1 ) {
		arr = new ctor( arguments[0], arguments[1] ); // (ArrayBuffer, byteOffset)
	} else {
		arr = new ctor( arguments[0], arguments[1], arguments[2] ); // (ArrayBuffer, byteOffset, length)
	}
	if ( arr.length > 0 ) {
		if ( isComplexDataType( dtype ) || isBooleanDataType( dtype ) ) {
			filledAccessors( arr, clbk, thisArg );
		} else {
			gfillBy( arr.length, arr, 1, callback );
		}
	}
	return arr;

	/**
	* Callback which wraps a provided callback and is invoked for each array element.
	*
	* @private
	* @param {*} value - element value
	* @param {NonNegativeInteger} aidx - array index
	* @param {NonNegativeInteger} sidx - strided index
	* @param {Collection} array - input array/collection
	* @returns {*} callback return value
	*/
	function callback( value, aidx ) {
		return clbk.call( thisArg, aidx );
	}
}


// EXPORTS //

module.exports = filledarrayBy;

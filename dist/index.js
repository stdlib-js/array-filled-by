"use strict";var k=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var b=k(function(R,c){"use strict";var p=require("@stdlib/assert-is-string").isPrimitive,d=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,q=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),M=require("@stdlib/array-base-assert-is-boolean-data-type"),f=require("@stdlib/assert-is-collection"),g=require("@stdlib/assert-is-arraybuffer"),m=require("@stdlib/assert-is-object"),u=require("@stdlib/assert-is-function"),v=require("@stdlib/array-ctors"),j=require("@stdlib/blas-ext-base-gfill-by"),V=require("@stdlib/array-base-filled-by"),A=require("@stdlib/assert-has-iterator-symbol-support"),y=require("@stdlib/symbol-iterator"),B=require("@stdlib/iter-length"),S=require("@stdlib/array-defaults"),o=require("@stdlib/string-format"),w=A(),h=S.get("dtypes.default");function x(n,e,i){var a,t,l;for(a=[],t=-1;l=n.next(),!l.done;)t+=1,a.push(e.call(i,t));return a}function C(n,e,i){var a;for(a=0;a<n.length;a++)n.set(e.call(i,a),a);return n}function I(){var n,e,i,a,t,l,s,r;if(e=arguments.length,e===0)return t=v(h),new t(0);if(i=arguments[0],p(i)){if(e>1)throw new TypeError("invalid arguments. Must provide a length, typed array, array-like object, or an iterable.");if(t=v(i),t===null)throw new TypeError(o("invalid argument. Must provide a recognized data type. Value: `%s`.",i));return new t(0)}if(e<2)throw new TypeError("invalid arguments. Must provide a length, typed array, array-like object, or an iterable.");if(e-=1,u(arguments[e]))if(u(arguments[e-1])){if(n=arguments[e],e-=1,a=arguments[e],e===0)throw new TypeError("invalid arguments. Must provide a length, typed array, array-like object, or an iterable.")}else a=arguments[e];else if(e>=2){if(n=arguments[e],e-=1,a=arguments[e],!u(a))throw new TypeError(o("invalid argument. Callback argument must be a function. Value: `%s`.",a))}else throw new TypeError("invalid arguments. Must provide a length, typed array, array-like object, or an iterable.");if(e-=1,e>=0&&p(arguments[e])?(i=arguments[e],e-=1):i=h,t=v(i),t===null)throw new TypeError(o("invalid argument. Must provide a recognized data type. Value: `%s`.",i));if(i==="generic"){if(r=arguments[0],e===0){if(d(r)?s=r:f(r)&&(s=r.length),s!==void 0)return V(s,a,n);if(g(r))throw new Error("invalid arguments. Creating a generic array from an ArrayBuffer is not supported.");if(m(r)){if(w===!1)throw new TypeError(o("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.",r));if(!u(r[y]))throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[y](),!u(r.next))throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r));return x(r,a,n)}throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r))}else if(g(r))throw new Error("invalid arguments. Creating a generic array from an ArrayBuffer is not supported.");throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r))}if(e===0)if(r=arguments[0],f(r))l=new t(r.length);else if(g(r))l=new t(r);else if(d(r))l=new t(r);else if(m(r)){if(w===!1)throw new TypeError(o("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.",r));if(!u(r[y]))throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[y](),!u(r.next))throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r));l=new t(B(r))}else throw new TypeError(o("invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.",r));else e===1?l=new t(arguments[0],arguments[1]):l=new t(arguments[0],arguments[1],arguments[2]);return l.length>0&&(q(i)||M(i)?C(l,a,n):j(l.length,l,1,E)),l;function E(D,T){return a.call(n,T)}}c.exports=I});var O=b();module.exports=O;
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
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map

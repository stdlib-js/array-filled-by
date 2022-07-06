// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/iter-length@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var w=d();function j(r,e,t){var s,i;for(s=[],i=-1;!r.next().done;)i+=1,s.push(e.call(t,i));return s}function a(r,e,t){var s;for(s=0;s<r.length;s++)r.set(e.call(t,s),s);return r}function c(){var d,c,g,y,b,v,u,x;if(0===(c=arguments.length))return new(b=o("float64"))(0);if(r(g=arguments[0])){if(c>1)throw new TypeError(p("00L05"));if(null===(b=o(g)))throw new TypeError(p("00L2k",g));return new b(0)}if(c<2)throw new TypeError(p("00L05"));if(n(arguments[c-=1]))if(n(arguments[c-1])){if(d=arguments[c],y=arguments[c-=1],0===c)throw new TypeError(p("00L05"))}else y=arguments[c];else{if(!(c>=2))throw new TypeError(p("00L05"));if(d=arguments[c],!n(y=arguments[c-=1]))throw new TypeError(p("00L2n",y))}if((c-=1)>=0&&r(arguments[c])?(g=arguments[c],c-=1):g="float64",null===(b=o(g)))throw new TypeError(p("00L2k",g));if("generic"===g){if(x=arguments[0],0===c){if(e(x)?u=x:t(x)&&(u=x.length),void 0!==u)return m(u,y,d);if(s(x))throw new Error(p("00L04"));if(i(x)){if(!1===w)throw new TypeError(p("00L2l",x));if(!n(x[f]))throw new TypeError(p("00L2m",x));if(x=x[f](),!n(x.next))throw new TypeError(p("00L2m",x));return j(x,y,d)}throw new TypeError(p("00L2m",x))}if(s(x))throw new Error(p("00L04"));throw new TypeError(p("00L2m",x))}if(0===c)if(t(x=arguments[0]))v=new b(x.length);else if(s(x))v=new b(x);else if(e(x))v=new b(x);else{if(!i(x))throw new TypeError(p("00L2m",x));if(!1===w)throw new TypeError(p("00L2l",x));if(!n(x[f]))throw new TypeError(p("00L2m",x));if(x=x[f](),!n(x.next))throw new TypeError(p("00L2m",x));v=new b(h(x))}else v=1===c?new b(arguments[0],arguments[1]):new b(arguments[0],arguments[1],arguments[2]);return v.length>0&&(/^complex/.test(g)?a(v,y,d):l(v.length,v,1,E)),v;function E(r,e){return y.call(d,e)}}export{c as default};
//# sourceMappingURL=index.mjs.map

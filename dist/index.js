"use strict";var k=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var b=k(function(C,h){
var p=require('@stdlib/assert-is-string/dist').isPrimitive,d=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/assert-is-arraybuffer/dist'),m=require('@stdlib/assert-is-object/dist'),u=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/array-ctors/dist'),M=require('@stdlib/blas-ext-base-gfill-by/dist'),j=require('@stdlib/array-base-filled-by/dist'),q=require('@stdlib/assert-has-iterator-symbol-support/dist'),g=require('@stdlib/symbol-iterator/dist'),V=require('@stdlib/iter-length/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),w=q(),c="float64";function A(i,e,n){var a,t,l;for(a=[],t=-1;l=i.next(),!l.done;)t+=1,a.push(e.call(n,t));return a}function S(i,e,n){var a;for(a=0;a<i.length;a++)i.set(e.call(n,a),a);return i}function B(){var i,e,n,a,t,l,s,r;if(e=arguments.length,e===0)return t=v(c),new t(0);if(n=arguments[0],p(n)){if(e>1)throw new TypeError(o('00h05'));if(t=v(n),t===null)throw new TypeError(o('00h2Y',n));return new t(0)}if(e<2)throw new TypeError(o('00h05'));if(e-=1,u(arguments[e]))if(u(arguments[e-1])){if(i=arguments[e],e-=1,a=arguments[e],e===0)throw new TypeError(o('00h05'))}else a=arguments[e];else if(e>=2){if(i=arguments[e],e-=1,a=arguments[e],!u(a))throw new TypeError(o('00h2b',a))}else throw new TypeError(o('00h05'));if(e-=1,e>=0&&p(arguments[e])?(n=arguments[e],e-=1):n=c,t=v(n),t===null)throw new TypeError(o('00h2Y',n));if(n==="generic"){if(r=arguments[0],e===0){if(d(r)?s=r:f(r)&&(s=r.length),s!==void 0)return j(s,a,i);if(y(r))throw new Error(o('00h04'));if(m(r)){if(w===!1)throw new TypeError(o('00h2Z',r));if(!u(r[g]))throw new TypeError(o('00h2a',r));if(r=r[g](),!u(r.next))throw new TypeError(o('00h2a',r));return A(r,a,i)}throw new TypeError(o('00h2a',r))}else if(y(r))throw new Error(o('00h04'));throw new TypeError(o('00h2a',r))}if(e===0)if(r=arguments[0],f(r))l=new t(r.length);else if(y(r))l=new t(r);else if(d(r))l=new t(r);else if(m(r)){if(w===!1)throw new TypeError(o('00h2Z',r));if(!u(r[g]))throw new TypeError(o('00h2a',r));if(r=r[g](),!u(r.next))throw new TypeError(o('00h2a',r));l=new t(V(r))}else throw new TypeError(o('00h2a',r));else e===1?l=new t(arguments[0],arguments[1]):l=new t(arguments[0],arguments[1],arguments[2]);return l.length>0&&(/^complex/.test(n)?S(l,a,i):M(l.length,l,1,E)),l;function E(I,T){return a.call(i,T)}}h.exports=B
});var x=b();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

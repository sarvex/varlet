import{W as e,ar as S,X as d,Z as x,as as F}from"./vue-router.esm-bundler-1ba0b218.js";import{g as p}from"./shared-dcce90e2.js";function B(t){const{left:n}=t.getBoundingClientRect();return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function O(t){const{top:n}=t.getBoundingClientRect();return n+(document.body.scrollTop||document.documentElement.scrollTop)}function W(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function V(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}async function j(t){await R();const{top:n,bottom:o,left:r,right:s}=t.getBoundingClientRect(),{innerWidth:l,innerHeight:c}=window,a=r<=l&&s>=0,f=n<=c&&o>=0;return a&&f}function N(t){const{transform:n}=window.getComputedStyle(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function P(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:r,overflow:s}=window.getComputedStyle(n);if(o.test(r)||o.test(s))return n}return window}function k(t){const n=[];let o=t;for(;o!==window;)o=P(o),n.push(o);return n}function I(t,n){if(e(t)){const o=document.querySelector(t);if(!o)throw Error(`[Varlet] ${n}: target element cannot found`);return o}if(S(t))return t;throw Error(`[Varlet] ${n}: type of prop "target" should be a selector or an element object`)}const w=t=>e(t)&&t.endsWith("rem"),C=t=>e(t)&&t.endsWith("px")||d(t),L=t=>e(t)&&t.endsWith("%"),h=t=>e(t)&&t.endsWith("vw"),g=t=>e(t)&&t.endsWith("vh"),$=t=>e(t)&&t.startsWith("calc("),y=t=>e(t)&&t.startsWith("var("),A=t=>{if(d(t))return t;if(C(t))return+t.replace("px","");if(h(t))return+t.replace("vw","")*window.innerWidth/100;if(g(t))return+t.replace("vh","")*window.innerHeight/100;if(w(t)){const n=+t.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(o)}return e(t)?x(t):0},E=t=>{if(t!=null)return L(t)||h(t)||g(t)||w(t)||$(t)||y(t)?t:`${A(t)}px`},D=(t,n=1)=>{if(t==null)return;const o=E(t),r=o.match(/(vh|%|rem|px|vw)$/)[0];return`${parseFloat(o)*n}${r}`};function i(t){const n=p();return n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,16)}function H(t){const n=p();n.cancelAnimationFrame?n.cancelAnimationFrame(t):n.clearTimeout(t)}function M(t){i(()=>{i(t)})}function R(){return new Promise(t=>{i(()=>{i(t)})})}function U(){return new Promise(t=>{i(t)})}function X(t,{top:n=0,left:o=0,duration:r=300,animation:s}){const l=Date.now(),c=W(t),a=V(t);return new Promise(f=>{const m=()=>{const u=(Date.now()-l)/r;if(u<1){const T=c+(n-c)*s(u),b=a+(o-a)*s(u);t.scrollTo(b,T),i(m)}else t.scrollTo(o,n),f()};i(m)})}function Y(t){return Object.entries(t??{}).reduce((n,[o,r])=>{const s=o.startsWith("--")?o:`--${F(o)}`;return n[s]=r,n},{})}function G(){return typeof window<"u"&&"ontouchstart"in window}function Z(t){return t==="start"||t==="end"?`flex-${t}`:t}export{E as a,X as b,k as c,R as d,V as e,I as f,P as g,W as h,j as i,i as j,H as k,O as l,D as m,M as n,B as o,Z as p,N as q,U as r,G as s,A as t,Y as u};
import{S as C}from"./index-f82ab9f4.js";import{B as v}from"./index-91c00a50.js";import{aP as i,a as E,ac as L,f as s,h as N,q as h,S as a,ap as r,F as w,P as n,Q as l,aA as A,D as p,i as f,R as B}from"./vue-router.esm-bundler-c1aeda63.js";import{u as x,c as z,a as _,_ as H,b as D}from"./index-b215e5e4.js";import"./components-0c9dc58a.js";import"./elements-18e07d43.js";import"./shared-662ccb02.js";/* empty css               */import"./index-351028cc.js";import"./index-faafe5a8.js";import"./index-36abf978.js";function m(e,t){Object.keys(t).forEach(o=>{t[o]!=null&&(e.style[o]=t[o])})}function g(e){e._hover.rawStyle?e.setAttribute("style",e._hover.rawStyle):e.removeAttribute("style")}function y(){const{value:e}=this._hover;if(this._hover.hovering=!0,i(e)){e(this._hover.hovering);return}m(this,e)}function S(){if(this._hover.hovering=!1,i(this._hover.value)){this._hover.value(this._hover.hovering);return}g(this)}function U(e,t){var o;e._hover={value:t.value,hovering:((o=e._hover)==null?void 0:o.hovering)??!1,rawStyle:e.getAttribute("style")},e.addEventListener("mouseenter",y),e.addEventListener("mouseleave",S)}function b(e){g(e),e.removeEventListener("mouseenter",y),e.removeEventListener("mouseleave",S)}function F(e){b(e)}function T(e,t){return!i(t.value)&&e._hover.hovering}function P(e,t){U(e,t),T(e,t)&&m(e,t.value)}const R={mounted:U,unmounted:b,beforeUpdate:F,updated:P,install(e){e.directive("hover",this)}},d=R,$={basicUsage:"基本使用"},j={basicUsage:"Basic Usage"},{add:k,use:q,pack:O,packs:re,merge:ae}=x(),Q=e=>{z(e),q(e)};_("zh-CN",H);_("en-US",D);k("zh-CN",$);k("en-US",j);const V=n(" VARLET "),se={setup(e){const t=E(0),o=c=>{console.log("hovering",c)};function u(){t.value++}return L(Q),(c,G)=>(s(),N(w,null,[h(r(A),null,{default:a(()=>[n(l(r(O).basicUsage),1)]),_:1}),h(r(C),null,{default:a(()=>[p((s(),f(r(v),{type:"primary",style:B({background:t.value>0?"red":void 0}),onClick:u},{default:a(()=>[n(l(t.value),1)]),_:1},8,["style"])),[[r(d),{background:"green"}]]),p((s(),f(r(v),{type:"primary"},{default:a(()=>[V]),_:1})),[[r(d),o]])]),_:1})],64))}};export{se as default};

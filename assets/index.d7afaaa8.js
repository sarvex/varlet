import{u as S,b as u}from"./index.378736e4.js";import{c as g}from"./components.964f072b.js";import{d as B,b as C,_ as N,f as i,h as f,O as k,N as x,ay as y,ac as U,q as a,S as l,al as e,F as $,P as r,Q as t,az as c}from"./vue-router.esm-bundler.53acc020.js";import{I as _}from"./index.7181b41a.js";import{d as z}from"./index.e436054e.js";import{u as E,a as v,_ as L,b as A,c as D}from"./index.69d6b515.js";import"./elements.86ad7447.js";import"./shared.36d94af5.js";const F={separator:{type:String,default:"/"}},{n:w}=g("breadcrumbs"),P=B({name:"VarBreadcrumbs",props:F,setup(n){const d=C(()=>n.separator),{bindBreadcrumbList:p,length:m}=S();return p({length:m,separator:d}),{n:w}}});function V(n,d,p,m,h,M){return i(),f("div",{class:x(n.n())},[k(n.$slots,"default")],2)}const o=N(P,[["render",V]]);o.install=function(n){n.component(o.name,o)};const I={basicUsage:"\u57FA\u672C\u7528\u6CD5",separator:"\u5206\u9694\u7B26",childSeparator:"\u5B50\u7EA7\u5206\u9694\u7B26",separatorSlot:"\u5206\u9694\u7B26\u63D2\u69FD",level1:"\u9996\u9875",level2:"\u4E00\u7EA7",level3:"\u4E8C\u7EA7"},T={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2"},{add:b,use:q,pack:s,packs:X,merge:Y}=E(),H=n=>{D(n),q(n)};v("zh-CN",L);v("en-US",A);b("zh-CN",I);b("en-US",T);const Z={setup(n){return y(z),U(H),(d,p)=>(i(),f($,null,[a(e(c),null,{default:l(()=>[r(t(e(s).basicUsage),1)]),_:1}),a(e(o),null,{default:l(()=>[a(e(u),null,{default:l(()=>[r(t(e(s).level1),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level2),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level3),1)]),_:1})]),_:1}),a(e(c),null,{default:l(()=>[r(t(e(s).separator),1)]),_:1}),a(e(o),{separator:"\\"},{default:l(()=>[a(e(u),null,{default:l(()=>[r(t(e(s).level1),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level2),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level3),1)]),_:1})]),_:1}),a(e(c),null,{default:l(()=>[r(t(e(s).childSeparator),1)]),_:1}),a(e(o),null,{default:l(()=>[a(e(u),null,{default:l(()=>[r(t(e(s).level1),1)]),_:1}),a(e(u),{separator:"~"},{default:l(()=>[r(t(e(s).level2),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level3),1)]),_:1})]),_:1}),a(e(c),null,{default:l(()=>[r(t(e(s).separatorSlot),1)]),_:1}),a(e(o),null,{default:l(()=>[a(e(u),null,{separator:l(()=>[a(e(_),{name:"menu-right",style:{margin:"0 4px"}})]),default:l(()=>[r(" "+t(e(s).level1),1)]),_:1}),a(e(u),null,{separator:l(()=>[a(e(_),{name:"menu-right",style:{margin:"0 4px"}})]),default:l(()=>[r(" "+t(e(s).level2),1)]),_:1}),a(e(u),null,{default:l(()=>[r(t(e(s).level3),1)]),_:1})]),_:1})],64))}};export{Z as default};

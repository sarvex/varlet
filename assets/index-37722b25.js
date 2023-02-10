import{u as L,a as M,c as g,d as P,e as I,f as z,b as T}from"./components-25275440.js";import{d as U,b as B,_ as E,f as S,h as $,O as C,N as f,M as h,Q as s,j as V,az as w,ac as K,q as r,S as t,ap as e,F as Y,P as n,aA as m}from"./vue-router.esm-bundler-10f05234.js";import{I as k}from"./index-a551829b.js";import{S as b}from"./index-29133017.js";import{d as O}from"./index-7f7c9244.js";import{u as x,c as F,a as R,_ as j,b as q}from"./index-743dd119.js";import"./elements-87b8c072.js";import"./shared-5ff0af51.js";import"./index-f4fd07ca.js";import"./zIndex-2b1708db.js";import"./index-099a024e.js";import"./lock-d6df0cf1.js";const H={separator:{type:String,default:"/"}},N=Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"),y=Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");function Q(){const{childProviders:a,bindChildren:d}=L(N),{length:o}=M(y);return{length:o,breadcrumbList:a,bindBreadcrumbList:d}}const{n:G}=g("breadcrumbs"),J=U({name:"VarBreadcrumbs",props:H,setup(a){const d=B(()=>a.separator),{bindBreadcrumbList:o,length:i}=Q();return o({length:i,separator:d}),{n:G}}});function W(a,d,o,i,p,_){return S(),$("div",{class:f(a.n())},[C(a.$slots,"default")],2)}const c=E(J,[["render",W]]);c.install=function(a){a.component(c.name,c)};const X={separator:{type:String},onClick:P()};function Z(){const{parentProvider:a,bindParent:d}=I(N),{index:o}=z(y);if(!a||!d||!o)throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");return{index:o,breadcrumb:a,bindBreadcrumb:d}}const{n:ee,classes:ae}=g("breadcrumb"),re=U({name:"VarBreadcrumb",props:X,setup(a){const{index:d,breadcrumb:o,bindBreadcrumb:i}=Z(),p=B(()=>d.value===o.length.value-1),_=B(()=>o.separator.value),v=D=>{p.value||T(a.onClick,D)};return i(null),{n:ee,classes:ae,isLast:p,parentSeparator:_,handleClick:v}}});function te(a,d,o,i,p,_){return S(),$("div",{class:f(a.n())},[h("div",{class:f(a.classes(a.n("content"),[!a.isLast,a.n("--active")])),onClick:d[0]||(d[0]=(...v)=>a.handleClick&&a.handleClick(...v))},[C(a.$slots,"default")],2),a.isLast?V("",!0):C(a.$slots,"separator",{key:0},()=>[h("div",{class:f(a.n("separator"))},s(a.separator??a.parentSeparator),3)])],2)}const u=E(re,[["render",te]]);u.install=function(a){a.component(u.name,u)};const le={basicUsage:"基本用法",separator:"分隔符",childSeparator:"子级分隔符",separatorSlot:"分隔符插槽",level1:"首页",level2:"一级",level3:"二级",events:"注册事件"},se={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2",events:"Events"},{add:A,use:ne,pack:l,packs:Se,merge:$e}=x(),oe=a=>{F(a),ne(a)};R("zh-CN",j);R("en-US",q);A("zh-CN",le);A("en-US",se);const he={setup(a){return w(O),K(oe),(d,o)=>(S(),$(Y,null,[r(e(m),null,{default:t(()=>[n(s(e(l).basicUsage),1)]),_:1}),r(e(c),null,{default:t(()=>[r(e(u),null,{default:t(()=>[n(s(e(l).level1),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level2),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:t(()=>[n(s(e(l).separator),1)]),_:1}),r(e(c),{separator:"\\"},{default:t(()=>[r(e(u),null,{default:t(()=>[n(s(e(l).level1),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level2),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:t(()=>[n(s(e(l).childSeparator),1)]),_:1}),r(e(c),null,{default:t(()=>[r(e(u),null,{default:t(()=>[n(s(e(l).level1),1)]),_:1}),r(e(u),{separator:"~"},{default:t(()=>[n(s(e(l).level2),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:t(()=>[n(s(e(l).separatorSlot),1)]),_:1}),r(e(c),null,{default:t(()=>[r(e(u),null,{separator:t(()=>[r(e(k),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:t(()=>[n(" "+s(e(l).level1),1)]),_:1}),r(e(u),null,{separator:t(()=>[r(e(k),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:t(()=>[n(" "+s(e(l).level2),1)]),_:1}),r(e(u),null,{default:t(()=>[n(s(e(l).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:t(()=>[n(s(e(l).events),1)]),_:1}),r(e(c),null,{default:t(()=>[r(e(u),{onClick:o[0]||(o[0]=i=>e(b)(e(l).level1))},{default:t(()=>[n(s(e(l).level1),1)]),_:1}),r(e(u),{onClick:o[1]||(o[1]=i=>e(b)(e(l).level2))},{default:t(()=>[n(s(e(l).level2),1)]),_:1}),r(e(u),{onClick:o[2]||(o[2]=i=>e(b)(e(l).level3))},{default:t(()=>[n(s(e(l).level3),1)]),_:1})]),_:1})],64))}};export{he as default};
import{a as k}from"./elements-193ac0ca.js";import{c as T}from"./components-fc1cd0bf.js";import{d as w,_ as $,f as d,h as m,M as e,N as p,R as V,O as b,j,a as B,ac as F,az as I,q as i,S as u,ap as a,F as N,P as S,Q as n,aA as v,ai as A,al as L,am as M}from"./vue-router.esm-bundler-d435a56a.js";import{P}from"./index-9af0a8ae.js";import{d as D}from"./index-7f7c9244.js";import{u as E,c as W,a as C,_ as q,b as J}from"./index-dd4b14ad.js";import"./shared-03d75835.js";import"./index-fa9b4e33.js";import"./usePopover-153ef908.js";import"./zIndex-08e6dd7d.js";import"./index-f00987a2.js";import"./index-3318e5c9.js";/* empty css               */import"./index-b091044a.js";import"./index-83746993.js";import"./index-2b9d5d8b.js";import"./index-41f5a3ff.js";const O={fullWidth:{type:[Number,String],default:"100%"}},{n:Q,classes:R}=T("table"),x=w({name:"VarTable",props:O,setup(){return{toSizeUnit:k,n:Q,classes:R}}});function G(t,_,f,y,l,o){return d(),m("div",{class:p(t.classes(t.n(),t.n("$-elevation--1"),t.n("$--box")))},[e("div",{class:p(t.n("main"))},[e("table",{class:p(t.n("table")),style:V({width:t.toSizeUnit(t.fullWidth)})},[b(t.$slots,"default")],6)],2),t.$slots.footer?(d(),m("div",{key:0,class:p(t.n("footer"))},[b(t.$slots,"footer")],2)):j("",!0)],2)}const c=$(x,[["render",G]]);c.install=function(t){t.component(c.name,c)};const H={basicUsage:"基本使用",slot:"尾部插槽",math:"数学",english:"英语",tom:"火猫桑",jerry:"耗子君",name:"姓名"},K={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"},{add:U,use:X,pack:s,packs:ve,merge:$e}=E(),Y=t=>{W(t),X(t)};C("zh-CN",q);C("en-US",J);U("zh-CN",H);U("en-US",K);const h=t=>(L("data-v-9699b2a0"),t=t(),M(),t),Z=h(()=>e("td",null,"124",-1)),ee=h(()=>e("td",null,"38",-1)),te=h(()=>e("td",null,"100",-1)),ae=h(()=>e("td",null,"135",-1)),ne={class:"footer"},se={setup(t){const _=B(f(1,10));function f(l,o){return Array.from({length:o}).map((r,z)=>{const g=(l-1)*o+z+1;return{name:`Name ${g}`,math:g,english:g}})}function y(l,o){_.value=f(l,o)}return F(Y),I(D),(l,o)=>(d(),m(N,null,[i(a(v),null,{default:u(()=>[S(n(a(s).basicUsage),1)]),_:1}),i(a(c),null,{default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(a(s).jerry),1),Z,ee]),e("tr",null,[e("td",null,n(a(s).tom),1),te,ae])])]),_:1}),i(a(v),null,{default:u(()=>[S(n(a(s).slot),1)]),_:1}),i(a(c),null,{footer:u(()=>[e("div",ne,[i(a(P),{current:1,total:100,"size-option":[5,10],onChange:y})])]),default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[(d(!0),m(N,null,A(_.value,r=>(d(),m("tr",{key:r.name},[e("td",null,n(r.name),1),e("td",null,n(r.math),1),e("td",null,n(r.english),1)]))),128))])]),_:1})],64))}},Ce=$(se,[["__scopeId","data-v-9699b2a0"]]);export{Ce as default};

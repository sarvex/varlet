import{I as h}from"./index.a6b7b706.js";import{B as r}from"./index.165a818c.js";import{A}from"./index.1a2f0b59.js";import{_ as I,a as i,b as N,ac as $,ay as z,f as P,h as V,M as y,q as a,S as n,ap as e,F as j,P as l,Q as u,az as S}from"./vue-router.esm-bundler.34317ebb.js";import{S as L}from"./index.07e54d8f.js";import{d as T}from"./index.e436054e.js";import{u as M,a as F,_ as q,b as H,c as O}from"./index.0907a6d7.js";import{I as Q}from"./index.6d2543c3.js";import"./index.1ce1139b.js";import"./provide.d0472b88.js";import"./components.3467a955.js";import"./elements.6cdeda8d.js";import"./shared.f164cbda.js";import"./index.cd145c6a.js";import"./index.786a7817.js";import"./lock.52f500fb.js";import"./index.791cbee6.js";import"./zIndex.3abb4089.js";/* empty css               */import"./index.f25368c3.js";import"./index.3cb5b454.js";const G={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},J={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"},{add:b,use:K,pack:s,packs:ke,merge:Ee}=M(),R=v=>{O(v),K(v)};F("zh-CN",q);F("en-US",H);b("zh-CN",G);b("en-US",J);const W={class:"image-preview-demo"},X={class:"image-preview-demo"},Y={setup(v){const p=h.Component,B=A.Component,c=i(!1),w=i(!1),d=i(!1),C=i(!1),f=i(!1),g=i(!1),m=i(["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"]),k=i(["https://varlet.gitee.io/varlet-ui/cat.jpg"]),D=N(()=>[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]),x=()=>{L({content:s.value.shutdownEvent,duration:1e3})},U=()=>{h(k.value)},_=()=>{h({images:m,onChange:E=>{console.log("index",E)}})};return $(R),z(T),(E,t)=>(P(),V(j,null,[y("div",W,[a(e(S),null,{default:n(()=>[l(u(e(s).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:n(()=>[l(u(e(s).preview),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:_},{default:n(()=>[l(u(e(s).callBack),1)]),_:1})]),y("div",X,[a(e(S),null,{default:n(()=>[l(u(e(s).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:n(()=>[l(u(e(s).basicUse),1)]),_:1}),a(e(p),{images:k.value,show:c.value,"onUpdate:show":t[1]||(t[1]=o=>c.value=o)},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[2]||(t[2]=o=>w.value=!0)},{default:n(()=>[l(u(e(s).specifyInitialPosition),1)]),_:1}),a(e(p),{images:m.value,show:w.value,"onUpdate:show":t[3]||(t[3]=o=>w.value=o),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[4]||(t[4]=o=>d.value=!0)},{default:n(()=>[l(u(e(s).displayCloseButton),1)]),_:1}),a(e(p),{images:m.value,show:d.value,"onUpdate:show":t[5]||(t[5]=o=>d.value=o),closeable:!0},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[6]||(t[6]=o=>C.value=!0)},{default:n(()=>[l(u(e(s).listenCloseEvents),1)]),_:1}),a(e(p),{images:m.value,show:C.value,"onUpdate:show":t[7]||(t[7]=o=>C.value=o),onClose:x},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[8]||(t[8]=o=>f.value=!0)},{default:n(()=>[l(u(e(s).showExtraSlots),1)]),_:1}),a(e(p),{images:m.value,show:f.value,"onUpdate:show":t[11]||(t[11]=o=>f.value=o)},{extra:n(()=>[a(e(Q),{name:"menu",size:22,color:"#fff",onClick:t[9]||(t[9]=o=>g.value=!0)}),a(e(B),{actions:e(D),show:g.value,"onUpdate:show":t[10]||(t[10]=o=>g.value=o)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64))}},ye=I(Y,[["__scopeId","data-v-257aa750"]]);export{ye as default};
import{M as p}from"./index.9a092c6c.js";import{S as D}from"./index.ae6ac06d.js";import{B as m}from"./index.dab83ca2.js";import{S as F}from"./index.4f16d63b.js";import{O as v}from"./index.5551549b.js";import{C as u}from"./index.173a40d3.js";import{S as d}from"./index.cfd02f99.js";import{A as i}from"./AppType.4c910996.js";import{u as M,a as B,_ as N,b as w,c as T}from"./index.2dfd012d.js";import{a as z,b as I}from"./utils.76713588.js";import{d as L}from"./index.8b4f1b33.js";import{_ as P,r as X,a as _,aH as Y,p as $,f as b,h as C,q as l,S as t,an as e,M as O,F as x,P as o,Q as a,ak as j,i as q,ao as H,ap as Q}from"./vue-router.esm-bundler.42d3c0c2.js";import"./components.0c747098.js";import"./elements.f7cbc1d5.js";import"./shared.f221b787.js";import"./zIndex.ca8ef2b3.js";import"./index.712020a1.js";/* empty css               */import"./index.d1d03c1f.js";import"./index.50db04cf.js";import"./index.87785518.js";import"./index.2be5c03e.js";import"./provide.3fa724a1.js";import"./index.ce83a648.js";import"./lock.4badc63d.js";const R={basicUsage:"\u57FA\u672C\u4F7F\u7528",alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",events:"\u6CE8\u518C\u4E8B\u4EF6",disabled:"\u7981\u7528\u83DC\u5355",placement:"\u83DC\u5355\u4F4D\u7F6E",trigger:"\u89E6\u53D1\u65B9\u5F0F"},G={basicUsage:"Basic Usage",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger"},{add:S,use:J,pack:n,packs:ke,merge:Ue}=M(),K=r=>{T(r),J(r)};B("zh-CN",N);B("en-US",w);S("zh-CN",R);S("en-US",G);const h=r=>(H("data-v-641f6d8e"),r=r(),Q(),r),W={class:"flex-box"},Z=h(()=>O("div",{style:{"margin-bottom":"20px"}},null,-1)),ee=h(()=>O("div",{style:{"margin-bottom":"100px"}},null,-1)),te={setup(r){const k=X({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1,placement:!0,trigger:!1}),U=_("#fff");Y(k);const c=_("cover-top-start"),A=_(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","cover-top","cover-top-start","cover-top-end","cover-bottom","cover-bottom-start","cover-bottom-end","cover-left","cover-right"]),g=_("click");return z(K),I(L,y=>{U.value=y==="darkThemes"?"#272727":"#fff"}),(y,s)=>{const E=$("var-icon");return b(),C(x,null,[l(e(i),null,{default:t(()=>[o(a(e(n).basicUsage),1)]),_:1}),l(e(p),null,{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[o(a(e(n).basicUsage),1)]),_:1})]),_:1}),l(e(i),null,{default:t(()=>[o(a(e(n).placement),1)]),_:1}),l(e(F),{hint:!1,modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=f=>c.value=f)},{default:t(()=>[(b(!0),C(x,null,j(A.value,(f,V)=>(b(),q(e(v),{key:V,label:f},null,8,["label"]))),128))]),_:1},8,["modelValue"]),O("div",W,[l(e(p),{placement:c.value},{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[l(E,{name:"star"})]),_:1})]),_:1},8,["placement"])]),l(e(i),null,{default:t(()=>[o(a(e(n).offset),1)]),_:1}),l(e(p),{"offset-x":"36px","offset-y":"18px"},{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[o(a(e(n).offset),1)]),_:1})]),_:1}),l(e(i),null,{default:t(()=>[o(a(e(n).trigger),1)]),_:1}),l(e(F),{hint:!1,modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=f=>g.value=f)},{default:t(()=>[l(e(v),{label:"click"}),l(e(v),{label:"hover"})]),_:1},8,["modelValue"]),Z,l(e(p),{trigger:g.value},{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[o(a(e(n).trigger),1)]),_:1})]),_:1},8,["trigger"]),l(e(i),null,{default:t(()=>[o(a(e(n).events),1)]),_:1}),l(e(p),{onOpen:s[2]||(s[2]=()=>e(d).info("open")),onOpened:s[3]||(s[3]=()=>e(d).success("opened")),onClose:s[4]||(s[4]=()=>e(d).warning("close")),onClosed:s[5]||(s[5]=()=>e(d).error("closed"))},{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[o(a(e(n).events),1)]),_:1})]),_:1}),l(e(i),null,{default:t(()=>[o(a(e(n).disabled),1)]),_:1}),l(e(D),{justify:"space-between"},{default:t(()=>[l(e(p),{disabled:""},{menu:t(()=>[l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[o(a(e(n).menuOption),1)]),_:1})]),default:t(()=>[l(e(m),{type:"primary"},{default:t(()=>[o(a(e(n).disabled),1)]),_:1})]),_:1})]),_:1}),ee],64)}}},Ae=P(te,[["__scopeId","data-v-641f6d8e"]]);export{Ae as default};

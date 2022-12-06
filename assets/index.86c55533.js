import{M as r}from"./index.7a07a33f.js";import{S as U}from"./index.e5b337c2.js";import{B as m}from"./index.ff96511a.js";import{S as F}from"./index.3ad21659.js";import{O as y}from"./index.fc2b15f1.js";import{C as u}from"./index.027eb0ef.js";import{S as f}from"./index.70263a6b.js";import{_ as E,a as _,ae as V,aA as M,p as D,f as b,h as C,q as n,S as t,an as e,M as w,F as B,P as l,Q as o,aB as d,ak as N,i as T,ao as z,ap as I}from"./vue-router.esm-bundler.a03b8b02.js";import{d as W}from"./index.43bb0831.js";import{u as L,a as k,_ as P,b as $,c as j}from"./index.bb7a1b0d.js";import"./components.eb927237.js";import"./elements.39521dbc.js";import"./shared.33322536.js";import"./zIndex.aeb8ecbe.js";import"./index.289c1b48.js";/* empty css               */import"./index.7505bc45.js";import"./index.d01a7b43.js";import"./index.d0618c3d.js";import"./index.5716b4a3.js";import"./provide.33f00d49.js";import"./index.2bc0c345.js";import"./lock.f115252b.js";const q={basicUsage:"\u57FA\u672C\u4F7F\u7528",alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",events:"\u6CE8\u518C\u4E8B\u4EF6",disabled:"\u7981\u7528\u83DC\u5355",placement:"\u5F39\u51FA\u4F4D\u7F6E",trigger:"\u89E6\u53D1\u65B9\u5F0F",twoWayBinding:"\u53CC\u5411\u7ED1\u5B9A"},Q={basicUsage:"Basic Usage",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way binding"},{add:x,use:G,pack:a,packs:Ce,merge:Be}=L(),H=i=>{j(i),G(i)};k("zh-CN",P);k("en-US",$);x("zh-CN",q);x("en-US",Q);const J=i=>(z("data-v-5c92a140"),i=i(),I(),i),K={class:"placement-container"},R=J(()=>w("div",{style:{"margin-bottom":"100px"}},null,-1)),X={setup(i){const c=_(!1),g=_("click"),v=_("cover-top-start"),S=_(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","cover-top","cover-top-start","cover-top-end","cover-bottom","cover-bottom-start","cover-bottom-end","cover-left","cover-right"]),O=()=>{c.value=!1};return V(H),M(W),(Y,s)=>{const h=D("var-icon");return b(),C(B,null,[n(e(d),null,{default:t(()=>[l(o(e(a).basicUsage),1)]),_:1}),n(e(r),null,{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).basicUsage),1)]),_:1})]),_:1}),n(e(d),null,{default:t(()=>[l(o(e(a).placement),1)]),_:1}),n(e(F),{hint:!1,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=p=>v.value=p)},{default:t(()=>[(b(!0),C(B,null,N(S.value,(p,A)=>(b(),T(e(y),{key:A,label:p},null,8,["label"]))),128))]),_:1},8,["modelValue"]),w("div",K,[n(e(r),{placement:v.value},{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[n(h,{name:"star"})]),_:1})]),_:1},8,["placement"])]),n(e(d),null,{default:t(()=>[l(o(e(a).offset),1)]),_:1}),n(e(r),{"offset-x":"36px","offset-y":"18px"},{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).offset),1)]),_:1})]),_:1}),n(e(d),null,{default:t(()=>[l(o(e(a).trigger),1)]),_:1}),n(e(F),{hint:!1,modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=p=>g.value=p)},{default:t(()=>[n(e(y),{label:"click"}),n(e(y),{label:"hover"})]),_:1},8,["modelValue"]),n(e(r),{style:{"margin-top":"15px"},trigger:g.value},{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).trigger),1)]),_:1})]),_:1},8,["trigger"]),n(e(d),null,{default:t(()=>[l(o(e(a).events),1)]),_:1}),n(e(r),{onOpen:s[2]||(s[2]=()=>e(f).info("open")),onOpened:s[3]||(s[3]=()=>e(f).success("opened")),onClose:s[4]||(s[4]=()=>e(f).warning("close")),onClosed:s[5]||(s[5]=()=>e(f).error("closed"))},{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).events),1)]),_:1})]),_:1}),n(e(d),null,{default:t(()=>[l(o(e(a).disabled),1)]),_:1}),n(e(U),{justify:"space-between"},{default:t(()=>[n(e(r),{disabled:""},{menu:t(()=>[n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),null,{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).disabled),1)]),_:1})]),_:1})]),_:1}),n(e(d),null,{default:t(()=>[l(o(e(a).twoWayBinding),1)]),_:1}),n(e(r),{show:c.value,"onUpdate:show":s[6]||(s[6]=p=>c.value=p)},{menu:t(()=>[n(e(u),{onClick:O},{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),{onClick:O},{default:t(()=>[l(o(e(a).menuOption),1)]),_:1}),n(e(u),{onClick:O},{default:t(()=>[l(o(e(a).menuOption),1)]),_:1})]),default:t(()=>[n(e(m),{type:"primary"},{default:t(()=>[l(o(e(a).twoWayBinding),1)]),_:1})]),_:1},8,["show"]),R],64)}}},we=E(X,[["__scopeId","data-v-5c92a140"]]);export{we as default};
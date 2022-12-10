import{c as R}from"./components.b28276ef.js";import{d as U,a as D,o as z,aj as L,_ as P,f as r,h as c,M as F,O as p,N as u,R as y,j as S,P as s,Q as n,ac as T,ay as b,q as o,S as a,al as e,F as V,az as f,D as v,i as A}from"./vue-router.esm-bundler.2ed3d3be.js";import{I as $}from"./index.e5fcd4e2.js";import{R as C}from"./index.f2d45089.js";import{M}from"./index.13382a64.js";import{B as k}from"./index.8f7ae902.js";import{C as B}from"./index.2a0645c1.js";import{d as w}from"./index.43bb0831.js";import{u as E,a as N,_ as I,b as O,c as j}from"./index.ca255ec5.js";import"./elements.0bf810d9.js";import"./shared.f230d8d7.js";import"./index.e17ac177.js";/* empty css               */import"./zIndex.aa6a2086.js";import"./index.adc7ecaf.js";function q(t){return["left","center","right"].includes(t)}const Q={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:q},elevation:{type:Boolean,default:!0},round:{type:Boolean,default:!1}},{n:G,classes:H}=R("app-bar"),J=U({name:"VarAppBar",props:Q,setup(t,{slots:d}){const m=D(),g=D(),h=()=>{m.value=d.left?0:void 0,g.value=d.right?0:void 0};return z(h),L(h),{n:G,classes:H,paddingLeft:m,paddingRight:g}}});function K(t,d,m,g,h,x){return r(),c("div",{class:u(t.classes(t.n(),[t.round,t.n("--round")],[t.elevation,t.n("$-elevation--3")])),style:y({background:t.color,color:t.textColor})},[F("div",{class:u(t.n("left"))},[p(t.$slots,"left"),t.titlePosition==="left"?(r(),c("div",{key:0,class:u(t.n("title")),style:y({paddingLeft:t.paddingLeft})},[p(t.$slots,"default",{},()=>[s(n(t.title),1)])],6)):S("",!0)],2),t.titlePosition==="center"?(r(),c("div",{key:0,class:u(t.n("title"))},[p(t.$slots,"default",{},()=>[s(n(t.title),1)])],2)):S("",!0),F("div",{class:u(t.n("right"))},[t.titlePosition==="right"?(r(),c("div",{key:0,class:u(t.n("title")),style:y({paddingRight:t.paddingRight})},[p(t.$slots,"default",{},()=>[s(n(t.title),1)])],6)):S("",!0),p(t.$slots,"right")],2)],6)}const i=P(J,[["render",K]]);i.install=function(t){t.component(i.name,i)};const W={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",title:"\u6807\u9898",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",option:"\u9009\u9879\u5361",search:"\u641C\u7D22",round:"\u5F00\u542F\u5706\u89D2"},X={basicUsage:"Basic Usage",customStyle:"Custom Background Color",addSlotsAtTitle:"Add Slots At Title",title:"Title",addLeftAndRightSlot:"Add Left And Right Slot",option:"OPTION",search:"search",round:"Use Border Radius"},{add:_,use:Y,pack:l,packs:gt,merge:ht}=E(),Z=t=>{j(t),Y(t)};N("zh-CN",I);N("en-US",O);_("zh-CN",W);_("en-US",X);const yt={setup(t){return T(Z),b(w),(d,m)=>(r(),c(V,null,[o(e(f),null,{default:a(()=>[s(n(e(l).basicUsage),1)]),_:1}),o(e(i),{title:e(l).title},null,8,["title"]),o(e(f),null,{default:a(()=>[s(n(e(l).addSlotsAtTitle),1)]),_:1}),o(e(i),null,{default:a(()=>[s(n(e(l).addSlotsAtTitle),1)]),_:1}),o(e(f),null,{default:a(()=>[s(n(e(l).addLeftAndRightSlot),1)]),_:1}),o(e(i),{title:e(l).title},{left:a(()=>[o(e(k),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:a(()=>[o(e($),{name:"chevron-left",size:24})]),_:1})]),right:a(()=>[o(e(M),{placement:"bottom-start","offset-y":12},{menu:a(()=>[v((r(),A(e(B),null,{default:a(()=>[s(n(e(l).option),1)]),_:1})),[[e(C)]]),v((r(),A(e(B),null,{default:a(()=>[s(n(e(l).option),1)]),_:1})),[[e(C)]]),v((r(),A(e(B),null,{default:a(()=>[s(n(e(l).option),1)]),_:1})),[[e(C)]])]),default:a(()=>[o(e(k),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:a(()=>[o(e($),{name:"menu",size:24})]),_:1})]),_:1})]),_:1},8,["title"]),o(e(f),null,{default:a(()=>[s(n(e(l).round),1)]),_:1}),o(e(i),{title:e(l).round,"title-position":"center",round:""},null,8,["title"]),o(e(f),null,{default:a(()=>[s(n(e(l).customStyle),1)]),_:1}),o(e(i),{title:e(l).title,"title-position":"center",color:"linear-gradient(var(--color-primary), var(--color-info))"},null,8,["title"])],64))}};export{yt as default};
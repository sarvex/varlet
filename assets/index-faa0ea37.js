import{c as k}from"./index-52536746.js";import{c as N,m as w}from"./components-b6fa4b7a.js";import{a as d}from"./elements-3b8faeb1.js";/* empty css               */import{d as B,q as a,r as x,a as z,az as U,ac as _,f as T,h as $,S as n,ap as t,F as L,P as l,Q as u,aA as M}from"./vue-router.esm-bundler-aeae2b6c.js";import{B as m}from"./index-a2c66d4b.js";import{S as V}from"./index-fd2d2a39.js";import{d as F}from"./index-a0d4b3bb.js";import{u as I,c as A,a as h,_ as D,b as E}from"./index-12056b48.js";import"./shared-bd251288.js";import"./index-a369e72f.js";import"./index-7f93c351.js";const j={value:{type:Number,default:0},opacity:{type:Number,default:0},error:{type:Boolean,default:!1},color:{type:String},errorColor:{type:String},height:{type:[Number,String]},top:{type:[Number,String]}};const{classes:q,n:g}=N("loading-bar"),O=B({name:"VarLoadingBar",props:j,setup(e){return()=>a("div",{class:q(g(),[e.error,g("--error")]),style:{zIndex:k.zIndex+10,width:`${e.value}%`,opacity:e.opacity,height:d(e.height),backgroundColor:e.error?e.errorColor:e.color,top:d(e.top)}},null)}});let v,y;const r=x({value:0,opacity:0,error:!1}),P=e=>{Object.assign(r,e)},C=()=>{v=window.setTimeout(()=>{if(r.value>=95)return;let e=Math.random();r.value<70&&(e=Math.round(5*Math.random())),r.value+=e,C()},200)},Q=()=>{y||(y=!0,w(O,r)),(!r.error||r.value===100)&&(r.value=0),setTimeout(()=>{r.opacity=1},200),C()},G=()=>{r.value=100,setTimeout(()=>{r.opacity=0,setTimeout(()=>{r.error=!1},250)},300),window.clearTimeout(v)},H=()=>{r.error=!0,p.start(),setTimeout(p.finish,300)},p={start:Q,finish:G,error:H,mergeConfig:P},c=p,J={basicUsage:"基本使用",start:"开始",finish:"结束",error:"错误",custom:"设置样式",clear:"清除样式"},K={basicUsage:"Basic Usage",start:"Start",finish:"Finish",error:"Error",custom:"Custom Style",clear:"Clear Style"},{add:S,use:R,pack:i,packs:ce,merge:me}=I(),W=e=>{A(e),R(e)};h("zh-CN",D);h("en-US",E);S("zh-CN",J);S("en-US",K);const pe={setup(e){const o=z(!1),b=()=>{c.mergeConfig({errorColor:o.value?void 0:"#ff8800",color:o.value?void 0:"#10afef",height:o.value?void 0:"5px"}),o.value=!o.value};return U(F),_(W),c.mergeConfig({top:"14.5vw"}),(X,s)=>(T(),$(L,null,[a(t(M),null,{default:n(()=>[l(u(t(i).basicUsage),1)]),_:1}),a(t(V),{direction:"column",size:["3vw","4vw"]},{default:n(()=>[a(t(m),{type:"primary",block:"",onClick:s[0]||(s[0]=f=>t(c).start())},{default:n(()=>[l(u(t(i).start),1)]),_:1}),a(t(m),{type:"primary",block:"",onClick:s[1]||(s[1]=f=>t(c).finish())},{default:n(()=>[l(u(t(i).finish),1)]),_:1}),a(t(m),{type:"primary",block:"",onClick:s[2]||(s[2]=f=>t(c).error())},{default:n(()=>[l(u(t(i).error),1)]),_:1}),a(t(m),{type:"primary",block:"",onClick:b},{default:n(()=>[l(u(o.value?t(i).clear:t(i).custom),1)]),_:1})]),_:1})],64))}};export{pe as default};

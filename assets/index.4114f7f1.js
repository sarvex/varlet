import{p as C}from"./elements.6cdeda8d.js";import{f as F,c as b}from"./components.3467a955.js";import{d as N,av as x,r as E,a as P,ac as R,u as U,a1 as w,f as B,h as z,q as a,S as s,ap as e,F as D,P as m,Q as p,az as y}from"./vue-router.esm-bundler.34317ebb.js";import{R as $}from"./index.878938d4.js";import{S as j}from"./index.c0c7b49f.js";import{B as h}from"./index.165a818c.js";import{d as L}from"./index.e436054e.js";import{u as O,a as v,_ as q,b as A,c as K}from"./index.0907a6d7.js";import"./shared.f164cbda.js";import"./index.6d2543c3.js";import"./provide.732783ad.js";import"./index.f25368c3.js";import"./index.791cbee6.js";/* empty css               */import"./index.3cb5b454.js";const{n:Q}=b("style-provider"),l=N({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},setup(t,{slots:n}){return()=>x(t.tag,{class:Q(),style:C(t.styleVars)},F(n.default))}});const g=[];function u(t){g.forEach(o=>document.documentElement.style.removeProperty(o)),g.length=0;const n=C(t!=null?t:{});Object.entries(n).forEach(([o,r])=>{document.documentElement.style.setProperty(o,r),g.push(o)})}u.Component=l;l.install=function(t){t.component(l.name,l)};u.install=function(t){t.component(l.name,l)};const G={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},H={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"},{add:_,use:I,pack:i,packs:pe,merge:ie}=O(),J=t=>{K(t),I(t)};v("zh-CN",q);v("en-US",A);_("zh-CN",G);_("en-US",H);const de={setup(t){const n=u.Component,o=E({score:5,license:!0}),r=P(null),T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},S=()=>{r.value=r.value?null:T};let d=null;const k={"--color-primary":"#3f51b5"},V=()=>{d=d?null:k,u(d)};return R(J),U(()=>{u(w()==="darkTheme"?L:null)}),(M,c)=>(B(),z(D,null,[a(e(y),null,{default:s(()=>[m(p(e(i).componentCall),1)]),_:1}),a(e(n),{"style-vars":r.value},{default:s(()=>[a(e($),{modelValue:e(o).score,"onUpdate:modelValue":c[0]||(c[0]=f=>e(o).score=f)},null,8,["modelValue"]),a(e(j),{modelValue:e(o).license,"onUpdate:modelValue":c[1]||(c[1]=f=>e(o).license=f)},null,8,["modelValue"]),a(e(h),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:S},{default:s(()=>[m(p(e(i).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(e(y),null,{default:s(()=>[m(p(e(i).functionCall),1)]),_:1}),a(e(h),{type:"primary",block:"",onClick:V},{default:s(()=>[m(p(e(i).toggleRootTheme),1)]),_:1})],64))}};export{de as default};
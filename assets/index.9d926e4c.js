import{D as m}from"./index.1ee069bc.js";import{B as i}from"./index.165a818c.js";import{I as S}from"./index.6d2543c3.js";import{S as r}from"./index.07e54d8f.js";import{C as g}from"./index.203bd217.js";import{_ as x,r as N,aH as T,ac as z,ay as I,f as $,h as M,q as a,S as t,ap as e,aI as y,F as P,P as l,Q as n,az as w}from"./vue-router.esm-bundler.34317ebb.js";import{d as H}from"./index.e436054e.js";import{u as V,a as h,_ as L,b as R,c as q}from"./index.0907a6d7.js";import"./index.786a7817.js";import"./components.3467a955.js";import"./lock.52f500fb.js";import"./index.791cbee6.js";import"./zIndex.3abb4089.js";/* empty css               */import"./shared.f164cbda.js";import"./elements.6cdeda8d.js";import"./index.f25368c3.js";import"./index.3cb5b454.js";const Q={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"},{add:_,use:j,pack:s,packs:fe,merge:de}=V(),G=d=>{q(d),j(d)};h("zh-CN",L);h("en-US",R);_("zh-CN",Q);_("en-US",W);const J={setup(d){const C=m.Component,E=N({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=T(E),B={confirm:()=>r.success("confirm"),cancel:()=>r.error("cancel"),close:()=>r.info("close")},b=()=>m({message:s.value.message}),U=async()=>B[await m(s.value.message)](),D=()=>{m({title:s.value.title,message:s.value.message})},F=()=>{m({message:s.value.message,confirmButton:!1,cancelButton:!1})},v=(k,o)=>{r.loading(s.value.asyncCloseProgress),setTimeout(()=>{B[k](),o()},1e3)},A=()=>{m({message:s.value.message,onBeforeClose:v})};return z(G),I(H),(k,o)=>($(),M(P,null,[a(e(w),null,{default:t(()=>[l(n(e(s).functionCall),1)]),_:1}),a(e(i),{type:"primary",block:"",onClick:b},{default:t(()=>[l(n(e(s).basicUsage),1)]),_:1}),a(e(i),{type:"primary",block:"",onClick:D},{default:t(()=>[l(n(e(s).modifyTitle),1)]),_:1}),a(e(i),{type:"primary",block:"",onClick:F},{default:t(()=>[l(n(e(s).hideButton),1)]),_:1}),a(e(i),{type:"primary",block:"",onClick:U},{default:t(()=>[l(n(e(s).handleUserBehavior),1)]),_:1}),a(e(i),{type:"primary",block:"",onClick:A},{default:t(()=>[l(n(e(s).asyncClose),1)]),_:1}),a(e(w),null,{default:t(()=>[l(n(e(s).componentCall),1)]),_:1}),a(e(i),{type:"warning",block:"",onClick:o[0]||(o[0]=u=>c.value=!0)},{default:t(()=>[l(n(e(s).basicUsage),1)]),_:1}),a(e(C),{show:e(c),"onUpdate:show":o[1]||(o[1]=u=>y(c)?c.value=u:null),title:e(s).title,message:e(s).message,onConfirm:o[2]||(o[2]=()=>e(r).success("confirm")),onCancel:o[3]||(o[3]=()=>e(r).error("cancel")),onClosed:o[4]||(o[4]=()=>e(r).info("closed"))},null,8,["show","title","message"]),a(e(i),{type:"warning",block:"",onClick:o[5]||(o[5]=u=>p.value=!0)},{default:t(()=>[l(n(e(s).asyncClose),1)]),_:1}),a(e(C),{show:e(p),"onUpdate:show":o[6]||(o[6]=u=>y(p)?p.value=u:null),title:e(s).title,message:e(s).message,onBeforeClose:v},null,8,["show","title","message"]),a(e(i),{type:"warning",block:"",onClick:o[7]||(o[7]=u=>f.value=!0)},{default:t(()=>[l(n(e(s).customSlots),1)]),_:1}),a(e(C),{show:e(f),"onUpdate:show":o[8]||(o[8]=u=>y(f)?f.value=u:null)},{title:t(()=>[a(e(S),{name:"information",color:"#2979ff"})]),default:t(()=>[a(e(g),null,{default:t(()=>[l(n(e(s).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(s).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(s).message),1)]),_:1})]),_:1},8,["show"])],64))}},Ce=x(J,[["__scopeId","data-v-03e9bdfa"]]);export{Ce as default};
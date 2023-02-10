import{u as j,a as q,d as Q,c as T,b as W,e as G,f as H}from"./components-25275440.js";import{d as z,b as S,_ as U,f as v,h as y,O as V,N as d,R as N,a as k,w as J,p as X,M as g,i as b,Q as s,j as Z,ac as x,az as ee,q as a,S as i,ap as t,F as te,P as o,aA as P}from"./vue-router.esm-bundler-10f05234.js";import{I as ne}from"./index-a551829b.js";import{B as ae}from"./index-bc976077.js";import{d as ie}from"./index-7f7c9244.js";import{u as se,c as oe,a as A,_ as re,b as ce}from"./index-743dd119.js";import"./elements-87b8c072.js";import"./shared-5ff0af51.js";import"./index-694a1082.js";import"./index-099a024e.js";/* empty css               */import"./index-f4fd07ca.js";const B=Symbol("STEPS_BIND_STEP_KEY"),w=Symbol("STEPS_COUNT_STEP_KEY");function le(){const{bindChildren:e,childProviders:n}=j(B),{length:l}=q(w);return{length:l,step:n,bindStep:e}}function ue(e){return["horizontal","vertical"].includes(e)}const de={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:ue},activeColor:{type:String},inactiveColor:{type:String},onClickStep:Q()},{n:pe}=T("steps"),ve=z({name:"VarSteps",props:de,setup(e){const n=S(()=>e.active),l=S(()=>e.activeColor),u=S(()=>e.inactiveColor),f=S(()=>e.direction),{length:C,bindStep:p}=le();return p({active:n,length:C,direction:f,activeColor:l,inactiveColor:u,clickStep:$=>{W(e.onClickStep,$)}}),{n:pe}}});function fe(e,n,l,u,f,C){return v(),y("div",{class:d(e.n()),style:N({flexDirection:e.direction==="horizontal"?"row":"column"})},[V(e.$slots,"default")],6)}const h=U(ve,[["render",fe]]);h.install=function(e){e.component(h.name,h)};const me={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function Se(){const{parentProvider:e,bindParent:n}=G(B),{index:l}=H(w);if(!e||!n||!l)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:l,steps:e,bindSteps:n}}const{n:he,classes:Ce}=T("step"),ye=z({name:"VarStep",components:{VarIcon:ne},props:me,setup(){const e=k(null),n=k(""),l=k(!1),{index:u,steps:f,bindSteps:C}=Se(),{active:p,length:m,activeColor:E,inactiveColor:$,direction:I,clickStep:L}=f,M=S(()=>p.value===u.value),K=S(()=>u.value!==-1&&p.value>u.value),Y={index:u},O=()=>L(u.value),R=_=>{I.value==="horizontal"&&(e.value=_)};return C(Y),J(m,_=>{if(l.value=_-1===u.value,e.value){const F=e.value.offsetWidth/2-14;n.value=`0 -${F}px`}}),{n:he,classes:Ce,main:e,index:u,isActive:K,isCurrent:M,direction:I,lineMargin:n,activeColor:E,inactiveColor:$,isLastChild:l,click:O,getRef:R}}});const ge={key:3};function ke(e,n,l,u,f,C){const p=X("var-icon");return v(),y("div",{class:d(e.n())},[g("div",{class:d(e.n(e.direction))},[g("div",{class:d(e.n(`${e.direction}-main`)),ref:e.getRef},[g("div",{class:d(e.classes(e.n(`${e.direction}-tag`),[e.isActive||e.isCurrent,e.n(`${e.direction}-tag--active`)])),style:N({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:n[0]||(n[0]=(...m)=>e.click&&e.click(...m))},[e.isActive?(v(),b(p,{key:0,class:d(e.n("icon")),"var-step-cover":"",name:e.activeIcon},null,8,["class","name"])):e.isCurrent&&e.currentIcon?(v(),b(p,{key:1,class:d(e.n("icon")),"var-step-cover":"",name:e.currentIcon},null,8,["class","name"])):e.inactiveIcon?(v(),b(p,{key:2,class:d(e.n("icon")),"var-step-cover":"",name:e.inactiveIcon},null,8,["class","name"])):(v(),y("span",ge,s(e.index+1),1))],6),g("div",{class:d(e.classes(e.n(`${e.direction}-content`),[e.isActive||e.isCurrent,e.n(`${e.direction}-content--active`)])),onClick:n[1]||(n[1]=(...m)=>e.click&&e.click(...m))},[V(e.$slots,"default")],2)],2),e.isLastChild?Z("",!0):(v(),y("div",{key:0,class:d(e.n(`${e.direction}-line`)),style:N({margin:e.lineMargin})},null,6))],2)],2)}const c=U(ye,[["render",ke]]);c.install=function(e){e.component(c.name,c)};const $e={basicUsage:"基本使用",customStyle:"自定义样式",dynamicSteps:"动态步骤",vertical:"垂直模式",next:"下一步",first:"步骤1",second:"步骤2",third:"步骤3",fourth:"步骤4",fifth:"步骤5",placeholder:"改变step的数量",step:"步骤",text:"接下来..."},_e={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."},{add:D,use:be,pack:r,packs:Me,merge:Ke}=se(),Pe=e=>{oe(e),be(e)};A("zh-CN",re);A("en-US",ce);D("zh-CN",$e);D("en-US",_e);const Ye={setup(e){const n=k(0);function l(){n.value=(n.value+1)%4}return x(Pe),ee(ie),(u,f)=>(v(),y(te,null,[a(t(P),null,{default:i(()=>[o(s(t(r).basicUsage),1)]),_:1}),a(t(h),{active:n.value},{default:i(()=>[a(t(c),null,{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(P),null,{default:i(()=>[o(s(t(r).customStyle),1)]),_:1}),a(t(h),{active:n.value,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(P),null,{default:i(()=>[o(s(t(r).vertical),1)]),_:1}),a(t(h),{direction:"vertical",active:n.value},{default:i(()=>[a(t(c),null,{default:i(()=>[o(s(t(r).first),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).second),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).third),1)]),_:1}),a(t(c),null,{default:i(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),a(t(ae),{type:"primary",block:"",onClick:l,style:{"margin-top":"20px"}},{default:i(()=>[o(s(t(r).next),1)]),_:1})],64))}};export{Ye as default};
import{c as z}from"./components.cd8ba2fd.js";import{_ as E}from"./elevation.46d11dfe.js";import{d as N,r as g,x as w,S as P,o as u,c as m,a as k,G as h,p,n as F,h as D,m as s,t as i,i as a,V as t,j as o,F as T,k as V,w as U,l as M}from"./vendor.4fe81855.js";import{I as B}from"./index.bd1a1c4d.js";import{R as x}from"./index.46338cdd.js";import{A as c}from"./AppType.14280320.js";import{S as L}from"./index.8225ebce.js";import{M as G}from"./index.70c86035.js";import{B as y}from"./index.995aacb5.js";import{C as I}from"./index.28589dac.js";import{d as j}from"./index.079ade67.js";import{u as O,a as R,_ as Y,b as q,c as H}from"./en-US.307522bf.js";import{w as J,a as K}from"./utils.dea25200.js";import"./elements.579153f5.js";import"./index.afd38bc1.js";/* empty css               */import"./index.f32c995c.js";import"./zIndex.6b63131d.js";import"./lock.8e688292.js";function Q(e){return["left","center","right"].includes(e)}const W={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:Q},elevation:{type:Boolean,default:!0}};const{n:X,classes:Z}=z("app-bar"),tt=N({name:"VarAppBar",props:W,setup(e,{slots:n}){const d=g(),f=g(),v=()=>{d.value=n.left?0:void 0,f.value=n.right?0:void 0};return w(v),P(v),{n:X,classes:Z,paddingLeft:d,paddingRight:f}}});function et(e,n,d,f,v,_){return u(),m("div",{class:p(e.classes(e.n(),[e.elevation,"var-elevation--3"])),style:F({background:e.color,color:e.textColor})},[k("div",{class:p(e.n("left"))},[h(e.$slots,"left"),e.titlePosition==="left"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingLeft:e.paddingLeft})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):D("v-if",!0)],2),e.titlePosition==="center"?(u(),m("div",{key:0,class:p(e.n("title"))},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],2)):D("v-if",!0),k("div",{class:p(e.n("right"))},[e.titlePosition==="right"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingRight:e.paddingRight})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):D("v-if",!0),h(e.$slots,"right")],2)],6)}var r=E(tt,[["render",et]]);r.install=function(e){e.component(r.name,r)};var at={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},ot={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:b,use:lt,pack:l,packs:Ct,merge:Tt}=O(),st=e=>{H(e),lt(e)};R("zh-CN",Y);R("en-US",q);b("zh-CN",at);b("en-US",ot);const it=k("div",{class:"var-app-var--example-space"},null,-1),Lt={setup(e){const n=g(!1),d=g([]),f=g("#fff"),v=()=>{L({content:l.value.search,position:"top"})},_=()=>{L({content:l.value.goBack,position:"top"})},$=()=>{d.value=[{label:l.value.options1,value:"menu1"},{label:l.value.options2,value:"menu2"}],n.value=!0};return J(S=>{st(S),n.value=!1}),K(j,S=>{f.value=S==="darkThemes"?"#272727":"#fff"}),(S,C)=>(u(),m(T,null,[a(t(c),null,{default:o(()=>[s(i(t(l).basicAppBar),1)]),_:1}),a(t(r),{title:t(l).title},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).customStyle),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center",color:"#00c48f"},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addSlotsAtTitle),1)]),_:1}),a(t(r),null,{default:o(()=>[s(i(t(l).addTheTitleFromTheSlot),1)]),_:1}),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftSlot),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center"},{left:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:_},{default:o(()=>[a(t(B),{name:"chevron-left",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{right:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:v},{default:o(()=>[a(t(B),{name:"magnify",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftAndRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{left:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:_},{default:o(()=>[a(t(B),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(G),{"offset-y":42,"offset-x":-20,show:n.value,"onUpdate:show":C[0]||(C[0]=A=>n.value=A)},{menu:o(()=>[k("div",{class:"var-app-var--example-menu-list",style:F({background:f.value})},[(u(!0),m(T,null,V(d.value,A=>U((u(),M(t(I),{class:"var-app-var--example-menu-cell",key:A.value},{default:o(()=>[s(i(A.label),1)]),_:2},1024)),[[t(x)]])),128))],4)]),default:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:$},{default:o(()=>[a(t(B),{name:"menu",size:24})]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),it],64))}};export{Lt as default};
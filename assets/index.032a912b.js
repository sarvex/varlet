import{d as c,c as j}from"./components.cb3a2979.js";import{u as q}from"./index.598939f5.js";import{d as G,_ as z,f as T,h as F,O as M,i as $,q as t,S as l,D as Q,E as R,M as E,R as X,N as A,ah as Y,G as J,T as K,P as n,Q as s,a as h,ac as Z,ay as x,p as ee,al as e,F as D,az as m,ai as te,am as oe,an as le}from"./vue-router.esm-bundler.90c360e5.js";import{S as B}from"./index.d39d88a5.js";import{B as d}from"./index.eddcc321.js";import{S as k}from"./index.a7f8a643.js";import{O as S}from"./index.4eaffafe.js";import"./index.796f04c7.js";import{S as v}from"./index.a4a57078.js";import{d as ae}from"./index.e436054e.js";import{u as ne,a as U,_ as se,b as re,c as ue}from"./index.783642df.js";import"./elements.7e32e8ec.js";import"./shared.f2b339f0.js";import"./zIndex.e602f32c.js";import"./index.da17c024.js";/* empty css               */import"./index.c30a1d96.js";import"./index.12a18967.js";import"./index.e167a74a.js";import"./index.451018be.js";import"./provide.62a3bb35.js";import"./index.c42f3d15.js";import"./lock.b45b71b7.js";function ie(o){return["click","hover"].includes(o)}function pe(o){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(o)}function de(o){return["default","primary","info","success","warning","danger"].includes(o)}const fe={type:{type:String,default:"default",validator:de},color:{type:String},content:{type:String,default:"Tooltip"},show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"hover",validator:ie},placement:{type:String,default:"bottom",validator:pe},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},defaultStyle:{type:Boolean,default:!0},onOpen:c(),onOpened:c(),onClose:c(),onClosed:c(),"onUpdate:show":c()},{n:me,classes:ge}=j("tooltip"),ye=G({name:"VarTooltip",props:fe,setup(o){const{content:u,type:g,color:y,popover:b,host:C,hostSize:p,show:r,zIndex:w,handleHostClick:f,handleHostMouseenter:_,handleHostMouseleave:N,handlePopoverMouseenter:O,handlePopoverMouseleave:P,handlePopoverClose:I,open:H,close:L,resize:W}=q(o);return{content:u,type:g,color:y,popover:b,host:C,hostSize:p,show:r,zIndex:w,n:me,classes:ge,handleHostClick:f,handlePopoverClose:I,handleHostMouseenter:_,handleHostMouseleave:N,handlePopoverMouseenter:O,handlePopoverMouseleave:P,resize:W,open:H,close:L}}});function ce(o,u,g,y,b,C){return T(),F("div",{ref:"host",class:A(o.n()),onClick:u[3]||(u[3]=(...p)=>o.handleHostClick&&o.handleHostClick(...p)),onMouseenter:u[4]||(u[4]=(...p)=>o.handleHostMouseenter&&o.handleHostMouseenter(...p)),onMouseleave:u[5]||(u[5]=(...p)=>o.handleHostMouseleave&&o.handleHostMouseleave(...p))},[M(o.$slots,"default"),(T(),$(K,{to:o.teleport},[t(J,{name:o.n(),onAfterEnter:o.onOpened,onAfterLeave:o.onClosed},{default:l(()=>[Q(E("div",{ref:"popover",style:X({zIndex:o.zIndex,background:o.color}),class:A(o.classes(o.n("tooltip"),[o.defaultStyle,`${o.n("--tooltip-background-color")}`],`${o.n(`--${o.type}`)}`,`${o.n(`--margin-${o.placement}`)}`)),onClick:u[0]||(u[0]=Y(()=>{},["stop"])),onMouseenter:u[1]||(u[1]=(...p)=>o.handlePopoverMouseenter&&o.handlePopoverMouseenter(...p)),onMouseleave:u[2]||(u[2]=(...p)=>o.handlePopoverMouseleave&&o.handlePopoverMouseleave(...p))},[M(o.$slots,"tooltip",{},()=>[n(s(o.content),1)])],38),[[R,o.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const i=z(ye,[["render",ce]]);i.install=function(o){o.component(i.name,i)};const ve={basicUsage:"\u57FA\u672C\u4F7F\u7528",alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",tooltip:"tooltip",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",events:"\u6CE8\u518C\u4E8B\u4EF6",disabled:"\u7981\u7528\u63D0\u793A",placement:"\u5F39\u51FA\u4F4D\u7F6E",trigger:"\u89E6\u53D1\u65B9\u5F0F",twoWayBinding:"\u53CC\u5411\u7ED1\u5B9A",themeColorTooltip:"\u4E3B\u9898\u8272\u6587\u5B57\u63D0\u793A",defaultTooltip:"\u9ED8\u8BA4",primaryTooltip:"\u4E3B\u8981",infoTooltip:"\u4FE1\u606F",successTooltip:"\u6210\u529F",warningTooltip:"\u8B66\u544A",dangerTooltip:"\u5371\u9669",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",slotTooltip:"\u5185\u5BB9\u63D2\u69FD",countDown:"\u79D2\u540E\u5173\u95ED"},Te={basicUsage:"Basic Usage",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",tooltip:"Tooltip",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way binding",themeColorTooltip:"Theme Color Tooltip",defaultTooltip:"Default",primaryTooltip:"Primary",infoTooltip:"Info",successTooltip:"Success",warningTooltip:"Warning",dangerTooltip:"Danger",customColor:"Custom Color",slotTooltip:"Slot Tooltip",countDown:"s closed"},{add:V,use:be,pack:a,packs:Xe,merge:Ye}=ne(),Ce=o=>{ue(o),be(o)};U("zh-CN",se);U("en-US",re);V("zh-CN",ve);V("en-US",Te);const we=o=>(oe("data-v-48c7f795"),o=o(),le(),o),he={class:"placement-container"},_e=we(()=>E("div",{style:{"margin-bottom":"100px"}},null,-1)),Be={setup(o){const u=h(!1),g=h("click"),y=h("top"),b=h(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]),C=()=>{let p=4;const r=setInterval(()=>{p-=1,v.info(`${p}${a.value.countDown}`)},1e3);setTimeout(()=>{clearInterval(r),u.value=!1},4e3)};return Z(Ce),x(ae),(p,r)=>{const w=ee("var-icon");return T(),F(D,null,[t(e(m),null,{default:l(()=>[n(s(e(a).basicUsage),1)]),_:1}),t(e(B),{size:["2.666vw","2.666vw"]},{default:l(()=>[t(e(i),{content:e(a).basicUsage},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).basicUsage),1)]),_:1})]),_:1},8,["content"]),t(e(i),null,{tooltip:l(()=>[t(w,{name:"star"})]),default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).slotTooltip),1)]),_:1})]),_:1})]),_:1},8,["size"]),t(e(m),null,{default:l(()=>[n(s(e(a).placement),1)]),_:1}),t(e(k),{hint:!1,modelValue:y.value,"onUpdate:modelValue":r[0]||(r[0]=f=>y.value=f)},{default:l(()=>[(T(!0),F(D,null,te(b.value,(f,_)=>(T(),$(e(S),{key:_,label:f},null,8,["label"]))),128))]),_:1},8,["modelValue"]),E("div",he,[t(e(i),{placement:y.value},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[t(w,{name:"star"})]),_:1})]),_:1},8,["placement"])]),t(e(m),null,{default:l(()=>[n(s(e(a).themeColorTooltip),1)]),_:1}),t(e(B),{size:["2.666vw","2.666vw"]},{default:l(()=>[t(e(i),{type:"default"},{default:l(()=>[t(e(d),{type:"default"},{default:l(()=>[n(s(e(a).defaultTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"primary"},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).primaryTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"info"},{default:l(()=>[t(e(d),{type:"info"},{default:l(()=>[n(s(e(a).infoTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"success"},{default:l(()=>[t(e(d),{type:"success"},{default:l(()=>[n(s(e(a).successTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"warning"},{default:l(()=>[t(e(d),{type:"warning"},{default:l(()=>[n(s(e(a).warningTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"danger"},{default:l(()=>[t(e(d),{type:"danger"},{default:l(()=>[n(s(e(a).dangerTooltip),1)]),_:1})]),_:1})]),_:1},8,["size"]),t(e(m),null,{default:l(()=>[n(s(e(a).customColor),1)]),_:1}),t(e(i),{color:"#69dbaa"},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).customColor),1)]),_:1})]),_:1}),t(e(m),null,{default:l(()=>[n(s(e(a).offset),1)]),_:1}),t(e(i),{"offset-x":"36px","offset-y":"18px"},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).offset),1)]),_:1})]),_:1}),t(e(m),null,{default:l(()=>[n(s(e(a).trigger),1)]),_:1}),t(e(k),{hint:!1,modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=f=>g.value=f)},{default:l(()=>[t(e(S),{label:"click"}),t(e(S),{label:"hover"})]),_:1},8,["modelValue"]),t(e(i),{style:{"margin-top":"15px"},trigger:g.value},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).trigger),1)]),_:1})]),_:1},8,["trigger"]),t(e(m),null,{default:l(()=>[n(s(e(a).events),1)]),_:1}),t(e(i),{onOpen:r[2]||(r[2]=()=>e(v).info("open")),onOpened:r[3]||(r[3]=()=>e(v).success("opened")),onClose:r[4]||(r[4]=()=>e(v).warning("close")),onClosed:r[5]||(r[5]=()=>e(v).error("closed"))},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).events),1)]),_:1})]),_:1}),t(e(m),null,{default:l(()=>[n(s(e(a).disabled),1)]),_:1}),t(e(B),{justify:"space-between"},{default:l(()=>[t(e(i),{disabled:""},{default:l(()=>[t(e(d),{type:"primary",disabled:""},{default:l(()=>[n(s(e(a).disabled),1)]),_:1})]),_:1})]),_:1}),t(e(m),null,{default:l(()=>[n(s(e(a).twoWayBinding),1)]),_:1}),t(e(i),{show:u.value,"onUpdate:show":r[6]||(r[6]=f=>u.value=f),onOpened:r[7]||(r[7]=()=>C())},{default:l(()=>[t(e(d),{type:"primary"},{default:l(()=>[n(s(e(a).twoWayBinding),1)]),_:1})]),_:1},8,["show"]),_e],64)}}},Je=z(Be,[["__scopeId","data-v-48c7f795"]]);export{Je as default};

import{B as l}from"./index.23f61fe1.js";import{I as r}from"./index.eb07b9e6.js";import{S as i}from"./index.340a9c0b.js";import{S as B}from"./index.a434ccec.js";import{d as y}from"./index.8b4f1b33.js";import{u as C,a as f,_ as S,b as E,c as A}from"./index.fee16a60.js";import{ae as w,aA as k,f as h,h as z,q as u,S as e,an as t,F as b,P as o,Q as n,aB as s}from"./vue-router.esm-bundler.124ec336.js";import"./index.c4f66416.js";import"./index.3f886048.js";/* empty css               */import"./elements.35d8dfd2.js";import"./shared.a5d25d0b.js";import"./components.0836e209.js";import"./index.fa925ab8.js";import"./zIndex.ff304851.js";import"./lock.dd7bcdcb.js";const x={themeColorButton:"\u4E3B\u9898\u8272\u6309\u94AE",defaultButton:"\u9ED8\u8BA4\u6309\u94AE",primaryButton:"\u4E3B\u8981\u6309\u94AE",infoButton:"\u4FE1\u606F\u6309\u94AE",successButton:"\u6210\u529F\u6309\u94AE",warningButton:"\u8B66\u544A\u6309\u94AE",dangerButton:"\u5371\u9669\u6309\u94AE",textButton:"\u6587\u5B57\u6309\u94AE",plainTextButton:"\u7EAF\u6587\u5B57\u6309\u94AE",outlineButton:"\u5916\u8FB9\u6846\u6309\u94AE",disabledStatus:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",buttonSize:"\u6309\u94AE\u5C3A\u5BF8",normalButton:"\u5E38\u89C4\u6309\u94AE",smallButton:"\u5C0F\u578B\u6309\u94AE",miniButton:"\u8FF7\u4F60\u6309\u94AE",largeButton:"\u5927\u578B\u6309\u94AE",blockButton:"\u5757\u7EA7\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",backgroundTextColor:"\u80CC\u666F/\u6587\u5B57",linearGradientColor:"\u4F7F\u7528\u6E10\u53D8",roundButton:"\u5706\u5F62\u6309\u94AE",event:"\u6CE8\u518C\u4E8B\u4EF6",click:"\u70B9\u51FB",touchstart:"\u89E6\u6478",autoLoading:"\u81EA\u52A8\u52A0\u8F7D",clickSuccess:"\u70B9\u51FB\u6210\u529F",touchstartSuccess:"\u89E6\u6478\u6210\u529F"},v={themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"},{add:p,use:F,pack:a,packs:J,merge:K}=C(),T=d=>{A(d),F(d)};f("zh-CN",S);f("en-US",E);p("zh-CN",x);p("en-US",v);const X={setup(d){const m=()=>{B.success(a.value.clickSuccess)},_=()=>{B.success(a.value.touchstartSuccess)},g=()=>new Promise(c=>{setTimeout(c,2e3)});return w(T),k(y),(c,L)=>(h(),z(b,null,[u(t(s),null,{default:e(()=>[o(n(t(a).themeColorButton),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),null,{default:e(()=>[o(n(t(a).defaultButton),1)]),_:1}),u(t(l),{type:"primary"},{default:e(()=>[o(n(t(a).primaryButton),1)]),_:1}),u(t(l),{type:"info"},{default:e(()=>[o(n(t(a).infoButton),1)]),_:1}),u(t(l),{type:"success"},{default:e(()=>[o(n(t(a).successButton),1)]),_:1}),u(t(l),{type:"warning"},{default:e(()=>[o(n(t(a).warningButton),1)]),_:1}),u(t(l),{type:"danger"},{default:e(()=>[o(n(t(a).dangerButton),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).textButton),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{text:"",outline:"",type:"primary"},{default:e(()=>[o(n(t(a).outlineButton),1)]),_:1}),u(t(l),{text:"",type:"primary"},{default:e(()=>[o(n(t(a).plainTextButton),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).disabledStatus),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{disabled:""},{default:e(()=>[o(n(t(a).disabledStatus),1)]),_:1}),u(t(l),{disabled:"",text:"",outline:""},{default:e(()=>[o(n(t(a).disabledStatus),1)]),_:1}),u(t(l),{disabled:"",text:""},{default:e(()=>[o(n(t(a).disabledStatus),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{loading:"",type:"primary"},{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"info","loading-type":"rect"},{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"success","loading-type":"disappear"},{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"danger","loading-type":"cube"},{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"warning","loading-type":"wave"},{default:e(()=>[o(n(t(a).loadingStatus),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).buttonSize),1)]),_:1}),u(t(i),{align:"center",size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{type:"primary"},{default:e(()=>[o(n(t(a).normalButton),1)]),_:1}),u(t(l),{type:"success",size:"small"},{default:e(()=>[o(n(t(a).smallButton),1)]),_:1}),u(t(l),{type:"warning",size:"mini"},{default:e(()=>[o(n(t(a).miniButton),1)]),_:1}),u(t(l),{type:"danger",size:"large"},{default:e(()=>[o(n(t(a).largeButton),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).blockButton),1)]),_:1}),u(t(l),{block:"",type:"primary"},{default:e(()=>[o(n(t(a).blockButton),1)]),_:1}),u(t(s),null,{default:e(()=>[o(n(t(a).customColor),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{color:"#69dbaa","text-color":"#eee"},{default:e(()=>[o(n(t(a).backgroundTextColor),1)]),_:1}),u(t(l),{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:e(()=>[o(n(t(a).linearGradientColor),1)]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).roundButton),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{type:"primary",round:""},{default:e(()=>[u(t(r),{name:"plus"})]),_:1}),u(t(l),{type:"info",round:""},{default:e(()=>[u(t(r),{name:"information"})]),_:1}),u(t(l),{type:"success",round:""},{default:e(()=>[u(t(r),{name:"check"})]),_:1}),u(t(l),{type:"warning",round:""},{default:e(()=>[u(t(r),{name:"warning"})]),_:1}),u(t(l),{type:"danger",round:""},{default:e(()=>[u(t(r),{name:"window-close"})]),_:1})]),_:1},8,["size"]),u(t(s),null,{default:e(()=>[o(n(t(a).event),1)]),_:1}),u(t(i),{size:["2.666vw","2.666vw"]},{default:e(()=>[u(t(l),{type:"success",onClick:m},{default:e(()=>[o(n(t(a).click),1)]),_:1}),u(t(l),{type:"success",onTouchstart:_},{default:e(()=>[o(n(t(a).touchstart),1)]),_:1}),u(t(l),{type:"success",onClick:g,"auto-loading":""},{default:e(()=>[o(n(t(a).autoLoading),1)]),_:1})]),_:1},8,["size"])],64))}};export{X as default};

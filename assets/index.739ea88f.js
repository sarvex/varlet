import{C as d}from"./index.0b1320ba.js";import{A as s}from"./AppType.c962f2d0.js";import{d as f}from"./index.5d153c96.js";import{a as B,b as F}from"./utils.2c004e86.js";import{u as C,a as v,_ as x,b as U,c as _}from"./en-US.59611290.js";import{_ as y,r as z,f as b,h as E,t,ag as e,P as n,F as S,ai as N,aj as h,M as r,N as i,l as D}from"./elevation.1daa8134.js";import"./index.de95f8c4.js";import"./components.d92bc219.js";import"./elements.0ca09769.js";import"./provide.7f313f5e.js";import"./index.5d75563d.js";import"./index.9540b956.js";/* empty css               */var A={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},c={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:V,use:k,pack:o,packs:X,merge:Y}=C(),w=m=>{_(m),k(m)};v("zh-CN",x);v("en-US",U);V("zh-CN",A);V("en-US",c);const M=m=>(N("data-v-49f24ea4"),m=m(),h(),m),I=M(()=>D("div",{class:"space"},null,-1)),T={setup(m){const u=z({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),g=(p,a)=>{setTimeout(()=>{a(p)},500)};return B(w),F(f),(p,a)=>(b(),E(S,null,[t(e(s),null,{default:n(()=>[r(i(e(o).basicUsage),1)]),_:1}),t(e(d),{modelValue:e(u).value,"onUpdate:modelValue":a[0]||(a[0]=l=>e(u).value=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).range),1)]),_:1}),t(e(d),{min:0,max:5,modelValue:e(u).value2,"onUpdate:modelValue":a[1]||(a[1]=l=>e(u).value2=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).step),1)]),_:1}),t(e(d),{step:10,modelValue:e(u).value3,"onUpdate:modelValue":a[2]||(a[2]=l=>e(u).value3=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).toFixed),1)]),_:1}),t(e(d),{"decimal-length":1,modelValue:e(u).value4,"onUpdate:modelValue":a[3]||(a[3]=l=>e(u).value4=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).size),1)]),_:1}),t(e(d),{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e(u).value5,"onUpdate:modelValue":a[4]||(a[4]=l=>e(u).value5=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).disabled),1)]),_:1}),t(e(d),{disabled:"",modelValue:e(u).value6,"onUpdate:modelValue":a[5]||(a[5]=l=>e(u).value6=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).readonly),1)]),_:1}),t(e(d),{readonly:"",modelValue:e(u).value7,"onUpdate:modelValue":a[6]||(a[6]=l=>e(u).value7=l)},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).lazyChange),1)]),_:1}),t(e(d),{"lazy-change":"",modelValue:e(u).value8,"onUpdate:modelValue":a[7]||(a[7]=l=>e(u).value8=l),onBeforeChange:g},null,8,["modelValue"]),t(e(s),null,{default:n(()=>[r(i(e(o).validate),1)]),_:1}),t(e(d),{rules:[l=>l>5||e(o).validateMessage],modelValue:e(u).value9,"onUpdate:modelValue":a[8]||(a[8]=l=>e(u).value9=l)},null,8,["rules","modelValue"]),I],64))}};var Z=y(T,[["__scopeId","data-v-49f24ea4"]]);export{Z as default};
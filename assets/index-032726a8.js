import{S as p}from"./index-7cef2881.js";import{O as u}from"./index-6bb0e246.js";import{I as b}from"./index-310428ec.js";import{_ as N,r as T,aH as k,ac as R,az as z,f as Y,h as B,q as a,S as t,ap as l,aI as i,M as v,Q as n,F as E,P as r,aA as c,N as D,al as L,am as A}from"./vue-router.esm-bundler-aeae2b6c.js";import{d as F}from"./index-a0d4b3bb.js";import{u as O,a as w,_ as $,b as q,c as H}from"./index-12056b48.js";import"./index-4b4c05eb.js";import"./components-b6fa4b7a.js";import"./elements-3b8faeb1.js";import"./shared-bd251288.js";import"./zIndex-cb03e96a.js";import"./index-52536746.js";import"./index-f2ec5766.js";import"./provide-8304d270.js";import"./index-6858afff.js";import"./index-db95d652.js";/* empty css               */const Q={basicUsage:"基本使用",plainMode:"朴素模式",disabled:"禁用",readonly:"只读",clearable:"可清除",customIcon:"自定义图标",validate:"单选值校验",multipleValidate:"多选值校验",placeholder:"请选择一个选项",multiplePlaceholder:"请选择多个选项",clearableText:"可清除文本",relation:"文本关联值",multiple:"多选",chipMultiple:"纸片风格的多选",eat:"吃饭",sleep:"睡觉",play:"打游戏",coding:"写代码",rest:"摸鱼",currentSelect:"当前选择的是:",mustSelectRest:"您一定得选择摸鱼",mustSelectMoreThan:"您至少选择两个选项",offsetY:"垂直偏移",emberSprit:"火猫",earthSprit:"土猫",stormSpirit:"蓝猫",voidSpirit:"紫猫"},j={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",customIcon:"Custom Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options",offsetY:"offsetY",emberSprit:"Ember Sprit",earthSprit:"Earth Sprit",stormSpirit:"Storm Spirit",voidSpirit:"Void Spirit"},{add:P,use:G,pack:e,packs:hl,merge:Vl}=O(),J=m=>{H(m),G(m)};w("zh-CN",$);w("en-US",q);P("zh-CN",Q);P("en-US",j);const K=m=>(L("data-v-9fea9277"),m=m(),A(),m),W={class:"relation"},X=K(()=>v("div",{class:"space"},null,-1)),Z={setup(m){const s=T({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0}),{value:V,value2:S,value3:_,value4:U,value5:g,value6:h,value7:y,value8:M,value9:x,value10:C,value11:f}=k(s);return R(I=>{J(I),s.value=void 0,s.value2=void 0,s.value3=void 0,s.value4=void 0,s.value6=void 0,s.value5=[],s.value7=[],s.value8=void 0,s.value9=void 0,s.value10=[],s.value11=void 0}),z(F),(I,d)=>(Y(),B(E,null,[a(l(c),null,{default:t(()=>[r(n(l(e).basicUsage),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,modelValue:l(V),"onUpdate:modelValue":d[0]||(d[0]=o=>i(V)?V.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).plainMode),1)]),_:1}),a(l(p),{hint:!1,line:!1,placeholder:l(e).placeholder,modelValue:l(S),"onUpdate:modelValue":d[1]||(d[1]=o=>i(S)?S.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).relation),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,modelValue:l(h),"onUpdate:modelValue":d[2]||(d[2]=o=>i(h)?h.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat,value:1},null,8,["label"]),a(l(u),{label:l(e).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),v("div",W,n(l(e).currentSelect)+" "+n(l(h)),1),a(l(c),null,{default:t(()=>[r(n(l(e).disabled),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,disabled:"",modelValue:l(U),"onUpdate:modelValue":d[3]||(d[3]=o=>i(U)?U.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).readonly),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,readonly:"",modelValue:l(_),"onUpdate:modelValue":d[4]||(d[4]=o=>i(_)?_.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).clearable),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,clearable:"",modelValue:l(M),"onUpdate:modelValue":d[5]||(d[5]=o=>i(M)?M.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).customIcon),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,modelValue:l(f),"onUpdate:modelValue":d[6]||(d[6]=o=>i(f)?f.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},{default:t(()=>[a(l(b),{class:"selected-icon",name:"cake-variant"}),v("span",null,n(l(e).eat),1)]),_:1},8,["label"]),a(l(u),{label:l(e).sleep},{default:t(()=>[a(l(b),{class:"selected-icon",name:"weather-night"}),v("span",null,n(l(e).sleep),1)]),_:1},8,["label"])]),selected:t(()=>[a(l(b),{class:"selected-icon",name:l(f)===l(e).eat?"cake-variant":"weather-night"},null,8,["name"]),v("span",null,n(l(f)),1)]),"prepend-icon":t(()=>[a(l(b),{class:"prepend-icon",name:"plus"})]),"append-icon":t(()=>[a(l(b),{class:"append-icon",name:"minus"})]),"arrow-icon":t(({focus:o})=>[a(l(b),{name:"chevron-down",transition:300,class:D({"arrow-icon-rotate":o})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).multiple),1)]),_:1}),a(l(p),{placeholder:l(e).multiplePlaceholder,multiple:"",modelValue:l(g),"onUpdate:modelValue":d[7]||(d[7]=o=>i(g)?g.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).chipMultiple),1)]),_:1}),a(l(p),{placeholder:l(e).multiplePlaceholder,chip:"",multiple:"",modelValue:l(y),"onUpdate:modelValue":d[8]||(d[8]=o=>i(y)?y.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).validate),1)]),_:1}),a(l(p),{placeholder:l(e).placeholder,rules:[o=>o===l(e).rest||l(e).mustSelectRest],modelValue:l(x),"onUpdate:modelValue":d[9]||(d[9]=o=>i(x)?x.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),a(l(c),null,{default:t(()=>[r(n(l(e).multipleValidate),1)]),_:1}),a(l(p),{placeholder:l(e).multiplePlaceholder,multiple:"",rules:[o=>o.length>=2||l(e).mustSelectMoreThan],modelValue:l(C),"onUpdate:modelValue":d[10]||(d[10]=o=>i(C)?C.value=o:null)},{default:t(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),X],64))}},Sl=N(Z,[["__scopeId","data-v-9fea9277"]]);export{Sl as default};
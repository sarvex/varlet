import{S as s}from"./index.89f20fdd.js";import{O as u}from"./index.446e7597.js";import{I as B}from"./index.eb07b9e6.js";import{_ as x,r as I,aJ as P,ae as D,aA as N,f as T,h as w,q as a,S as o,an as l,aK as r,M as g,Q as n,F as R,P as i,aB as m,N as k,ao as z,ap as Y}from"./vue-router.esm-bundler.124ec336.js";import{d as L}from"./index.8b4f1b33.js";import{u as O,a as y,_ as $,b as q,c as J}from"./index.fee16a60.js";import"./index.3c8e08fd.js";import"./components.0836e209.js";import"./elements.35d8dfd2.js";import"./shared.a5d25d0b.js";import"./zIndex.ff304851.js";import"./index.3f886048.js";import"./index.4699f3ff.js";import"./provide.8803f6c1.js";import"./index.181b3582.js";import"./index.c4f66416.js";/* empty css               */const K={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879",offsetY:"\u5782\u76F4\u504F\u79FB",emberSprit:"\u706B\u732B",earthSprit:"\u571F\u732B",stormSpirit:"\u84DD\u732B",voidSpirit:"\u7D2B\u732B"},Q={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",customIcon:"Custom Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options",offsetY:"offsetY",emberSprit:"Ember Sprit",earthSprit:"Earth Sprit",stormSpirit:"Storm Spirit",voidSpirit:"Void Spirit"},{add:M,use:j,pack:e,packs:hl,merge:Vl}=O(),G=c=>{J(c),j(c)};y("zh-CN",$);y("en-US",q);M("zh-CN",K);M("en-US",Q);const H=c=>(z("data-v-a9d6b13b"),c=c(),Y(),c),W={class:"relation"},X=H(()=>g("div",{class:"space"},null,-1)),Z={setup(c){const p=I({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0}),{value:v,value2:f,value3:h,value4:V,value5:S,value6:b,value7:E,value8:_,value9:C,value10:F,value11:A}=P(p);return D(U=>{G(U),p.value=void 0,p.value2=void 0,p.value3=void 0,p.value4=void 0,p.value6=void 0,p.value5=[],p.value7=[],p.value8=void 0,p.value9=void 0,p.value10=[],p.value11=void 0}),N(L),(U,d)=>(T(),w(R,null,[a(l(m),null,{default:o(()=>[i(n(l(e).basicUsage),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,modelValue:l(v),"onUpdate:modelValue":d[0]||(d[0]=t=>r(v)?v.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).plainMode),1)]),_:1}),a(l(s),{hint:!1,line:!1,placeholder:l(e).placeholder,modelValue:l(f),"onUpdate:modelValue":d[1]||(d[1]=t=>r(f)?f.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).relation),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,modelValue:l(b),"onUpdate:modelValue":d[2]||(d[2]=t=>r(b)?b.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat,value:1},null,8,["label"]),a(l(u),{label:l(e).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),g("div",W,n(l(e).currentSelect)+" "+n(l(b)),1),a(l(m),null,{default:o(()=>[i(n(l(e).disabled),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,disabled:"",modelValue:l(V),"onUpdate:modelValue":d[3]||(d[3]=t=>r(V)?V.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).readonly),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,readonly:"",modelValue:l(h),"onUpdate:modelValue":d[4]||(d[4]=t=>r(h)?h.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).clearable),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,clearable:"",modelValue:l(_),"onUpdate:modelValue":d[5]||(d[5]=t=>r(_)?_.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).customIcon),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,modelValue:l(A),"onUpdate:modelValue":d[6]||(d[6]=t=>r(A)?A.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"])]),"prepend-icon":o(()=>[a(l(B),{class:"prepend-icon",name:"plus"})]),"append-icon":o(()=>[a(l(B),{class:"append-icon",name:"minus"})]),"arrow-icon":o(({focus:t})=>[a(l(B),{name:"chevron-down",transition:300,class:k({"arrow-icon-rotate":t})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).multiple),1)]),_:1}),a(l(s),{placeholder:l(e).multiplePlaceholder,multiple:"",modelValue:l(S),"onUpdate:modelValue":d[7]||(d[7]=t=>r(S)?S.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).chipMultiple),1)]),_:1}),a(l(s),{placeholder:l(e).multiplePlaceholder,chip:"",multiple:"",modelValue:l(E),"onUpdate:modelValue":d[8]||(d[8]=t=>r(E)?E.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).validate),1)]),_:1}),a(l(s),{placeholder:l(e).placeholder,rules:[t=>t===l(e).rest||l(e).mustSelectRest],modelValue:l(C),"onUpdate:modelValue":d[9]||(d[9]=t=>r(C)?C.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),a(l(m),null,{default:o(()=>[i(n(l(e).multipleValidate),1)]),_:1}),a(l(s),{placeholder:l(e).multiplePlaceholder,multiple:"",rules:[t=>t.length>=2||l(e).mustSelectMoreThan],modelValue:l(F),"onUpdate:modelValue":d[10]||(d[10]=t=>r(F)?F.value=t:null)},{default:o(()=>[a(l(u),{label:l(e).eat},null,8,["label"]),a(l(u),{label:l(e).sleep},null,8,["label"]),a(l(u),{label:l(e).play},null,8,["label"]),a(l(u),{label:l(e).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),X],64))}},Sl=x(Z,[["__scopeId","data-v-a9d6b13b"]]);export{Sl as default};

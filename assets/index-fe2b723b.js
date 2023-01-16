import{r as S,ac as U,az as f,f as g,h as y,q as o,S as t,ap as l,F as z,P as n,Q as s,aA as m,M as w}from"./vue-router.esm-bundler-596ad174.js";import{S as d}from"./index-7c36cea3.js";import{d as x}from"./index-a0d4b3bb.js";import{u as C,c as k,a as V,_ as B,b as N}from"./index-552b1ae6.js";import"./components-bbfed807.js";import"./provide-7df0657e.js";import"./elements-b756947f.js";import"./shared-c2373229.js";const L={basicUsage:"基本使用",stepSize:"指定步长",dualThumb:"双滑块",range:"选择范围",disable:"禁用",readonly:"只读",sliderSize:"不同大小",customStyle:"自定义样式",showLabel:"显示标签",customBtn:"自定义按钮",validateValue:"值的校验"},_={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",range:"Range",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value"},{add:p,use:T,pack:r,packs:j,merge:G}=C(),D=i=>{k(i),T(i)};V("zh-CN",B);V("en-US",N);p("zh-CN",L);p("en-US",_);const A={class:"slider-example__block"},H={setup(i){const a=S({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64],value11:0}),b=v=>{console.log(v)};return U(D),f(x),(v,u)=>(g(),y(z,null,[o(l(m),null,{default:t(()=>[n(s(l(r).basicUsage),1)]),_:1}),o(l(d),{modelValue:l(a).value,"onUpdate:modelValue":u[0]||(u[0]=e=>l(a).value=e)},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).stepSize),1)]),_:1}),o(l(d),{modelValue:l(a).value2,"onUpdate:modelValue":u[1]||(u[1]=e=>l(a).value2=e),step:"10"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).dualThumb),1)]),_:1}),o(l(d),{modelValue:l(a).value1,"onUpdate:modelValue":u[2]||(u[2]=e=>l(a).value1=e),range:"",onChange:b,"label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).range),1)]),_:1}),o(l(d),{modelValue:l(a).value11,"onUpdate:modelValue":u[3]||(u[3]=e=>l(a).value11=e),max:"210",min:"-50","label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).disable),1)]),_:1}),o(l(d),{modelValue:l(a).value3,"onUpdate:modelValue":u[4]||(u[4]=e=>l(a).value3=e),disabled:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).readonly),1)]),_:1}),o(l(d),{modelValue:l(a).value3,"onUpdate:modelValue":u[5]||(u[5]=e=>l(a).value3=e),readonly:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).sliderSize),1)]),_:1}),o(l(d),{modelValue:l(a).value10,"onUpdate:modelValue":u[6]||(u[6]=e=>l(a).value10=e),"track-height":"1.5vw",range:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).customStyle),1)]),_:1}),o(l(d),{modelValue:l(a).value4,"onUpdate:modelValue":u[7]||(u[7]=e=>l(a).value4=e),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).customBtn),1)]),_:1}),o(l(d),{modelValue:l(a).value9,"onUpdate:modelValue":u[8]||(u[8]=e=>l(a).value9=e),range:"","active-color":"#52af77"},{button:t(({currentValue:e})=>[w("div",A,s(e),1)]),_:1},8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).showLabel),1)]),_:1}),o(l(d),{modelValue:l(a).value5,"onUpdate:modelValue":u[9]||(u[9]=e=>l(a).value5=e),"label-visible":"never"},null,8,["modelValue"]),o(l(d),{modelValue:l(a).value6,"onUpdate:modelValue":u[10]||(u[10]=e=>l(a).value6=e)},null,8,["modelValue"]),o(l(d),{modelValue:l(a).value7,"onUpdate:modelValue":u[11]||(u[11]=e=>l(a).value7=e),"label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).validateValue),1)]),_:1}),o(l(d),{modelValue:l(a).value8,"onUpdate:modelValue":u[12]||(u[12]=e=>l(a).value8=e),rules:[e=>e>35||"error message"]},null,8,["modelValue","rules"])],64))}};export{H as default};
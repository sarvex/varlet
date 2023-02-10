import{C as N}from"./index-3531d71c.js";import{v as P}from"./index-694a1082.js";import{u as y,a as T,e as w,f as g,c as V}from"./components-25275440.js";import{d as I,a as $,b as i,w as B,_ as D,p as K,ag as L,D as Y,f as v,h as R,M as C,N as r,R as f,i as U,ah as z,j as A,O as M,P as W,Q as j}from"./vue-router.esm-bundler-10f05234.js";const b=Symbol("SELECT_BIND_OPTION_KEY"),h=Symbol("SELECT_COUNT_OPTION_KEY");function oe(){const{bindChildren:e,childProviders:o}=y(b),{length:n}=T(h);return{length:n,options:o,bindOptions:e}}function Q(){const{bindParent:e,parentProvider:o}=w(b),{index:n}=g(h);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const _={label:{},value:{}},{n:q,classes:F}=V("option"),G=I({name:"VarOption",directives:{Ripple:P},components:{VarCheckbox:N},props:_,setup(e){const o=$(!1),n=i(()=>o.value),d=i(()=>e.label),u=i(()=>e.value),{select:p,bindSelect:s}=Q(),{wrapWidth:t,multiple:l,focusColor:S,onSelect:m}=p,k=()=>{o.value=!o.value,m(a)},O=()=>m(a),a={label:d,value:u,selected:n,sync:E=>{o.value=E}};return B([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),s(a),{n:q,classes:F,optionSelected:o,wrapWidth:t,multiple:l,focusColor:S,handleClick:k,handleSelect:O}}});function H(e,o,n,d,u,p){const s=K("var-checkbox"),t=L("ripple");return Y((v(),R("div",{class:r(e.classes(e.n(),e.n("$--box"),[e.optionSelected,e.n("--selected-color")])),style:f({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...l)=>e.handleClick&&e.handleClick(...l))},[C("div",{class:r(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:f({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(v(),U(s,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.optionSelected=l),onClick:o[1]||(o[1]=z(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):A("",!0),C("div",{class:r(e.classes(e.n("text"),e.n("$--ellipsis")))},[M(e.$slots,"default",{},()=>[W(j(e.label),1)])],2)],6)),[[t]])}const c=D(G,[["render",H]]);c.install=function(e){e.component(c.name,c)};export{c as O,oe as u};
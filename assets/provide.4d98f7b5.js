import{c as p,b as f,a as _}from"./components.b28276ef.js";import{d as g,_ as M,f as a,i as F,S as r,h as n,M as d,q as l,Q as c,j as t,G as o,N as i}from"./vue-router.esm-bundler.2ed3d3be.js";const v={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{n:y}=p("form-details"),h=g({name:"VarFormDetails",props:v,setup:()=>({n:y})});const I={key:0},N={key:0};function b(e,s,k,B,C,D){return a(),F(o,{name:e.n()},{default:r(()=>[e.errorMessage||e.extraMessage?(a(),n("div",{key:0,class:i(e.n())},[d("div",{class:i(e.n("error-message"))},[l(o,{name:e.n("message")},{default:r(()=>[e.errorMessage?(a(),n("div",I,c(e.errorMessage),1)):t("",!0)]),_:1},8,["name"])],2),d("div",{class:i(e.n("extra-message"))},[l(o,{name:e.n("message")},{default:r(()=>[e.extraMessage?(a(),n("div",N,c(e.extraMessage),1)):t("",!0)]),_:1},8,["name"])],2)],2)):t("",!0)]),_:1},8,["name"])}const m=M(h,[["render",b]]);m.install=function(e){e.component(m.name,m)};const u=Symbol("FORM_BIND_FORM_ITEM_KEY");function O(){const{bindParent:e,parentProvider:s}=f(u);return{bindForm:e,form:s}}function P(){const{bindChildren:e,childProviders:s}=_(u);return{formItems:s,bindFormItems:e}}export{m as F,P as a,O as u};
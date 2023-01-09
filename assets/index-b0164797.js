import{d as L,a as G,b as T,w as z,o as Y,_ as P,p as h,D as F,H,f as y,h as K,M as S,N as f,O as g,P as _,Q as B,i as w,j as I,R as N,q as b,S as C,m as O,E as Z,T as Q,r as E,V as W,W as X,X as J,Y as x,Z as q,C as ee}from"./vue-router.esm-bundler-aeae2b6c.js";import{p as m,L as ne}from"./index-7f93c351.js";import{I as oe}from"./index-310428ec.js";import{u as te}from"./zIndex-cb03e96a.js";import{p as v,d as p,f as l,c as U,g as ae,m as se}from"./components-b6fa4b7a.js";import{c as ie}from"./index-52536746.js";import{u as re}from"./lock-314f7e57.js";function le(e){return["top","center","bottom"].includes(e)}function ce(e){return A.includes(e)}const j={type:{type:String,validator:ce},position:{type:String,default:"top",validator:le},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:v(m,"type"),loadingSize:v(m,"size"),loadingRadius:v(m,"radius"),loadingColor:{...v(m,"color"),default:"currentColor"},lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),"onUpdate:show":p(),_update:{type:String}},{n:de,classes:ue}=U("snackbar"),pe={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},fe=L({name:"VarSnackbarCore",components:{VarLoading:ne,VarIcon:oe},props:j,setup(e){const n=G(null),{zIndex:o}=te(()=>e.show,1);re(()=>e.show,()=>e.lockScroll);const t=T(()=>e.type==="loading"||e.forbidClick),s=T(()=>e.type?pe[e.type]:""),i=()=>{n.value=setTimeout(()=>{e.type!=="loading"&&l(e["onUpdate:show"],!1)},e.duration)};return z(()=>e.show,r=>{r?(l(e.onOpen),i()):r===!1&&(clearTimeout(n.value),l(e.onClose))}),z(()=>e._update,()=>{clearTimeout(n.value),i()}),Y(()=>{e.show&&(l(e.onOpen),i())}),{SNACKBAR_TYPE:A,n:de,classes:ue,zIndex:o,iconName:s,isForbidClick:t}}});function me(e,n,o,t,s,i){const r=h("var-icon"),k=h("var-loading");return F((y(),K("div",{class:f(e.n()),style:N({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[S("div",{class:f(e.classes(e.n("wrapper"),e.n(`wrapper-${e.position}`),e.n("$-elevation--4"),[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n(`wrapper-${e.type}`)])),style:N({zIndex:e.zIndex})},[S("div",{class:f([e.n("content"),e.contentClass])},[g(e.$slots,"default",{},()=>[_(B(e.content),1)])],2),S("div",{class:f(e.n("action"))},[e.iconName?(y(),w(r,{key:0,name:e.iconName},null,8,["name"])):I("",!0),e.type==="loading"?(y(),w(k,{key:1,type:e.loadingType,size:e.loadingSize,color:e.loadingColor,radius:e.loadingRadius},null,8,["type","size","color","radius"])):I("",!0),g(e.$slots,"action")],2)],6)],6)),[[H,e.show]])}const D=P(fe,[["render",me]]);const{n:ve}=U("snackbar"),ye=L({name:"VarSnackbar",components:{VarSnackbarCore:D},props:j,setup(){const{disabled:e}=ae();return{n:ve,disabled:e}}});function ge(e,n,o,t,s,i){const r=h("var-snackbar-core");return y(),w(Q,{to:e.teleport,disabled:e.disabled},[b(Z,{name:`${e.n()}-fade`,onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:C(()=>[b(r,O(e.$props,{class:e.n("transition")}),{action:C(()=>[g(e.$slots,"action")]),default:C(()=>[g(e.$slots,"default",{},()=>[_(B(e.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const d=P(ye,[["render",ge]]);function be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ee(e)}const A=["loading","success","warning","info","error"];let V=0,$=!1,M,u=!1,a=E([]);const ke={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},Se={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},Ce={setup(){return()=>{const e=a.map(({id:o,reactiveSnackOptions:t,_update:s})=>{const i=document.querySelector(".var-transition-group");t.forbidClick||t.type==="loading"?i.classList.add("var-pointer-auto"):i.classList.remove("var-pointer-auto"),u&&(t.position="top");const k={position:u?"relative":"absolute",...Ee(t.position)};return b(D,O(t,{key:o,style:k,"data-id":o,_update:s,show:t.show,"onUpdate:show":R=>t.show=R}),null)}),n=ie.zIndex;return b(x,O(Se,{style:{zIndex:n},onAfterEnter:he,onAfterLeave:we}),be(e)?e:{default:()=>[e]})}}},c=function(e){const n=X(e)||J(e)?{content:String(e)}:e,o=E({...ke,...n});o.show=!0,$||($=!0,M=se(Ce).unmountInstance);const{length:t}=a,s={id:V++,reactiveSnackOptions:o};if(t===0||u)Oe(s);else{const i=`update-${V}`;$e(o,i)}return{clear(){!u&&a.length?a[0].reactiveSnackOptions.show=!1:o.show=!1}}};A.forEach(e=>{c[e]=n=>(W(n)?n.type=e:n={content:n,type:e},c(n))});c.install=function(e){e.component(d.name,d)};c.allowMultiple=function(e=!1){e!==u&&(a.forEach(n=>{n.reactiveSnackOptions.show=!1}),u=e)};c.clear=function(){a.forEach(e=>{e.reactiveSnackOptions.show=!1})};c.Component=d;function he(e){const n=e.getAttribute("data-id"),o=a.find(t=>t.id===q(n));o&&l(o.reactiveSnackOptions.onOpened)}function we(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const n=e.getAttribute("data-id"),o=a.find(s=>s.id===q(n));o&&(o.animationEnd=!0,l(o.reactiveSnackOptions.onClosed)),a.every(s=>s.animationEnd)&&(l(M),a=E([]),$=!1)}function Oe(e){a.push(e)}function $e(e,n){const[o]=a;o.reactiveSnackOptions={...o.reactiveSnackOptions,...e},o._update=n}function Ee(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}d.install=function(e){e.component(d.name,d)};const Pe=c;export{Pe as S};

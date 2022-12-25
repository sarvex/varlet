import{F as de,u as ue}from"./provide.9d38a7a3.js";import{I as me}from"./index.753ed6d4.js";import{P as ce}from"./index.d0cb3da2.js";import{I as pe}from"./index.c3e80338.js";import{R as ve}from"./index.08cd40ac.js";import{d as y,i as fe,f as c,c as ge}from"./components.011f3236.js";import{d as ye,a as U,b as Q,X as he,w as Ve,W as X,r as F,n as be,Z,at as G,_ as we,p as T,ag as Re,f as v,h as f,M as P,F as Pe,ai as Ce,D as J,N as i,Q as $e,ah as Be,q as C,j as $,R as ke,O as Se,S as De}from"./vue-router.esm-bundler.5eeb4635.js";import{i as K,a as Y}from"./shared.f77a40d1.js";const Ae={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:y(),onAfterRead:y(),onBeforeRemove:y(),onRemove:y(),onOversize:y(),"onUpdate:modelValue":y()},{n:Le,classes:Ue}=ge("uploader");let Fe=0;const Te=ye({name:"VarUploader",directives:{Ripple:ve},components:{VarIcon:me,VarPopup:ce,VarFormDetails:de},props:Ae,setup(e){const d=U(null),B=U(!1),k=U(null),z=Q(()=>{const{maxlength:a,modelValue:{length:n}}=e;return he(a)?`${n} / ${a}`:""}),{form:s,bindForm:b}=ue(),{errorMessage:S,validateWithTrigger:D,validate:w,resetValidation:l}=fe(),g=Q(()=>{const{modelValue:a,hideList:n}=e;return n?[]:a}),_=()=>{d.value.click()},x=a=>{const{disabled:n,readonly:r,previewed:t}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||n||r||!t)return;const{url:o}=a;if(X(o)&&Y(o)){pe(o);return}X(o)&&K(o)&&(k.value=a,B.value=!0)},ee=a=>({id:Fe++,url:"",cover:"",name:a.name,file:a}),ae=a=>{const n=a.target,{files:r}=n;return Array.from(r)},le=a=>new Promise(n=>{const r=new FileReader;r.onload=()=>{const t=r.result;a.file.type.startsWith("image")&&(a.cover=t),a.url=t,n(a)},r.readAsDataURL(a.file)}),se=a=>a.map(le),ne=a=>{const{onBeforeRead:n}=e;return a.map(r=>new Promise(t=>{n||t({valid:!0,varFile:r});let o=c(n,F(r));o=G(o)?o:[o],Promise.all(o).then(h=>{t({valid:!h.some(V=>!V),varFile:r})})}))},re=async a=>{const{maxsize:n,maxlength:r,modelValue:t,onOversize:o,onAfterRead:h,readonly:V,disabled:m}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||m||V)return;const L=u=>u.filter(R=>R.file.size>Z(n)?(c(o,F(R)),!1):!0),te=u=>{const R=Math.min(u.length,Z(r)-t.length);return u.slice(0,R)};let p=ae(a).map(ee);p=n!=null?L(p):p,p=r!=null?te(p):p;const ie=await Promise.all(se(p)),q=(await Promise.all(ne(ie))).filter(({valid:u})=>u).map(({varFile:u})=>u);c(e["onUpdate:modelValue"],[...t,...q]),a.target.value="",q.forEach(u=>c(h,F(u)))},oe=async a=>{const{disabled:n,readonly:r,modelValue:t,onBeforeRemove:o,onRemove:h}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||n||r)return;if(o){let m=c(o);if(m=G(m)?m:[m],(await Promise.all(m)).some(L=>!L))return}const V=t.filter(m=>m!==a);c(h,a),H("onRemove"),c(e["onUpdate:modelValue"],V)},M=()=>e.modelValue.filter(a=>a.state==="success"),I=()=>e.modelValue.filter(a=>a.state==="error"),W=()=>e.modelValue.filter(a=>a.state==="loading"),E={getSuccess:M,getError:I,getLoading:W},H=a=>{be(()=>{const{validateTrigger:n,rules:r,modelValue:t}=e;D(n,a,r,t,E)})};let A=!1;const O=()=>w(e.rules,e.modelValue,E),j=()=>{A=!0,c(e["onUpdate:modelValue"],[]),l()};return c(b,{validate:O,resetValidation:l,reset:j}),Ve(()=>e.modelValue,()=>{!A&&H("onChange"),A=!1},{deep:!0}),{n:Le,classes:Ue,input:d,files:g,showPreview:B,currentPreview:k,errorMessage:S,maxlengthText:z,isHTMLSupportVideo:K,isHTMLSupportImage:Y,formDisabled:s==null?void 0:s.disabled,formReadonly:s==null?void 0:s.readonly,preview:x,triggerAction:_,handleChange:re,handleRemove:oe,getSuccess:M,getError:I,getLoading:W,validate:O,resetValidation:l,reset:j}}});const Ne=["onClick"],ze=["onClick"],Me=["src","alt"],Ie=["multiple","accept","capture","disabled"],We=["src"];function Ee(e,d,B,k,z,s){const b=T("var-icon"),S=T("var-form-details"),D=T("var-popup"),w=Re("ripple");return v(),f("div",{class:i(e.classes(e.n(),e.n("$--box")))},[P("div",{class:i(e.n("file-list"))},[(v(!0),f(Pe,null,Ce(e.files,l=>J((v(),f("div",{class:i(e.classes(e.n("file"),e.n("$-elevation--2"),[l.state==="loading",e.n("--loading")])),key:l.id,onClick:g=>e.preview(l)},[P("div",{class:i(e.n("file-name"))},$e(l.name||l.url),3),e.removable?(v(),f("div",{key:0,class:i(e.n("file-close")),onClick:Be(g=>e.handleRemove(l),["stop"])},[C(b,{class:i(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,ze)):$("",!0),l.cover?(v(),f("img",{key:1,class:i(e.n("file-cover")),style:ke({objectFit:l.fit}),src:l.cover,alt:l.name},null,14,Me)):$("",!0),P("div",{class:i(e.classes(e.n("file-indicator"),[l.state==="success",e.n("--success")],[l.state==="error",e.n("--error")]))},null,2)],10,Ne)),[[w,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?J((v(),f("div",{key:0,class:i(e.classes([!e.$slots.default,`${e.n("action")} ${e.n("$-elevation--2")}`],[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:d[1]||(d[1]=(...l)=>e.triggerAction&&e.triggerAction(...l))},[P("input",{ref:"input",class:i(e.n("action-input")),type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,Ie),Se(e.$slots,"default",{},()=>[C(b,{class:i(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[w,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):$("",!0)],2),C(S,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"]),C(D,{class:i(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[2]||(d[2]=l=>e.showPreview=l),onClosed:d[3]||(d[3]=l=>e.currentPreview=null)},{default:De(()=>{var l,g;return[e.currentPreview&&e.isHTMLSupportVideo((l=e.currentPreview)==null?void 0:l.url)?(v(),f("video",{key:0,class:i(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(g=e.currentPreview)==null?void 0:g.url},null,10,We)):$("",!0)]}),_:1},8,["class","show"])],2)}const N=we(Te,[["render",Ee]]);N.install=function(e){e.component(N.name,N)};export{N as U};

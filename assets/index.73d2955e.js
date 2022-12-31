import{I as be}from"./index.6d2543c3.js";import{M as ye}from"./index.15c71d05.js";import{C as he}from"./index.592ec33a.js";import{F as Ce,u as ge}from"./provide.732783ad.js";import{d as Ve,a as m,b as E,aO as k,w as P,n as ke,at as we,_ as Me,p as N,f as t,h as p,M as c,N as n,O as w,q as U,S as W,R as M,j as L,Q as A,F as Z,ai as Fe,i as _,P as Se,ah as Be}from"./vue-router.esm-bundler.34317ebb.js";import{d as b,i as $e,f as u,c as De}from"./components.3467a955.js";import{u as Ee}from"./index.ba2570e6.js";import{t as x}from"./elements.6cdeda8d.js";function Ne(e){return["left","right","center"].includes(e)}const Ae={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Ne},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:b(),onBlur:b(),onClick:b(),onClear:b(),onClose:b(),onChange:b(),"onUpdate:modelValue":b()},{n:Y,classes:Te}=De("select"),Oe=Ve({name:"VarSelect",components:{VarIcon:be,VarMenu:ye,VarChip:he,VarFormDetails:Ce},props:Ae,setup(e){const i=m(null),v=m(!1),I=E(()=>e.multiple),R=E(()=>e.focusColor),F=m(""),S=m([]),B=E(()=>k(e.modelValue)),C=m("0px"),g=m(0),{bindForm:d,form:l}=ge(),{length:ee,options:y,bindOptions:le}=Ee(),{errorMessage:ae,validateWithTrigger:se,validate:oe,resetValidation:T}=$e(),ne=m(null),re=()=>{const{multiple:s,modelValue:a}=e;if(s){const o=a;S.value=o.map(j)}!s&&!k(a)&&(F.value=j(a)),!s&&k(a)&&(F.value="")},h=s=>{ke(()=>{const{validateTrigger:a,rules:o,modelValue:r}=e;se(a,s,o,r)})},$=({value:s,label:a})=>s.value!=null?s.value:a.value,j=s=>{var o;let a=y.find(({value:r})=>r.value===s);return a||(a=y.find(({label:r})=>r.value===s)),(o=a==null?void 0:a.label.value)!=null?o:""},ie=()=>{const{hint:s,modelValue:a}=e;if(!s&&!k(a))return Y("--placeholder-hidden");if(s&&(!k(a)||v.value))return Y("--placeholder-hint")},q=()=>i.value&&window.getComputedStyle(i.value).width||"0px",de=()=>{const{disabled:s,readonly:a,onFocus:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||(C.value=q(),g.value=x(e.offsetY),v.value=!0,u(o),h("onFocus"))},ue=()=>{const{disabled:s,readonly:a,onBlur:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||(u(o),h("onBlur"))},te=s=>{const{disabled:a,readonly:o,multiple:r,onChange:V}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||o)return;const f=r?y.filter(({selected:D})=>D.value).map($):$(s);u(e["onUpdate:modelValue"],f),u(V,f),h("onChange"),!r&&(v.value=!1)},ce=()=>{const{disabled:s,readonly:a,multiple:o,clearable:r,onClear:V}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||a||!r)return;const f=o?[]:void 0;u(e["onUpdate:modelValue"],f),u(V,f),h("onClear")},ve=s=>{const{disabled:a,onClick:o}=e;(l==null?void 0:l.disabled.value)||a||(u(o,s),h("onClick"))},fe=s=>{const{disabled:a,readonly:o,modelValue:r,onClose:V}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||o)return;const f=r,D=y.find(({label:O})=>O.value===s),K=f.filter(O=>{var X;return O!==((X=D.value.value)!=null?X:D.label.value)});u(e["onUpdate:modelValue"],K),u(V,K),h("onClose")},Q=()=>{const{multiple:s,modelValue:a}=e;if(s){const o=a;y.forEach(r=>r.sync(o.includes($(r))))}else y.forEach(o=>o.sync(a===$(o)));re()},me=()=>{C.value=q(),g.value=x(e.offsetY),v.value=!0},pe=()=>{v.value=!1},G=()=>oe(e.rules,e.modelValue),H=()=>{u(e["onUpdate:modelValue"],e.multiple?[]:void 0),T()};P(()=>e.multiple,()=>{const{multiple:s,modelValue:a}=e;if(s&&!we(a))throw Error("The modelValue must be an array when multiple is true")}),P(()=>e.modelValue,Q,{deep:!0}),P(()=>ee.value,Q);const J={wrapWidth:E(()=>C.value),multiple:I,focusColor:R,onSelect:te,reset:H,validate:G,resetValidation:T};return le(J),u(d,J),{wrapEl:i,offsetY:g,isFocus:v,errorMessage:ae,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,label:F,labels:S,isEmptyModelValue:B,menuEl:ne,n:Y,classes:Te,computePlaceholderState:ie,handleFocus:de,handleBlur:ue,handleClear:ce,handleClick:ve,handleClose:fe,reset:H,validate:G,resetValidation:T,focus:me,blur:pe}}});const Pe={key:1};function Ue(e,i,v,I,R,F){const S=N("var-chip"),B=N("var-icon"),C=N("var-menu"),g=N("var-form-details");return t(),p("div",{class:n(e.classes(e.n(),e.n("$--box"),[e.formDisabled||e.disabled,e.n("--disabled")])),onClick:i[3]||(i[3]=(...d)=>e.handleClick&&e.handleClick(...d))},[c("div",{class:n(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:M({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[c("div",{class:n(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[w(e.$slots,"prepend-icon")],2),c("div",{class:n(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")])),ref:"wrapEl",onClick:i[2]||(i[2]=(...d)=>e.handleFocus&&e.handleFocus(...d))},[U(C,{"var-select-cover":"",class:n(e.classes(e.n("menu"))),"offset-y":e.offsetY,disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled,"default-style":!1,show:e.isFocus,"onUpdate:show":i[1]||(i[1]=d=>e.isFocus=d),onClose:e.handleBlur},{menu:W(()=>[c("div",{ref:"menuEl",class:n(e.classes(e.n("scroller"),e.n("$-elevation--3")))},[w(e.$slots,"default")],2)]),default:W(()=>[c("div",{class:n(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:M({textAlign:e.textAlign,color:e.textColor})},[c("div",{class:n(e.n("label"))},[e.isEmptyModelValue?L("",!0):w(e.$slots,"selected",{key:0},()=>[e.multiple?(t(),p(Z,{key:0},[e.chip?(t(),p("div",{key:0,class:n(e.n("chips"))},[(t(!0),p(Z,null,Fe(e.labels,d=>(t(),_(S,{class:n(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:d,onClick:i[0]||(i[0]=Be(()=>{},["stop"])),onClose:()=>e.handleClose(d)},{default:W(()=>[Se(A(d),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(t(),p("div",{key:1,class:n(e.n("values"))},A(e.labels.join(e.separator)),3))],64)):(t(),p("span",Pe,A(e.label),1))])],2),w(e.$slots,"arrow-icon",{focus:e.isFocus},()=>[U(B,{class:n(e.classes(e.n("arrow"),[e.isFocus,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])])],6),c("label",{class:n(e.classes(e.n("placeholder"),e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:M({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},A(e.placeholder),7)]),_:3},8,["class","offset-y","disabled","show","onClose"])],2),c("div",{class:n(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[w(e.$slots,"append-icon",{},()=>[e.clearable?(t(),_(B,{key:0,class:n(e.n("clear-icon")),name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):L("",!0)])],2)],6),e.line?(t(),p("div",{key:0,class:n(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:M({background:e.errorMessage?void 0:e.blurColor})},[c("div",{class:n(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:M({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):L("",!0),U(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const z=Me(Oe,[["render",Ue]]);z.install=function(e){e.component(z.name,z)};export{z as S};
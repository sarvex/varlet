import{F as j,u as q}from"./provide.e985b336.js";import{I as H}from"./index.2b3dacb8.js";import{b as v}from"./shared.506a394a.js";import{a as J,b as d,c as K}from"./components.2481c71b.js";import{_ as L}from"./elevation.229458c1.js";import{d as O,r as B,A as Q,b as X,e as D,o as u,c as y,a as t,p as r,G as $,h as V,n as p,t as Y,i as Z,z as x,l as _}from"./vendor.49f89f0d.js";function ee(e){return["text","password","number"].includes(e)}const le={modelValue:{type:String},type:{type:String,default:"text",validator:ee},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:k,classes:ne}=K("input"),ae=O({name:"VarInput",components:{VarIcon:H,VarFormDetails:j},props:le,setup(e){const n=B(`var-input-${Q().uid}`),f=B(null),m=B(!1),M=X(()=>{const{maxlength:l,modelValue:s}=e;return l?v(s)?`0 / ${l}`:`${String(s).length}/${l}`:""}),{bindForm:h,form:o}=q(),{errorMessage:b,validateWithTrigger:a,validate:z,resetValidation:C}=J(),i=l=>{x(()=>{const{validateTrigger:s,rules:g,modelValue:F}=e;a(s,l,g,F)})},T=()=>{const{hint:l,modelValue:s}=e;if(!l&&!v(s))return k("--placeholder-hidden");if(l&&(!v(s)||m.value))return k("--placeholder-hint")},N=l=>{m.value=!0,d(e.onFocus,l),i("onFocus")},U=l=>{m.value=!1,d(e.onBlur,l),i("onBlur")},A=l=>{const{value:s}=l.target;d(e["onUpdate:modelValue"],s),d(e.onInput,s,l),i("onInput")},E=l=>{const{value:s}=l.target;d(e.onChange,s,l),i("onChange")},P=()=>{const{disabled:l,readonly:s,clearable:g,onClear:F}=e;(o==null?void 0:o.disabled.value)||(o==null?void 0:o.readonly.value)||l||s||!g||(d(e["onUpdate:modelValue"],""),d(F,""),i("onClear"))},R=l=>{const{disabled:s,onClick:g}=e;(o==null?void 0:o.disabled.value)||s||(d(g,l),i("onClick"))},S=()=>{d(e["onUpdate:modelValue"],""),C()},w=()=>z(e.rules,e.modelValue),W=()=>{f.value.focus()},c=()=>{f.value.blur()},G={reset:S,validate:w,resetValidation:C};return h==null||h(G),{el:f,id:n,isFocus:m,errorMessage:b,maxlengthText:M,formDisabled:o==null?void 0:o.disabled,formReadonly:o==null?void 0:o.readonly,n:k,classes:ne,call:d,isEmpty:v,computePlaceholderState:T,handleFocus:N,handleBlur:U,handleInput:A,handleChange:E,handleClear:P,handleClick:R,validate:w,resetValidation:C,reset:S,focus:W,blur:c}}}),oe=["id","disabled","type","value","maxlength","rows"],se=["id","disabled","type","value","maxlength"],re=["for"];function de(e,n,f,m,M,h){const o=D("var-icon"),b=D("var-form-details");return u(),y("div",{class:r(e.classes(e.n(),"var--box",[e.disabled,e.n("--disabled")])),onClick:n[8]||(n[8]=(...a)=>e.handleClick&&e.handleClick(...a))},[t("div",{class:r(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:p({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[t("div",{class:r(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[$(e.$slots,"prepend-icon")],2),t("div",{class:r(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")]))},[e.type==="password"?(u(),y("input",{key:0,class:r(e.classes(e.n("autocomplete")))},null,2)):V("v-if",!0),e.textarea?(u(),y("textarea",{key:1,class:r(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:p({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:n[0]||(n[0]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[1]||(n[1]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:n[2]||(n[2]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:n[3]||(n[3]=(...a)=>e.handleChange&&e.handleChange(...a))},`
        `,46,oe)):(u(),y("input",{key:2,class:r(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:p({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor}),onFocus:n[4]||(n[4]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[5]||(n[5]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:n[6]||(n[6]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:n[7]||(n[7]=(...a)=>e.handleChange&&e.handleChange(...a))},null,46,se)),t("label",{class:r(e.classes("var--ellipsis",[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.textarea,e.n("textarea-placeholder"),e.n("placeholder")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:p({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},Y(e.placeholder),15,re)],2),t("div",{class:r(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[$(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(u(),_(o,{key:0,class:r(e.classes(e.n("clear-icon"))),"var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):V("v-if",!0)])],2)],6),e.line?(u(),y("div",{key:0,class:r(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.blurColor})},[t("div",{class:r(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):V("v-if",!0),Z(b,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var I=L(ae,[["render",de]]);I.install=function(e){e.component(I.name,I)};export{I};

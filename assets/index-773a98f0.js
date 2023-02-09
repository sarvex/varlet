import{u as J,a as R,d as z,c as F,b as D,e as X,f as Z}from"./components-85d602c5.js";import{d as K,b as L,w as N,n as A,at as U,_ as Y,f as w,h as M,O as E,N as g,a as P,p as x,M as _,P as c,Q as m,q as i,D as ee,H as te,r as le,ac as ae,az as ne,S as o,ap as t,F as oe,aA as S}from"./vue-router.esm-bundler-2d182057.js";import{r as H,n as se}from"./elements-2c327c2b.js";import{I as ie}from"./index-b5ac9852.js";import{B as re}from"./index-5d5b5fa1.js";import{S as de}from"./index-8f26ed46.js";import{d as ue}from"./index-2ba6d771.js";import{u as ce,c as me,a as q,_ as fe,b as ve}from"./index-f94150e9.js";import"./shared-64cd63fe.js";import"./index-ac12c062.js";import"./index-08ca7f08.js";/* empty css               */import"./index-2962b799.js";const Q=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"),W=Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");function pe(){const{bindChildren:e,childProviders:s}=J(Q),{length:n}=R(W);return{length:n,collapseItem:s,bindCollapseItem:e}}const he={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},onChange:z(),"onUpdate:modelValue":z()},{n:Ce}=F("collapse"),ge=K({name:"VarCollapse",props:he,setup(e){const{length:s,collapseItem:n,bindCollapseItem:b}=pe(),p=L(()=>e.modelValue),l=L(()=>e.offset),u=()=>!e.accordion&&!U(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&U(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,f=(r,d)=>u()?d?e.accordion?r:[...e.modelValue,r]:e.accordion?null:e.modelValue.filter(C=>C!==r):null,y=(r,d)=>{const C=f(r,d);D(e["onUpdate:modelValue"],C),D(e.onChange,C)},T=()=>{if(e.accordion)return n.find(({name:d})=>e.modelValue===d.value);const r=n.filter(({name:d})=>d.value===void 0?!1:e.modelValue.includes(d.value));return r.length?r:void 0},$=()=>e.accordion?n.find(({index:r,name:d})=>d.value===void 0&&e.modelValue===r.value):n.filter(({index:r,name:d})=>d.value===void 0&&e.modelValue.includes(r.value)),I=()=>{if(!u())return;const r=T()||$();if(e.accordion&&!r||!e.accordion&&!r.length){n.forEach(d=>{d.init(e.accordion,!1)});return}n.forEach(d=>{const C=e.accordion?r===d:r.includes(d);d.init(e.accordion,C)})};return b({active:p,offset:l,updateItem:y}),N(()=>s.value,()=>A().then(I)),N(()=>e.modelValue,()=>A().then(I)),{n:Ce}}});function Ve(e,s,n,b,p,l){return w(),M("div",{class:g(e.n())},[E(e.$slots,"default")],2)}const V=Y(ge,[["render",Ve]]);V.install=function(e){e.component(V.name,V)};function be(){const{parentProvider:e,bindParent:s}=X(Q),{index:n}=Z(W);if(!e||!s||!n)throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");return{index:n,collapse:e,bindCollapse:s}}const _e={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}},{n:Se,classes:ye}=F("collapse-item"),Ie=K({name:"VarCollapseItem",components:{VarIcon:ie},props:_e,setup(e){const{index:s,collapse:n,bindCollapse:b}=be();let p=!0;const l=P(null),u=P(!1),f=P(!1),{active:y,offset:T,updateItem:$}=n,I=L(()=>e.name),k=(h,O)=>{y.value===void 0||h&&U(y.value)||O===f.value||(f.value=O,r(!0))},r=h=>{e.disabled||h||$(e.name||s.value,!f.value)},d=()=>{l.value&&(l.value.style.height="",u.value=!0,A(()=>{const{offsetHeight:h}=l.value;l.value.style.height=0+"px",H(()=>{l.value.style.height=h+"px",p&&se(()=>{p&&B()})})}))},C=()=>{p=!1},G=()=>{if(!l.value)return;const{offsetHeight:h}=l.value;l.value.style.height=h+"px",H(()=>{l.value.style.height=0+"px"})},B=()=>{f.value||(u.value=!1),l.value.style.height=""};return b({index:s,name:I,init:k}),N(f,h=>{h?d():G()}),{n:Se,start:C,classes:ye,show:u,isShow:f,offset:T,toggle:r,contentEl:l,transitionend:B}}});function Ee(e,s,n,b,p,l){const u=x("var-icon");return w(),M("div",{class:g(e.classes(e.n(),[e.offset&&e.isShow,e.n("--active")],[e.disabled,e.n("--disable")]))},[_("div",{class:g(e.n("header")),onClick:s[0]||(s[0]=f=>e.toggle())},[_("div",{class:g(e.n("header-title"))},[E(e.$slots,"title",{},()=>[c(m(e.title),1)])],2),_("div",{class:g(e.n("header-icon"))},[E(e.$slots,"icon",{},()=>[i(u,{name:e.icon,transition:250,class:g(e.classes(e.n("header-icon"),[e.isShow&&e.icon==="chevron-down",e.n("header-open")],[e.disabled,e.n("header--disable")]))},null,8,["name","class"])])],2)],2),ee(_("div",{class:g(e.n("content")),ref:"contentEl",onTransitionend:s[1]||(s[1]=(...f)=>e.transitionend&&e.transitionend(...f)),onTransitionstart:s[2]||(s[2]=(...f)=>e.start&&e.start(...f))},[_("div",{class:g(e.n("content-wrap"))},[E(e.$slots,"default")],2)],34),[[te,e.show]])],2)}const v=Y(Ie,[["render",Ee]]);v.install=function(e){e.component(v.name,v)};const Pe={basicUsage:"基本使用",hideMargin:"隐藏边距",accordionMode:"手风琴模式",disabled:"禁用",enable:"启用",customContent:"自定义内容",title:"标题",text:"文本",slotTitle:"这是标题",slotContent:"这是内容"},Te={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"},{add:j,use:$e,pack:a,packs:Qe,merge:We}=ce(),Le=e=>{me(e),$e(e)};q("zh-CN",fe);q("en-US",ve);j("zh-CN",Pe);j("en-US",Te);const Ne=c("^_^"),je={setup(e){const s=P(!1),n=le({value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]});function b(p){console.log(p)}return ae(Le),ne(ue),(p,l)=>(w(),M(oe,null,[i(t(S),null,{default:o(()=>[c(m(t(a).basicUsage),1)]),_:1}),i(t(V),{modelValue:t(n).value,"onUpdate:modelValue":l[0]||(l[0]=u=>t(n).value=u),onChange:b},{default:o(()=>[i(t(v),{title:t(a).title,name:"1"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"]),i(t(v),{title:t(a).title,name:"2"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),i(t(S),null,{default:o(()=>[c(m(t(a).hideMargin),1)]),_:1}),i(t(V),{modelValue:t(n).value4,"onUpdate:modelValue":l[1]||(l[1]=u=>t(n).value4=u),offset:!1},{default:o(()=>[i(t(v),{title:t(a).title,name:"1"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"]),i(t(v),{title:t(a).title,name:"2"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),i(t(S),null,{default:o(()=>[c(m(t(a).accordionMode),1)]),_:1}),i(t(V),{modelValue:t(n).value1,"onUpdate:modelValue":l[2]||(l[2]=u=>t(n).value1=u),accordion:"",offset:!1},{default:o(()=>[i(t(v),{title:t(a).title,name:"1"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"]),i(t(v),{title:t(a).title,name:"2"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),i(t(S),null,{default:o(()=>[c(m(t(a).disabled),1)]),_:1}),i(t(de),{direction:"column",size:[8,8]},{default:o(()=>[i(t(re),{onClick:l[3]||(l[3]=u=>s.value=!s.value)},{default:o(()=>[c(m(s.value?t(a).enable:t(a).disabled),1)]),_:1}),i(t(V),{modelValue:t(n).value2,"onUpdate:modelValue":l[4]||(l[4]=u=>t(n).value2=u)},{default:o(()=>[i(t(v),{title:t(a).title,name:1,disabled:s.value},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title","disabled"]),i(t(v),{title:t(a).title,name:2,disabled:s.value},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),_:1}),i(t(S),null,{default:o(()=>[c(m(t(a).customContent),1)]),_:1}),i(t(V),{modelValue:t(n).value3,"onUpdate:modelValue":l[5]||(l[5]=u=>t(n).value3=u)},{default:o(()=>[i(t(v),{title:t(a).slotTitle,name:"1",icon:"account-circle"},{default:o(()=>[c(m(t(a).text),1)]),_:1},8,["title"]),i(t(v),{name:"2"},{title:o(()=>[c(m(t(a).slotTitle),1)]),icon:o(()=>[Ne]),default:o(()=>[c(" "+m(t(a).slotContent),1)]),_:1})]),_:1},8,["modelValue"])],64))}};export{je as default};

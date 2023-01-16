import{p as I,S as x}from"./index-c936964b.js";import{d as X,a as s,b as l,w,o as ee,v as te,E as ae,X as oe,_ as O,f as Z,i as ne,S as ie,M as U,N as V,O as j,R as q,m as se,aE as le,ag as re,D as ce,h as de}from"./vue-router.esm-bundler-596ad174.js";import{p as Y,d as D,u as ue,a as fe,c as F,f as T,b as ve,e as me}from"./components-bbfed807.js";import{l as W}from"./shared-c2373229.js";import{a as be,d as ye,e as K}from"./elements-b756947f.js";import{v as pe}from"./index-112c0bf2.js";function R(e){return["horizontal","vertical"].includes(e)}const Ce={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:R},itemDirection:{type:String,default:"horizontal",validator:R},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:Y(I,"cssMode"),stickyZIndex:Y(I,"zIndex"),offsetTop:Y(I,"offsetTop"),safeArea:{type:Boolean,default:!1},onClick:D(),onChange:D(),"onUpdate:active":D()},G=Symbol("TABS_BIND_TAB_KEY"),J=Symbol("TABS_COUNT_TAB_KEY");function he(){const{childProviders:e,bindChildren:o}=ue(G),{length:i}=fe(J);return{length:i,tabList:e,bindTabList:o}}const{n:$e,classes:Te}=F("tabs"),ke=X({name:"VarTabs",components:{VarSticky:x},inheritAttrs:!1,props:Ce,setup(e){const o=s("0px"),i=s("0px"),f=s("0px"),v=s("0px"),n=s(!1),m=s(null),p=l(()=>e.active),A=l(()=>e.activeColor),r=l(()=>e.inactiveColor),k=l(()=>e.disabledColor),S=l(()=>e.itemDirection),C=s(null),{tabList:h,bindTabList:g,length:c}=he(),E=a=>{const t=a.name.value??a.index.value,{active:y,onChange:$,onClick:_}=e;T(e["onUpdate:active"],t),T(_,t),t!==y&&T($,t)},N=()=>h.find(({name:a})=>e.active===a.value),z=a=>h.find(({index:t})=>(a??e.active)===t.value),d=()=>{if(c.value===0)return;const{active:a}=e;if(oe(a)){const t=a>c.value-1?c.value-1:0;return T(e["onUpdate:active"],t),z(t)}},u=()=>{n.value=h.length>=5},P=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,f.value=`${t==null?void 0:t.offsetLeft}px`):(i.value=`${t==null?void 0:t.offsetHeight}px`,v.value=`${t==null?void 0:t.offsetTop}px`)},L=({element:a})=>{if(!n.value)return;const t=m.value,y=a.value;if(e.layoutDirection==="horizontal"){const $=y.offsetLeft+y.offsetWidth/2-t.offsetWidth/2;K(t,{left:$,animation:W})}else{const $=y.offsetTop+y.offsetHeight/2-t.offsetHeight/2;K(t,{top:$,animation:W})}},b=()=>{const a=N()||z()||d();!a||a.disabled.value||(u(),P(a),L(a))},Q=async()=>{e.sticky&&C.value&&await C.value.resize()};return g({active:p,activeColor:A,inactiveColor:r,disabledColor:k,itemDirection:S,resize:b,onTabClick:E}),w(()=>c.value,async()=>{await ye(),b()}),w(()=>e.active,b),ee(()=>window.addEventListener("resize",b)),te(()=>window.removeEventListener("resize",b)),{stickyComponent:C,indicatorWidth:o,indicatorHeight:i,indicatorX:f,indicatorY:v,scrollable:n,scrollerEl:m,Transition:ae,toSizeUnit:be,n:$e,classes:Te,resize:b,resizeSticky:Q}}});function Se(e,o,i,f,v,n){return Z(),ne(le(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:ie(()=>[U("div",se({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),[e.elevation,e.n("$-elevation--4")],[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[U("div",{ref:"scrollerEl",class:V(e.classes(e.n("tab-wrap"),[e.scrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[j(e.$slots,"default"),U("div",{class:V(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}-indicator`))),style:q({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const H=O(ke,[["render",Se]]);H.install=function(e){e.component(H.name,H)};const ge={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:D()};function ze(){const{parentProvider:e,bindParent:o}=ve(G),{index:i}=me(J);if(!e||!o||!i)throw Error("<var-tab/> must in <var-tabs/>");return{index:i,tabs:e,bindTabs:o}}const{n:B,classes:Be}=F("tab"),De=X({name:"VarTab",directives:{Ripple:pe},props:ge,setup(e){const o=s(null),i=l(()=>e.name),f=l(()=>e.disabled),v=l(()=>o.value),{index:n,tabs:m,bindTabs:p}=ze(),{onTabClick:A,active:r,activeColor:k,inactiveColor:S,disabledColor:C,itemDirection:h,resize:g}=m,c={name:i,index:n,disabled:f,element:v};p(c);const E=()=>{const{disabled:d,name:u}=e;return d?C.value:r.value===u||r.value===(n==null?void 0:n.value)?k.value:S.value},N=()=>{const{disabled:d,name:u}=e;return d?B("$-tab--disabled"):r.value===u||r.value===(n==null?void 0:n.value)?B("$-tab--active"):B("$-tab--inactive")},z=d=>{const{disabled:u,name:P,onClick:L}=e;u||(T(L,P??n.value,d),A(c))};return w(()=>e.name,g),w(()=>e.disabled,g),{n:B,classes:Be,tabEl:o,active:r,activeColor:k,inactiveColor:S,itemDirection:h,computeColorStyle:E,computeColorClass:N,handleClick:z}}});function we(e,o,i,f,v,n){const m=re("ripple");return ce((Z(),de("div",{class:V(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:q({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...p)=>e.handleClick&&e.handleClick(...p))},[j(e.$slots,"default")],6)),[[m,{disabled:e.disabled}]])}const M=O(De,[["render",we]]);M.install=function(e){e.component(M.name,M)};export{M as T,H as a};
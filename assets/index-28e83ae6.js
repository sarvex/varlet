import{d as C,a as N,b as g,Z as d,w as $,V as h,_ as O,f as j,h as w,O as v,N as P,R as k}from"./vue-router.esm-bundler-1ba0b218.js";import{d as z,e as R,f as V,b,c as L}from"./components-42ed6c38.js";import{a as U,b as B}from"./index-4f6eb0f2.js";import{a as E,p as F}from"./elements-dcd54589.js";function I(e){return["row","column"].includes(e)}function D(e){return["start","end","center","space-around","space-between","flex-start","flex-end"].includes(e)}function K(e){return["stretch","center","start","end","baseline","initial","inherit","flex-start","flex-end"].includes(e)}const W={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:I},justify:{type:String,validator:D},align:{type:String,validator:K},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:z()};function Y(){const{parentProvider:e,bindParent:n}=R(U),{index:s}=V(B);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:o,classes:A}=L("col"),T=C({name:"VarCol",props:W,setup(e){const n=N({left:0,right:0}),s=g(()=>d(e.span)),u=g(()=>d(e.offset)),{row:r,bindRow:p}=Y(),l={setPadding(t){n.value=t}},S=(t,a)=>{const i=[];if(a==null)return i;if(h(a)){const{offset:c,span:m}=a;Number(m)>=0&&i.push(o(`--span-${t}-${m}`)),c&&i.push(o(`--offset-${t}-${c}`))}else Number(a)>=0&&i.push(o(`--span-${t}-${a}`));return i},y=t=>{b(e.onClick,t)};return $([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),b(p,l),{n:o,classes:A,padding:n,toNumber:d,toSizeUnit:E,getSize:S,span:s,offset:u,handleClick:y,padStartFlex:F}}});function Z(e,n,s,u,r,p){return j(),w("div",{class:P(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:k({flexDirection:e.direction,justifyContent:e.padStartFlex(e.justify),alignItems:e.padStartFlex(e.align),paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[v(e.$slots,"default")],6)}const f=O(T,[["render",Z]]);f.install=function(e){e.component(f.name,f)};export{f as C};
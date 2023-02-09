import{d as N,a as $,b as g,Z as f,w as y,V as O,_ as h,f as w,h as P,O as k,N as v,R as z}from"./vue-router.esm-bundler-2d182057.js";import{d as R,e as j,f as L,b,c as U}from"./components-85d602c5.js";import{a as B,b as E}from"./index-5869ebfb.js";import{a as V}from"./elements-2c327c2b.js";function D(e){return["row","column"].includes(e)}const I={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:D},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:R()};function K(){const{parentProvider:e,bindParent:n}=j(B),{index:t}=L(E);return(!e||!n||!t)&&console.warn("col must in row"),{index:t,row:e,bindRow:n}}const{n:r,classes:W}=U("col"),Y=N({name:"VarCol",props:I,setup(e){const n=$({left:0,right:0}),t=g(()=>f(e.span)),p=g(()=>f(e.offset)),{row:i,bindRow:u}=K(),l={setPadding(s){n.value=s}},S=(s,o)=>{const a=[];if(o==null)return a;if(O(o)){const{offset:m,span:c}=o;Number(c)>=0&&a.push(r(`--span-${s}-${c}`)),m&&a.push(r(`--offset-${s}-${m}`))}else Number(o)>=0&&a.push(r(`--span-${s}-${o}`));return a},C=s=>{b(e.onClick,s)};return y([()=>e.span,()=>e.offset],()=>{i==null||i.computePadding()}),b(u,l),{n:r,classes:W,padding:n,toNumber:f,toSizeUnit:V,getSize:S,span:t,offset:p,handleClick:C}}});function A(e,n,t,p,i,u){return w(),P("div",{class:v(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:z({flexDirection:e.direction,paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[k(e.$slots,"default")],6)}const d=h(Y,[["render",A]]);d.install=function(e){e.component(d.name,d)};export{d as C};
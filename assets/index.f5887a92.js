import{b as S,d as C,e as N,t as f,c as $,i as y}from"./components.69d5bae5.js";import{a as O,b as v}from"./index.1b3f3c98.js";import{a as P}from"./elements.afe20251.js";import{d as h,a as w,b,w as z,_ as j,f as k,h as R,J as U,H as B,K as E}from"./elevation.e55d3ca3.js";const K={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function L(){const{parentProvider:e,bindParent:n}=S(O),{index:s}=C(v);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:I}=$("col"),W=h({name:"VarCol",props:K,setup(e){const n=w({left:0,right:0}),s=b(()=>f(e.span)),u=b(()=>f(e.offset)),{row:r,bindRow:d}=L(),l={setPadding(t){n.value=t}},c=(t,a)=>{const o=[];if(a==null)return o;if(y(a)){const{offset:m,span:g}=a;Number(g)>=0&&o.push(i(`--span-${t}-${g}`)),m&&o.push(i(`--offset-${t}-${m}`))}else Number(a)>=0&&o.push(i(`--span-${t}-${a}`));return o};return z([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),N(d,l),{n:i,classes:I,padding:n,toNumber:f,toSizeUnit:P,getSize:c,span:s,offset:u}}});function Y(e,n,s,u,r,d){return k(),R("div",{class:B(e.classes(e.n(),"var--box",[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:E({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[U(e.$slots,"default")],6)}var p=j(W,[["render",Y]]);p.install=function(e){e.component(p.name,p)};export{p as C};
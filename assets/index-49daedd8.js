import{v as E}from"./index-694a1082.js";import{v as $}from"./index-4bfc70f0.js";import{d as z,c as B,b as c}from"./components-25275440.js";import{a as I}from"./elements-87b8c072.js";import{d as F,_ as U,ag as S,D as k,f as y,h as w,N as _,R as b,ac as M,q as a,S as n,ap as t,F as V,P as m,Q as g,aA as u,M as l,al as D,am as T}from"./vue-router.esm-bundler-10f05234.js";import{R as C}from"./index-34887fe9.js";import{u as A,c as P,a as N,_ as q,b as Q}from"./index-743dd119.js";import"./index-099a024e.js";/* empty css               */import"./shared-5ff0af51.js";function G(e){return["fill","contain","cover","none","scale-down"].includes(e)}const H={src:{type:String},fit:{type:String,validator:G,default:"fill"},alt:{type:String},title:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:z(),onLoad:z(),onError:z()},{n:J,classes:K}=B("image"),O=F({name:"VarImage",directives:{Lazy:$,Ripple:E},props:H,setup(e){return{n:J,classes:K,toSizeUnit:I,handleLoad:r=>{const d=r.currentTarget,{lazy:p,onLoad:f,onError:s}=e;p?(d._lazy.state==="success"&&c(f,r),d._lazy.state==="error"&&c(s,r)):c(f,r)},handleError:r=>{const{lazy:d,onError:p}=e;!d&&c(p,r)},handleClick:r=>{c(e.onClick,r)}}}});const W=["alt","title","lazy-error","lazy-loading"],X=["alt","title","src"];function Y(e,i,L,j,r,d){const p=S("lazy"),f=S("ripple");return k((y(),w("div",{class:_(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:b({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?k((y(),w("img",{key:0,class:_(e.n("image")),alt:e.alt,title:e.title,"lazy-error":e.error,"lazy-loading":e.loading,style:b({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...s)=>e.handleLoad&&e.handleLoad(...s)),onError:i[1]||(i[1]=(...s)=>e.handleError&&e.handleError(...s)),onClick:i[2]||(i[2]=(...s)=>e.handleClick&&e.handleClick(...s))},null,46,W)),[[p,e.src]]):(y(),w("img",{key:1,class:_(e.n("image")),alt:e.alt,title:e.title,style:b({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...s)=>e.handleLoad&&e.handleLoad(...s)),onError:i[4]||(i[4]=(...s)=>e.handleError&&e.handleError(...s)),onClick:i[5]||(i[5]=(...s)=>e.handleClick&&e.handleClick(...s))},null,46,X))],6)),[[f,{disabled:!e.ripple}]])}const o=U(O,[["render",Y]]);o.install=function(e){e.component(o.name,o)};const Z={basicUsage:"基本使用",fitMode:"填充模式",setRadius:"设置圆角",useRipple:"开启水波",useLazyLoad:"开启懒加载"},x={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"},{add:R,use:ee,pack:h,packs:Le,merge:Se}=A(),te=e=>{P(e),ee(e)};N("zh-CN",q);N("en-US",Q);R("zh-CN",Z);R("en-US",x);const v=e=>(D("data-v-b6cd487f"),e=e(),T(),e),ae={class:"image-example-fit-item"},ie=v(()=>l("div",{class:"image-example-margin-bottom"},"fill",-1)),se={class:"image-example-fit-item"},oe=v(()=>l("div",{class:"image-example-margin-bottom"},"cover",-1)),le={class:"image-example-fit-item"},re=v(()=>l("div",{class:"image-example-margin-bottom"},"contain",-1)),ne={class:"image-example-fit-item"},de=v(()=>l("div",{class:"image-example-margin-bottom"},"none",-1)),pe={class:"image-example-fit-item"},ce=v(()=>l("div",{class:"image-example-margin-bottom"},"scale-down",-1)),me={setup(e){return M(te),(i,L)=>(y(),w(V,null,[a(t(u),null,{default:n(()=>[m(g(t(h).basicUsage),1)]),_:1}),a(t(o),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(u),null,{default:n(()=>[m(g(t(h).fitMode),1)]),_:1}),a(t(C),null,{default:n(()=>[l("div",ae,[a(t(o),{width:"22.666vw",height:"22.666vw",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[a(t(o),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",le,[a(t(o),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),re]),l("div",ne,[a(t(o),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),de]),l("div",pe,[a(t(o),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ce])]),_:1}),a(t(u),null,{default:n(()=>[m(g(t(h).setRadius),1)]),_:1}),a(t(C),null,{default:n(()=>[a(t(o),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",class:"image-example-fit-item"}),a(t(o),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),a(t(u),null,{default:n(()=>[m(g(t(h).useRipple),1)]),_:1}),a(t(o),{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(u),null,{default:n(()=>[m(g(t(h).useLazyLoad),1)]),_:1}),a(t(o),{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64))}},ke=U(me,[["__scopeId","data-v-b6cd487f"]]);export{ke as default};
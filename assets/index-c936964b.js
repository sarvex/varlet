import{d as B,c as C,f as H}from"./components-bbfed807.js";import{t as I,o as P,d as R,b as O}from"./elements-b756947f.js";import{d as V,a as o,b as p,w as A,x as D,y as U,o as Z,v as j,Z as q,_ as G,f as J,h as K,M as Q,O as X,N as T,R as $}from"./vue-router.esm-bundler-596ad174.js";const Y={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:B()},{n:_,classes:ee}=C("sticky"),oe=V({name:"VarSticky",props:Y,setup(e){const i=o(null),l=o(null),t=o(!1),r=o("0px"),f=o("0px"),m=o("auto"),b=o("auto"),h=o("auto"),x=o("auto"),k=p(()=>!e.disabled&&e.cssMode),L=p(()=>!e.disabled&&!e.cssMode&&t.value),d=p(()=>I(e.offsetTop));let s;const y=()=>{const{cssMode:n,disabled:W}=e;if(W)return;let c=0;if(s!==window){const{top:z}=s.getBoundingClientRect();c=z}const g=l.value,u=i.value,{top:E,left:N}=u.getBoundingClientRect(),F=E-c;return F<=d.value?(n||(m.value=`${u.offsetWidth}px`,b.value=`${u.offsetHeight}px`,r.value=`${c+d.value}px`,f.value=`${N}px`,h.value=`${g.offsetWidth}px`,x.value=`${g.offsetHeight}px`,t.value=!0),{offsetTop:d.value,isFixed:!0}):(t.value=!1,{offsetTop:F,isFixed:!1})},a=()=>{const n=y();n&&H(e.onScroll,n.offsetTop,n.isFixed)},w=async()=>{t.value=!1,await P(),y()},S=async()=>{await R(),s=O(i.value),s!==window&&s.addEventListener("scroll",a),window.addEventListener("scroll",a),a()},M=()=>{s!==window&&s.removeEventListener("scroll",a),window.removeEventListener("scroll",a)};return A(()=>e.disabled,w),D(S),U(M),Z(S),j(M),{n:_,classes:ee,resize:w,stickyEl:i,wrapperEl:l,isFixed:t,offsetTop:d,fixedTop:r,fixedLeft:f,fixedWidth:m,fixedHeight:b,fixedWrapperWidth:h,fixedWrapperHeight:x,enableCSSMode:k,enableFixedMode:L,toNumber:q}}});function se(e,i,l,t,r,f){return J(),K("div",{class:T(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:$({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[Q("div",{class:T(e.n("wrapper")),ref:"wrapperEl",style:$({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[X(e.$slots,"default")],6)],6)}const v=G(oe,[["render",se]]);v.install=function(e){e.component(v.name,v)};export{v as S,Y as p};
import{d as u,a as l,w as p,aC as c,Z as o,n as f,_ as g,f as d,i as h,N as y,R as z,aD as S}from"./vue-router.esm-bundler.53acc020.js";import{d as k,c as C}from"./components.964f072b.js";import{a as U}from"./elements.86ad7447.js";const N={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:k()},{n:v,classes:$}=C("icon"),L=u({name:"VarIcon",props:N,setup(e){const n=l(""),a=l(!1);return p(()=>e.name,async(s,i)=>{const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await f(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))},{immediate:!0}),{n:v,classes:$,nextName:n,shrinking:a,isURL:c,toNumber:o,toSizeUnit:U}}});function R(e,n,a,m,s,i){return d(),h(S(e.isURL(e.name)?"img":"i"),{class:y(e.classes(e.n(),`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.shrinking,e.n("--shrinking")])),style:z({color:e.color,transition:`transform ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const r=g(L,[["render",R]]);r.install=function(e){e.component(r.name,r)};export{r as I,N as p};
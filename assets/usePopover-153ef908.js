import{d as xt,t as rt}from"./elements-193ac0ca.js";import{b as z}from"./components-fc1cd0bf.js";import{u as Ft}from"./zIndex-08e6dd7d.js";import{a as nt,w as N,o as Ut,v as Yt}from"./vue-router.esm-bundler-d435a56a.js";var zt={left:"right",right:"left",bottom:"top",top:"bottom"};function at(t){return t.replace(/left|right|bottom|top/g,function(e){return zt[e]})}var A="top",T="bottom",V="right",$="left",dt="auto",it=[A,T,V,$],st="start",G="end",It="clippingParents",Lt="viewport",I="popper",qt="reference",Ot=it.reduce(function(t,e){return t.concat([e+"-"+st,e+"-"+G])},[]),Rt=[].concat(it,[dt]).reduce(function(t,e){return t.concat([e,e+"-"+st,e+"-"+G])},[]),_t="beforeRead",Gt="read",Zt="afterRead",Jt="beforeMain",Kt="main",Qt="afterMain",te="beforeWrite",ee="write",re="afterWrite",ne=[_t,Gt,Zt,Jt,Kt,Qt,te,ee,re];function B(t){return t.split("-")[0]}var oe={start:"end",end:"start"};function Et(t){return t.replace(/start|end/g,function(e){return oe[e]})}function S(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function X(t){var e=S(t).Element;return t instanceof e||t instanceof Element}function C(t){var e=S(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function vt(t){if(typeof ShadowRoot>"u")return!1;var e=S(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function W(t){return((X(t)?t.ownerDocument:t.document)||window.document).documentElement}var q=Math.max,kt=Math.min,F=Math.round;function lt(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function At(){return!/^((?!chrome|android).)*safari/i.test(lt())}function U(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,i=1;e&&C(t)&&(o=t.offsetWidth>0&&F(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&F(n.height)/t.offsetHeight||1);var c=X(t)?S(t):window,a=c.visualViewport,s=!At()&&r,l=(n.left+(s&&a?a.offsetLeft:0))/o,f=(n.top+(s&&a?a.offsetTop:0))/i,m=n.width/o,y=n.height/i;return{width:m,height:y,top:f,right:l+m,bottom:f+y,left:l,x:l,y:f}}function ht(t){var e=S(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function gt(t){return U(W(t)).left+ht(t).scrollLeft}function ae(t,e){var r=S(t),n=W(t),o=r.visualViewport,i=n.clientWidth,c=n.clientHeight,a=0,s=0;if(o){i=o.width,c=o.height;var l=At();(l||!l&&e==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:c,x:a+gt(t),y:s}}function D(t){return S(t).getComputedStyle(t)}function ie(t){var e,r=W(t),n=ht(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+gt(t),s=-n.scrollTop;return D(o||r).direction==="rtl"&&(a+=q(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:c,x:a,y:s}}function R(t){return t?(t.nodeName||"").toLowerCase():null}function ft(t){return R(t)==="html"?t:t.assignedSlot||t.parentNode||(vt(t)?t.host:null)||W(t)}function mt(t){var e=D(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Dt(t){return["html","body","#document"].indexOf(R(t))>=0?t.ownerDocument.body:C(t)&&mt(t)?t:Dt(ft(t))}function _(t,e){var r;e===void 0&&(e=[]);var n=Dt(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=S(n),c=o?[i].concat(i.visualViewport||[],mt(n)?n:[]):n,a=e.concat(c);return o?a:a.concat(_(ft(c)))}function se(t){return["table","td","th"].indexOf(R(t))>=0}function Pt(t){return!C(t)||D(t).position==="fixed"?null:t.offsetParent}function fe(t){var e=/firefox/i.test(lt()),r=/Trident/i.test(lt());if(r&&C(t)){var n=D(t);if(n.position==="fixed")return null}var o=ft(t);for(vt(o)&&(o=o.host);C(o)&&["html","body"].indexOf(R(o))<0;){var i=D(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function yt(t){for(var e=S(t),r=Pt(t);r&&se(r)&&D(r).position==="static";)r=Pt(r);return r&&(R(r)==="html"||R(r)==="body"&&D(r).position==="static")?e:r||fe(t)||e}function ce(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&vt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function pt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ue(t,e){var r=U(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Mt(t,e,r){return e===Lt?pt(ae(t,r)):X(e)?ue(e,r):pt(ie(W(t)))}function le(t){var e=_(ft(t)),r=["absolute","fixed"].indexOf(D(t).position)>=0,n=r&&C(t)?yt(t):t;return X(n)?e.filter(function(o){return X(o)&&ce(o,n)&&R(o)!=="body"}):[]}function pe(t,e,r,n){var o=e==="clippingParents"?le(t):[].concat(e),i=[].concat(o,[r]),c=i[0],a=i.reduce(function(s,l){var f=Mt(t,l,n);return s.top=q(f.top,s.top),s.right=kt(f.right,s.right),s.bottom=kt(f.bottom,s.bottom),s.left=q(f.left,s.left),s},Mt(t,c,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Z(t){return t.split("-")[1]}function de(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function $t(t){var e=t.reference,r=t.element,n=t.placement,o=n?B(n):null,i=n?Z(n):null,c=e.x+e.width/2-r.width/2,a=e.y+e.height/2-r.height/2,s;switch(o){case A:s={x:c,y:e.y-r.height};break;case T:s={x:c,y:e.y+e.height};break;case V:s={x:e.x+e.width,y:a};break;case $:s={x:e.x-r.width,y:a};break;default:s={x:e.x,y:e.y}}var l=o?de(o):null;if(l!=null){var f=l==="y"?"height":"width";switch(i){case st:s[l]=s[l]-(e[f]/2-r[f]/2);break;case G:s[l]=s[l]+(e[f]/2-r[f]/2);break}}return s}function ve(){return{top:0,right:0,bottom:0,left:0}}function he(t){return Object.assign({},ve(),t)}function ge(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function Bt(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.strategy,c=i===void 0?t.strategy:i,a=r.boundary,s=a===void 0?It:a,l=r.rootBoundary,f=l===void 0?Lt:l,m=r.elementContext,y=m===void 0?I:m,p=r.altBoundary,w=p===void 0?!1:p,v=r.padding,d=v===void 0?0:v,x=he(typeof d!="number"?d:ge(d,it)),O=y===I?qt:I,b=t.rects.popper,h=t.elements[w?O:y],g=pe(X(h)?h:h.contextElement||W(t.elements.popper),s,f,c),u=U(t.elements.reference),E=$t({reference:u,element:b,strategy:"absolute",placement:o}),j=pt(Object.assign({},b,E)),k=y===I?j:u,P={top:g.top-k.top+x.top,bottom:k.bottom-g.bottom+x.bottom,left:g.left-k.left+x.left,right:k.right-g.right+x.right},L=t.modifiersData.offset;if(y===I&&L){var H=L[o];Object.keys(P).forEach(function(M){var J=[V,T].indexOf(M)>=0?1:-1,K=[A,T].indexOf(M)>=0?"y":"x";P[M]+=H[K]*J})}return P}function me(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,c=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,l=s===void 0?Rt:s,f=Z(n),m=f?a?Ot:Ot.filter(function(w){return Z(w)===f}):it,y=m.filter(function(w){return l.indexOf(w)>=0});y.length===0&&(y=m);var p=y.reduce(function(w,v){return w[v]=Bt(t,{placement:v,boundary:o,rootBoundary:i,padding:c})[B(v)],w},{});return Object.keys(p).sort(function(w,v){return p[w]-p[v]})}function ye(t){if(B(t)===dt)return[];var e=at(t);return[Et(t),e,Et(e)]}function be(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,c=r.altAxis,a=c===void 0?!0:c,s=r.fallbackPlacements,l=r.padding,f=r.boundary,m=r.rootBoundary,y=r.altBoundary,p=r.flipVariations,w=p===void 0?!0:p,v=r.allowedAutoPlacements,d=e.options.placement,x=B(d),O=x===d,b=s||(O||!w?[at(d)]:ye(d)),h=[d].concat(b).reduce(function(et,Y){return et.concat(B(Y)===dt?me(e,{placement:Y,boundary:f,rootBoundary:m,padding:l,flipVariations:w,allowedAutoPlacements:v}):Y)},[]),g=e.rects.reference,u=e.rects.popper,E=new Map,j=!0,k=h[0],P=0;P<h.length;P++){var L=h[P],H=B(L),M=Z(L)===st,J=[A,T].indexOf(H)>=0,K=J?"width":"height",ct=Bt(e,{placement:L,boundary:f,rootBoundary:m,altBoundary:y,padding:l}),Q=J?M?V:$:M?T:A;g[K]>u[K]&&(Q=at(Q));var Tt=at(Q),tt=[];if(i&&tt.push(ct[H]<=0),a&&tt.push(ct[Q]<=0,ct[Tt]<=0),tt.every(function(et){return et})){k=L,j=!1;break}E.set(L,tt)}if(j)for(var Wt=w?3:1,Ht=function(Y){var bt=h.find(function(Vt){var wt=E.get(Vt);if(wt)return wt.slice(0,Y).every(function(Xt){return Xt})});if(bt)return k=bt,"break"},ut=Wt;ut>0;ut--){var Nt=Ht(ut);if(Nt==="break")break}e.placement!==k&&(e.modifiersData[n]._skip=!0,e.placement=k,e.reset=!0)}}const we={name:"flip",enabled:!0,phase:"main",fn:be,requiresIfExists:["offset"],data:{_skip:!1}};function xe(t,e,r){var n=B(t),o=[$,A].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=i[0],a=i[1];return c=c||0,a=(a||0)*o,[$,V].indexOf(n)>=0?{x:a,y:c}:{x:c,y:a}}function Oe(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,c=Rt.reduce(function(f,m){return f[m]=xe(m,e.rects,i),f},{}),a=c[e.placement],s=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=c}const Ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Oe};function ke(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Pe(t){return t===S(t)||!C(t)?ht(t):ke(t)}function Me(t){var e=t.getBoundingClientRect(),r=F(e.width)/t.offsetWidth||1,n=F(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Ce(t,e,r){r===void 0&&(r=!1);var n=C(e),o=C(e)&&Me(e),i=W(e),c=U(t,o,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((R(e)!=="body"||mt(i))&&(a=Pe(e)),C(e)?(s=U(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=gt(i))),{x:c.left+a.scrollLeft-s.x,y:c.top+a.scrollTop-s.y,width:c.width,height:c.height}}function Se(t){var e=U(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function je(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(a){if(!r.has(a)){var s=e.get(a);s&&o(s)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||o(i)}),n}function Le(t){var e=je(t);return ne.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function Re(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Ae(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Ct={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function De(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?Ct:o;return function(a,s,l){l===void 0&&(l=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ct,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},m=[],y=!1,p={state:f,setOptions:function(x){var O=typeof x=="function"?x(f.options):x;v(),f.options=Object.assign({},i,f.options,O),f.scrollParents={reference:X(a)?_(a):a.contextElement?_(a.contextElement):[],popper:_(s)};var b=Le(Ae([].concat(n,f.options.modifiers)));return f.orderedModifiers=b.filter(function(h){return h.enabled}),w(),p.update()},forceUpdate:function(){if(!y){var x=f.elements,O=x.reference,b=x.popper;if(St(O,b)){f.rects={reference:Ce(O,yt(b),f.options.strategy==="fixed"),popper:Se(b)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(P){return f.modifiersData[P.name]=Object.assign({},P.data)});for(var h=0;h<f.orderedModifiers.length;h++){if(f.reset===!0){f.reset=!1,h=-1;continue}var g=f.orderedModifiers[h],u=g.fn,E=g.options,j=E===void 0?{}:E,k=g.name;typeof u=="function"&&(f=u({state:f,options:j,name:k,instance:p})||f)}}}},update:Re(function(){return new Promise(function(d){p.forceUpdate(),d(f)})}),destroy:function(){v(),y=!0}};if(!St(a,s))return p;p.setOptions(l).then(function(d){!y&&l.onFirstUpdate&&l.onFirstUpdate(d)});function w(){f.orderedModifiers.forEach(function(d){var x=d.name,O=d.options,b=O===void 0?{}:O,h=d.effect;if(typeof h=="function"){var g=h({state:f,name:x,instance:p,options:b}),u=function(){};m.push(g||u)}})}function v(){m.forEach(function(d){return d()}),m=[]}return p}}var ot={passive:!0};function $e(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,c=n.resize,a=c===void 0?!0:c,s=S(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(f){f.addEventListener("scroll",r.update,ot)}),a&&s.addEventListener("resize",r.update,ot),function(){i&&l.forEach(function(f){f.removeEventListener("scroll",r.update,ot)}),a&&s.removeEventListener("resize",r.update,ot)}}const Be={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$e,data:{}};function Te(t){var e=t.state,r=t.name;e.modifiersData[r]=$t({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const We={name:"popperOffsets",enabled:!0,phase:"read",fn:Te,data:{}};var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ne(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:F(e*o)/o||0,y:F(r*o)/o||0}}function jt(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,c=t.offsets,a=t.position,s=t.gpuAcceleration,l=t.adaptive,f=t.roundOffsets,m=t.isFixed,y=c.x,p=y===void 0?0:y,w=c.y,v=w===void 0?0:w,d=typeof f=="function"?f({x:p,y:v}):{x:p,y:v};p=d.x,v=d.y;var x=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),b=$,h=A,g=window;if(l){var u=yt(r),E="clientHeight",j="clientWidth";if(u===S(r)&&(u=W(r),D(u).position!=="static"&&a==="absolute"&&(E="scrollHeight",j="scrollWidth")),u=u,o===A||(o===$||o===V)&&i===G){h=T;var k=m&&u===g&&g.visualViewport?g.visualViewport.height:u[E];v-=k-n.height,v*=s?1:-1}if(o===$||(o===A||o===T)&&i===G){b=V;var P=m&&u===g&&g.visualViewport?g.visualViewport.width:u[j];p-=P-n.width,p*=s?1:-1}}var L=Object.assign({position:a},l&&He),H=f===!0?Ne({x:p,y:v}):{x:p,y:v};if(p=H.x,v=H.y,s){var M;return Object.assign({},L,(M={},M[h]=O?"0":"",M[b]=x?"0":"",M.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",M))}return Object.assign({},L,(e={},e[h]=O?v+"px":"",e[b]=x?p+"px":"",e.transform="",e))}function Ve(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,c=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,l={placement:B(e.placement),variation:Z(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,jt(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,jt(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Xe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ve,data:{}};function Fe(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!C(i)||!R(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(c){var a=o[c];a===!1?i.removeAttribute(c):i.setAttribute(c,a===!0?"":a)}))})}function Ue(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),a=c.reduce(function(s,l){return s[l]="",s},{});!C(o)||!R(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(s){o.removeAttribute(s)}))})}}const Ye={name:"applyStyles",enabled:!0,phase:"write",fn:Fe,effect:Ue,requires:["computeStyles"]};var ze=[Be,We,Xe,Ye],Ie=De({defaultModifiers:ze});function Je(t){const e=nt(null),r=nt(null),n=nt(!1),o=nt({width:0,height:0}),{zIndex:i}=Ft(()=>n.value,1);let c=null,a=!1,s=!1,l=!1;const f=()=>{const{width:u,height:E}=window.getComputedStyle(e.value);o.value={width:rt(u),height:rt(E)}},m=()=>{t.trigger==="hover"&&(l=!0,h())},y=async()=>{t.trigger==="hover"&&(l=!1,await xt(),!s&&g())},p=()=>{t.trigger==="hover"&&(s=!0)},w=async()=>{t.trigger==="hover"&&(s=!1,await xt(),!l&&g())},v=()=>{h(),a=!0},d=()=>{if(a){a=!1;return}n.value=!1,z(t["onUpdate:show"],!1)},x=()=>{f();const u={x:rt(t.offsetX),y:rt(t.offsetY)};switch(t.placement){case"cover-top":return{placement:"bottom",skidding:u.x,distance:u.y-o.value.height};case"cover-top-start":return{placement:"bottom-start",skidding:u.x,distance:u.y-o.value.height};case"cover-top-end":return{placement:"bottom-end",skidding:u.x,distance:u.y-o.value.height};case"cover-bottom":return{placement:"top",skidding:u.x,distance:-u.y-o.value.height};case"cover-bottom-start":return{placement:"top-start",skidding:u.x,distance:-u.y-o.value.height};case"cover-bottom-end":return{placement:"top-end",skidding:u.x,distance:-u.y-o.value.height};case"cover-left":return{placement:"right",skidding:u.y,distance:u.x-o.value.width};case"cover-right":return{placement:"left",skidding:u.y,distance:-u.x-o.value.width};case"left":case"left-start":case"left-end":return{placement:t.placement,skidding:u.y,distance:-u.x};case"top":case"top-start":case"top-end":return{placement:t.placement,skidding:u.x,distance:-u.y};case"bottom":case"bottom-start":case"bottom-end":return{placement:t.placement,skidding:u.x,distance:u.y};case"right":case"right-start":case"right-end":return{placement:t.placement,skidding:u.y,distance:u.x}}},O=()=>{const{placement:u,skidding:E,distance:j}=x(),k=[{...we,enabled:n.value},{...Ee,options:{offset:[E,j]}}];return{placement:u,modifiers:k}},b=()=>{c.setOptions(O())},h=()=>{const{disabled:u}=t;u||(n.value=!0,z(t["onUpdate:show"],!0))},g=()=>{n.value=!1,z(t["onUpdate:show"],!1)};return N(()=>t.show,u=>{n.value=u??!1},{immediate:!0}),N(()=>t.offsetX,b),N(()=>t.offsetY,b),N(()=>t.placement,b),N(()=>n.value,u=>{u?(b(),z(t.onOpen)):z(t.onClose)}),N(()=>t.trigger,u=>{u==="click"?document.addEventListener("click",d):document.removeEventListener("click",d)}),N(()=>t.disabled,g),Ut(()=>{c=Ie(e.value,r.value,O()),t.trigger==="click"&&document.addEventListener("click",d)}),Yt(()=>{document.removeEventListener("click",d),c.destroy()}),{show:n,popover:r,zIndex:i,host:e,hostSize:o,handleHostClick:v,handleHostMouseenter:m,handleHostMouseleave:y,handlePopoverClose:d,handlePopoverMouseenter:p,handlePopoverMouseleave:w,resize:b,open:h,close:g}}export{Je as u};

import{dn as N,x as z,y as V,cM as L,A as k,cS as G,c6 as R,b as n,B as h,C as Y,b5 as x,ai as J,cG as K,bv as _,Y as Q,S as P,b8 as X,a3 as Z,a1 as p,j as U,a as ee,F as te,cn as ae,I as ne,c7 as re,ci as se,cz as ie,dc as le,z as oe,cp as ce,cO as ue,cq as ve,cR as de,ck as me,cF as ge,dd as fe,cf as Se,cU as ye}from"./index-SUDDQmPw.js";function _e(e,l){if(!N)return;const r=l.modifiers||{},a=l.value,{handler:u,options:v}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var m;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const d=(m=e._observe)==null?void 0:m[l.instance.$.uid];if(!d)return;const o=s.some(S=>S.isIntersecting);u&&(!r.quiet||d.init)&&(!r.once||o||d.init)&&u(o,s,g),o&&r.once?D(e,l):d.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function D(e,l){var a;const r=(a=e._observe)==null?void 0:a[l.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const be={mounted:_e,unmounted:D},he=be;function ze(e){return{aspectStyles:h(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const W=z({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...L()},"VResponsive"),F=k()({name:"VResponsive",props:W(),setup(e,l){let{slots:r}=l;const{aspectStyles:a}=ze(e),{dimensionStyles:u}=G(e);return R(()=>{var v;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[u.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(v=r.additional)==null?void 0:v.call(r),r.default&&n("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Ie=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,l)=>{let{slots:r}=l;const{transition:a,disabled:u,...v}=e,{component:i=J,...s}=typeof a=="object"?a:{};return Y(i,x(typeof a=="string"?{name:u?"":a}:s,v,{disabled:u}),r)},Pe=z({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...W(),...V(),...Ie()},"VImg"),Ve=k()({name:"VImg",directives:{intersect:he},props:Pe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:r,slots:a}=l;const u=K("VImg"),v=_(""),i=Q(),s=_(e.eager?"loading":"idle"),g=_(),d=_(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>o.value.aspect||g.value/d.value||0);P(()=>e.src,()=>{S(s.value!=="idle")}),P(m,(t,c)=>{!t&&c&&i.value&&y(i.value)}),X(()=>S());function S(t){if(!(e.eager&&t)&&!(N&&!t&&!e.eager)){if(s.value="loading",o.value.lazySrc){const c=new Image;c.src=o.value.lazySrc,y(c,null)}o.value.src&&Z(()=>{var c;r("loadstart",((c=i.value)==null?void 0:c.currentSrc)||o.value.src),setTimeout(()=>{var f;if(!u.isUnmounted)if((f=i.value)!=null&&f.complete){if(i.value.naturalWidth||C(),s.value==="error")return;m.value||y(i.value,null),s.value==="loading"&&T()}else m.value||y(i.value),B()})})}}function T(){var t;u.isUnmounted||(B(),y(i.value),s.value="loaded",r("load",((t=i.value)==null?void 0:t.currentSrc)||o.value.src))}function C(){var t;u.isUnmounted||(s.value="error",r("error",((t=i.value)==null?void 0:t.currentSrc)||o.value.src))}function B(){const t=i.value;t&&(v.value=t.currentSrc||t.src)}let I=-1;p(()=>{clearTimeout(I)});function y(t){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{if(clearTimeout(I),u.isUnmounted)return;const{naturalHeight:O,naturalWidth:A}=t;O||A?(g.value=A,d.value=O):!t.complete&&s.value==="loading"&&c!=null?I=window.setTimeout(f,c):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,d.value=1)};f()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),$=()=>{var f;if(!o.value.src||s.value==="idle")return null;const t=n("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:T,onError:C},null),c=(f=a.sources)==null?void 0:f.call(a);return n(b,{transition:e.transition,appear:!0},{default:()=>[U(c?n("picture",{class:"v-img__picture"},[c,t]):t,[[ne,s.value==="loaded"]])]})},M=()=>n(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&s.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),q=()=>a.placeholder?n(b,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,E=()=>a.error?n(b,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,H=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=_(!1);{const t=P(m,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return R(()=>{const t=F.filterProps(e);return U(n(F,x({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:ae(e.width==="auto"?g.value:e.width)},e.style]},t,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(te,null,[n($,null,null),n(M,null,null),n(H,null,null),n(q,null,null),n(E,null,null)]),default:a.default}),[[ee("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:i,state:s,naturalWidth:g,naturalHeight:d}}}),ke=z({start:Boolean,end:Boolean,icon:re,image:String,text:String,...V(),...se(),...ie(),...le(),...oe(),...ce(),...ue({variant:"flat"})},"VAvatar"),Te=k()({name:"VAvatar",props:ke(),setup(e,l){let{slots:r}=l;const{themeClasses:a}=ve(e),{colorClasses:u,colorStyles:v,variantClasses:i}=de(e),{densityClasses:s}=me(e),{roundedClasses:g}=ge(e),{sizeClasses:d,sizeStyles:o}=fe(e);return R(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,u.value,s.value,g.value,d.value,i.value,e.class],style:[v.value,o.value,e.style]},{default:()=>{var m;return[e.image?n(Ve,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Se,{key:"icon",icon:e.icon},null):((m=r.default)==null?void 0:m.call(r))??e.text,ye(!1,"v-avatar")]}})),{}}});export{he as I,b as M,Te as V,Ve as a,Ie as m};

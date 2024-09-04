import{dA as x,H as k,L as X,Q as E,at as Y,as as Z,I as R,cM as p,K as T,cS as ee,O as B,j as n,c as P,cA as H,cv as te,bK as ae,cG as M,cH as ne,bD as h,r as re,w as C,bg as se,a2 as ie,ac as le,g as F,s as oe,F as ue,ci as ce,y as ve,T as de,cL as ge,ct as me,dq as fe,J as ye,cn as Se,cO as be,co as _e,cQ as he,cR as Ve,cu as Pe,dr as ke,cV as Ie,cJ as ze,cU as Ce}from"./index-bUaC_4Uu.js";function Re(e,l){if(!x)return;const s=l.modifiers||{},t=l.value,{handler:v,options:d}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var u;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(u=e._observe)==null?void 0:u[l.instance.$.uid];if(!r)return;const i=g.some(S=>S.isIntersecting);v&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&v(i,g,f),i&&s.once?$(e,l):r.init=!0},d);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:m},m.observe(e)}function $(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Te={mounted:Re,unmounted:$},Be=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),V=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:v,group:d,...m}=e,{component:g=d?Y:Z,...f}=typeof t=="object"?t:{};return X(g,E(typeof t=="string"?{name:v?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:v,group:d}).filter(r=>{let[i,u]=r;return u!==void 0})),m),s)};function je(e){return{aspectStyles:P(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const q=k({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...p()},"VResponsive"),W=T()({name:"VResponsive",props:q(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=je(e),{dimensionStyles:v}=ee(e);return B(()=>{var d;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(d=s.additional)==null?void 0:d.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),we=k({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...q(),...R(),...H(),...Be()},"VImg"),Oe=T()({name:"VImg",directives:{intersect:Te},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:v,backgroundColorStyles:d}=te(ae(e,"color")),{roundedClasses:m}=M(e),g=ne("VImg"),f=h(""),r=re(),i=h(e.eager?"loading":"idle"),u=h(),S=h(),c=P(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=P(()=>c.value.aspect||u.value/S.value||0);C(()=>e.src,()=>{I(i.value!=="idle")}),C(b,(a,o)=>{!a&&o&&r.value&&_(r.value)}),se(()=>I());function I(a){if(!(e.eager&&a)&&!(x&&!a&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&ie(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!g.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||w(),i.value==="error")return;b.value||_(r.value,null),i.value==="loading"&&j()}else b.value||_(r.value),O()})})}}function j(){var a;g.isUnmounted||(O(),_(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function w(){var a;g.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let z=-1;le(()=>{clearTimeout(z)});function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(z),g.isUnmounted)return;const{naturalHeight:U,naturalWidth:N}=a;U||N?(u.value=N,S.value=U):!a.complete&&i.value==="loading"&&o!=null?z=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,S.value=1)};y()}const A=P(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var y;if(!c.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",A.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:j,onError:w},null),o=(y=t.sources)==null?void 0:y.call(t);return n(V,{transition:e.transition,appear:!0},{default:()=>[F(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[ve,i.value==="loaded"]])]})},G=()=>n(V,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",A.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>t.placeholder?n(V,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?n(V,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=h(!1);{const a=C(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),a())})}return B(()=>{const a=W.filterProps(e);return F(n(W,E({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!D.value},v.value,m.value,e.class],style:[{width:ce(e.width==="auto"?u.value:e.width)},d.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ue,null,[n(L,null,null),n(G,null,null),n(Q,null,null),n(J,null,null),n(K,null,null)]),default:t.default}),[[oe("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:u,naturalHeight:S}}}),Ae=k({start:Boolean,end:Boolean,icon:de,image:String,text:String,...ge(),...R(),...me(),...H(),...fe(),...ye(),...Se(),...be({variant:"flat"})},"VAvatar"),Ue=T()({name:"VAvatar",props:Ae(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=_e(e),{borderClasses:v}=he(e),{colorClasses:d,colorStyles:m,variantClasses:g}=Ve(e),{densityClasses:f}=Pe(e),{roundedClasses:r}=M(e),{sizeClasses:i,sizeStyles:u}=ke(e);return B(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,d.value,f.value,r.value,i.value,g.value,e.class],style:[m.value,u.value,e.style]},{default:()=>[s.default?n(ze,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(Oe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Ie,{key:"icon",icon:e.icon},null):e.text,Ce(!1,"v-avatar")]})),{}}});export{Te as I,V as M,Ue as V,Oe as a,Be as m};
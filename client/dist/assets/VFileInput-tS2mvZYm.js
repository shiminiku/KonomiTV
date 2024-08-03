import{m as X,c as Y,u as Z,d as B,e as ee,g as le,h as te,f as ne}from"./VTextField-DtNUTtmI.js";import{z as ae,cn as D,C as ue,ch as oe,c8 as ie,D as s,co as $,$ as h,W as se,c6 as re,cp as ce,b as u,b6 as C,F as g,a5 as de,cq as fe}from"./index-ppLoTZ5a.js";import{c as ve}from"./VSwitch-mqf8aoKZ.js";const me=ae({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...X({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>D(e).every(f=>f!=null&&typeof f=="object")},...Y({clearable:!0})},"VFileInput"),ge=ue()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:M,emit:V,slots:n}=f;const{t:k}=oe(),a=ie(e,"modelValue",e.modelValue,l=>D(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]),{isFocused:v,focus:N,blur:x}=Z(e),b=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),F=s(()=>$(I.value,b.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${$(r,b.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,F.value):k(e.counterString,l)}),S=h(),P=h(),o=h(),E=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;o.value!==document.activeElement&&((l=o.value)==null||l.focus()),v.value||N()}function O(l){var t;(t=o.value)==null||t.click()}function U(l){V("mousedown:control",l)}function q(l){var t;(t=o.value)==null||t.click(),V("click:control",l)}function L(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&o.value&&(o.value.value="")}),re(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,T]=ce(M),{modelValue:pe,...W}=B.filterProps(e),_=ee(e);return u(B,C({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":O},r,W,{centerAffix:!z.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:w,isValid:G}=c;return u(le,C({ref:P,"prepend-icon":e.prependIcon,onMousedown:U,onClick:q,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:m.value,active:E.value||A.value,dirty:A.value,disabled:d.value,focused:v.value,error:G.value===!1}),{...n,default:H=>{var R;let{props:{class:J,...K}}=H;return u(g,null,[u("input",C({ref:o,type:"file",readonly:w.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:i=>{i.stopPropagation(),w.value&&i.preventDefault(),y()},onChange:i=>{if(!i.target)return;const Q=i.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:x},K,T),null),u("div",{class:J},[!!((R=a.value)!=null&&R.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:I.value,totalBytesReadable:F.value}):e.chips?p.value.map(i=>u(ve,{key:i,size:"small",text:i},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(g,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(g,null,[u("span",null,null),u(te,{active:!!((d=a.value)!=null&&d.length),value:j.value},n.counter)])])}:void 0})}),ne({},S,P,o)}});export{ge as V};
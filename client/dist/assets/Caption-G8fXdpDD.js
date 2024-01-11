import{d as c,U as B,m as E,u as A,_ as g,r as a,o as _,h as d,w as r,e as u,j as C,b as i,n as F,i as o,R as D}from"./index-SUDDQmPw.js";import{S as h}from"./Base-LBE-TnbD.js";import{c as f}from"./VSelect-xL5APGe1.js";import{V as n}from"./VSwitch-Dag3dhXV.js";import{V as b}from"./VSlider-I7cZcgN2.js";import{V as w}from"./VTextField-mOMDtq3p.js";import"./Navigation-caElVatk.js";import"./ssrBoot-fYssunmN.js";import"./VAvatar-h7qeIkVg.js";const V=c({name:"Settings-Caption",components:{SettingsBase:h},data(){return{is_form_dense:B.isSmartphoneHorizontal(),caption_font:[{title:"Windows TV ゴシック",value:"Windows TV Gothic"},{title:"Windows TV 丸ゴシック",value:"Windows TV MaruGothic"},{title:"Windows TV 太丸ゴシック",value:"Windows TV FutoMaruGothic"},{title:"ヒラギノTV丸ゴ",value:"Hiragino TV Sans Rd S"},{title:"新丸ゴ ARIB",value:"TT-ShinMGo-regular"},{title:"Rounded M+ 1m for ARIB",value:"Rounded M+ 1m for ARIB"},{title:"Noto Sans JP",value:"Noto Sans JP"},{title:"デフォルトのフォント",value:"sans-serif"}]}},computed:{...E(A)}}),S={class:"settings__heading"},y=u("span",{class:"ml-3"},"字幕",-1),v={class:"settings__content"},T={class:"settings__item"},R=u("label",{class:"settings__item-heading"},"字幕のフォント",-1),U=u("label",{class:"settings__item-label"},[o(" プレイヤーで字幕表示をオンにしているときの、字幕のフォントを設定します。"),u("br")],-1),N={class:"settings__item settings__item--switch"},k=u("label",{class:"settings__item-heading",for:"always_border_caption_text"},"字幕の文字を常に縁取りする",-1),W=u("label",{class:"settings__item-label",for:"always_border_caption_text"},[o(" この設定をオンにすると、字幕の文字が縁取りされてより見やすくなります。とくに理由がなければ、オンにしておくのがおすすめです。"),u("br"),o(" この設定がオフのときも、字幕データから明示的に縁取りが指定されている場合は、オンのときと同様に字幕の文字が縁取りされます。"),u("br")],-1),I={class:"settings__item settings__item--switch"},M=u("label",{class:"settings__item-heading",for:"specify_caption_opacity"},"字幕の不透明度を指定する",-1),G=u("label",{class:"settings__item-label",for:"specify_caption_opacity"},[o(" 字幕表示時、不透明度を自分で指定するか設定できます。"),u("br"),o(" この設定がオフのときは、字幕データから指定されている不透明度で描画します。とくに理由がなければ、オフにしておくのがおすすめです。"),u("br")],-1),H=u("label",{class:"settings__item-heading"},"字幕の不透明度",-1),$=u("label",{class:"settings__item-label"},[o(" 上の [字幕の不透明度を指定する] をオンに設定したときのみ有効です。不透明度を 0 に設定すれば、字幕の背景を非表示にできます。"),u("br")],-1),z={class:"settings__item-label",ref:"caption_opacity"},J={class:"settings__item settings__item--switch"},K=u("label",{class:"settings__item-heading",for:"tv_show_superimpose"},"テレビをみるときに文字スーパーを表示する",-1),P=u("label",{class:"settings__item-label",for:"tv_show_superimpose"},[o(" 文字スーパーは、緊急地震速報の赤テロップや、NHK BS のニュース速報のテロップなどで利用されています。とくに理由がなければ、オンにしておくのがおすすめです。"),u("br")],-1),j={class:"settings__item settings__item--switch"},q=u("label",{class:"settings__item-heading",for:"video_show_superimpose"},"ビデオをみるときに文字スーパーを表示する",-1),L=u("label",{class:"settings__item-label",for:"video_show_superimpose"},[o(" 文字スーパーは、緊急地震速報の赤テロップや、NHK BS のニュース速報のテロップなどで利用されています。録画当時の文字スーパーによるニュース速報を確認したい方以外は、オフにしておくのがおすすめです。"),u("br")],-1);function O(t,s,Q,X,Y,Z){const l=a("Icon"),m=a("router-link"),p=a("SettingsBase");return _(),d(p,null,{default:r(()=>[u("h2",S,[C((_(),d(m,{class:"settings__back-button",to:"/settings/"},{default:r(()=>[i(l,{icon:"fluent:arrow-left-12-filled",width:"25px"})]),_:1})),[[D]]),i(l,{icon:"fluent:subtitles-16-filled",width:"25px"}),y]),u("div",v,[u("div",T,[R,U,i(f,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:t.is_form_dense?"compact":"default",items:t.caption_font,modelValue:t.settingsStore.settings.caption_font,"onUpdate:modelValue":s[0]||(s[0]=e=>t.settingsStore.settings.caption_font=e)},null,8,["density","items","modelValue"])]),u("div",N,[k,W,i(n,{class:"settings__item-switch",color:"primary",id:"always_border_caption_text","hide-details":"",modelValue:t.settingsStore.settings.always_border_caption_text,"onUpdate:modelValue":s[1]||(s[1]=e=>t.settingsStore.settings.always_border_caption_text=e)},null,8,["modelValue"])]),u("div",I,[M,G,i(n,{class:"settings__item-switch",color:"primary",id:"specify_caption_opacity","hide-details":"",modelValue:t.settingsStore.settings.specify_caption_opacity,"onUpdate:modelValue":s[2]||(s[2]=e=>t.settingsStore.settings.specify_caption_opacity=e)},null,8,["modelValue"])]),u("div",{class:F(["settings__item",{"settings__item--disabled":t.settingsStore.settings.specify_caption_opacity===!1}])},[H,$,u("div",z,[i(b,{class:"settings__item-form",color:"primary","show-ticks":"always","thumb-label":"","hide-details":"",min:0,max:1,step:.05,modelValue:t.settingsStore.settings.caption_opacity,"onUpdate:modelValue":s[3]||(s[3]=e=>t.settingsStore.settings.caption_opacity=e),disabled:t.settingsStore.settings.specify_caption_opacity===!1},null,8,["modelValue","disabled"])],512)],2),i(w,{class:"mt-6"}),u("div",J,[K,P,i(n,{class:"settings__item-switch",color:"primary",id:"tv_show_superimpose","hide-details":"",modelValue:t.settingsStore.settings.tv_show_superimpose,"onUpdate:modelValue":s[4]||(s[4]=e=>t.settingsStore.settings.tv_show_superimpose=e)},null,8,["modelValue"])]),u("div",j,[q,L,i(n,{class:"settings__item-switch",color:"primary",id:"video_show_superimpose","hide-details":"",modelValue:t.settingsStore.settings.video_show_superimpose,"onUpdate:modelValue":s[5]||(s[5]=e=>t.settingsStore.settings.video_show_superimpose=e)},null,8,["modelValue"])])])]),_:1})}const lu=g(V,[["render",O]]);export{lu as default};

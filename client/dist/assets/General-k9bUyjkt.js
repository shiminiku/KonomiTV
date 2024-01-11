import{d as b,U as B,m as V,u as S,_ as y,r as _,o as d,h as p,w as o,b as s,j as E,c as m,e as u,l as h,i as n,t as F,R as A,p as q,q as U,M as r,V as C}from"./index-SUDDQmPw.js";import{d as j}from"./vuedraggable.umd-U_CFLB_7.js";import{u as I}from"./ChannelsStore-XJFDixUF.js";import{V as O}from"./VDialog-mAazY9BP.js";import{V as P,a as M}from"./VCard-KVkL_VOy.js";import{V as Z}from"./ssrBoot-fYssunmN.js";import{S as H}from"./Base-LBE-TnbD.js";import{V as N}from"./VSwitch-Dag3dhXV.js";import{V as f}from"./VTextField-mOMDtq3p.js";import{c as g}from"./VSelect-xL5APGe1.js";import{V as K}from"./VFileInput-ThhsCUZL.js";import"./VAvatar-h7qeIkVg.js";import"./Navigation-caElVatk.js";const R=b({name:"PinnedChannelSettings",components:{draggable:j},props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":e=>!0},data(){return{Utils:Object.freeze(B),pinned_channel_settings_modal:!1,pinned_channels:[]}},computed:{...V(I,S)},watch:{modelValue(){this.pinned_channel_settings_modal=this.modelValue},pinned_channel_settings_modal(){this.$emit("update:modelValue",this.pinned_channel_settings_modal)},pinned_channels(){this.settingsStore.settings.pinned_channel_ids=this.pinned_channels.map(e=>e.id)}},async created(){await this.channelsStore.update(),this.pinned_channels=this.channelsStore.channels_list_with_pinned.get("ピン留め")??[]}}),c=e=>(q("data-v-81b72fa2"),e=e(),U(),e),z=c(()=>u("span",{class:"ml-3"},"ピン留め中チャンネルの並び替え",-1)),G={class:"px-5 pb-6"},J={key:0,class:"pinned-channels-settings__label"},L=c(()=>u("div",null,"各チャンネルのつまみをドラッグして並べ替えできます。",-1)),Q=[L],W={key:1,class:"pinned-channels-settings__label"},X=c(()=>u("div",null,[u("b",null,"ピン留めされているチャンネルがありません。")],-1)),Y={class:"mt-1"},x={class:"pinned-channel"},uu=["src"],eu={class:"pinned-channel__name"},tu=c(()=>u("button",{class:"pinned-channel__sort-handle"},[u("svg",{class:"iconify iconify--material-symbols",width:"20px",height:"20px",viewBox:"0 0 24 24"},[u("path",{fill:"currentColor",d:"M5 15q-.425 0-.713-.288T4 14q0-.425.288-.713T5 13h14q.425 0 .713.288T20 14q0 .425-.288.713T19 15H5Zm0-4q-.425 0-.713-.288T4 10q0-.425.288-.713T5 9h14q.425 0 .713.288T20 10q0 .425-.288.713T19 11H5Z"})])],-1)),su=["onClick"],nu=c(()=>u("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[u("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)),iu=[nu];function lu(e,t,w,$,k,T){const a=_("Icon"),D=_("draggable");return d(),p(O,{"max-width":"550",transition:"slide-y-transition",modelValue:e.pinned_channel_settings_modal,"onUpdate:modelValue":t[2]||(t[2]=l=>e.pinned_channel_settings_modal=l)},{default:o(()=>[s(M,{class:"pinned-channels-settings"},{default:o(()=>[s(P,{class:"px-5 pt-6 pb-3 d-flex align-center font-weight-bold",style:{height:"60px"}},{default:o(()=>[s(a,{icon:"iconamoon:sorting-left-bold",height:"26px"}),z,s(Z),E((d(),m("div",{class:"d-flex align-center rounded-circle cursor-pointer px-2 py-2",onClick:t[0]||(t[0]=l=>e.pinned_channel_settings_modal=!1)},[s(a,{icon:"fluent:dismiss-12-filled",width:"23px",height:"23px"})])),[[A]])]),_:1}),u("div",G,[(e.channelsStore.channels_list_with_pinned.get("ピン留め")??[]).length>0?(d(),m("div",J,Q)):h("",!0),(e.channelsStore.channels_list_with_pinned.get("ピン留め")??[]).length===0?(d(),m("div",W,[X,u("div",Y,[n("TV ホーム画面のチャンネルリストの "),s(a,{style:{position:"relative",bottom:"-5px"},icon:"fluent:pin-20-filled",width:"18.5px"}),n(" アイコンから、よくみるチャンネルをピン留めできます。")])])):h("",!0),e.pinned_channels.length>0?(d(),p(D,{key:2,class:"pinned-channels",handle:".pinned-channel__sort-handle","item-key":"id",modelValue:e.pinned_channels,"onUpdate:modelValue":t[1]||(t[1]=l=>e.pinned_channels=l)},{item:o(({element:l})=>[u("div",x,[u("img",{class:"pinned-channel__icon",src:`${e.Utils.api_base_url}/channels/${l.id}/logo`},null,8,uu),u("span",eu,"Ch: "+F(l.channel_number)+" "+F(l.name),1),tu,E((d(),m("button",{class:"pinned-channel__delete-button",onClick:v=>e.pinned_channels=e.pinned_channels.filter(i=>i.id!==l.id)},iu,8,su)),[[A]])])]),_:1},8,["modelValue"])):h("",!0)])]),_:1})]),_:1},8,["modelValue"])}const au=y(R,[["render",lu],["__scopeId","data-v-81b72fa2"]]),ou=b({name:"Settings-General",components:{PinnedChannelSettings:au,SettingsBase:H},data(){return{Utils:Object.freeze(B),is_form_dense:B.isSmartphoneHorizontal(),pinned_channel_settings_modal:!1,panel_display_state:[{title:"前回の状態を復元する",value:"RestorePreviousState"},{title:"常に表示する",value:"AlwaysDisplay"},{title:"常に折りたたむ",value:"AlwaysFold"}],tv_panel_active_tab:[{title:"番組情報タブ",value:"Program"},{title:"チャンネルタブ",value:"Channel"},{title:"コメントタブ",value:"Comment"},{title:"Twitter タブ",value:"Twitter"}],video_panel_active_tab:[{title:"番組情報タブ",value:"RecordedProgram"},{title:"シリーズタブ",value:"Series"},{title:"コメントタブ",value:"Comment"},{title:"Twitter タブ",value:"Twitter"}],import_settings_file:[]}},computed:{...V(S)},methods:{exportSettings(){const e=JSON.stringify(this.settingsStore.settings,null,4),t=new Blob([e],{type:"application/json"});B.downloadBlobData(t,"KonomiTV-Settings.json"),r.success("設定をエクスポートしました。")},async importSettings(){if(this.import_settings_file.length===0){r.error("インポートする設定データを選択してください！");return}await this.settingsStore.importClientSettings(this.import_settings_file[0])===!0?(r.success("設定をインポートしました。"),window.setTimeout(()=>this.$router.go(0),300)):r.error("設定データが不正なため、インポートできませんでした。")},async resetSettings(){await this.settingsStore.resetClientSettings(),r.success("設定をリセットしました。"),window.setTimeout(()=>this.$router.go(0),300)}}}),du={class:"settings__heading"},_u=u("span",{class:"ml-3"},"全般",-1),ru={class:"settings__content"},cu=u("div",{class:"settings__item"},[u("div",{class:"settings__item-heading"},"ピン留め中チャンネルの並び替え"),u("div",{class:"settings__item-label"},[n(" ピン留め中のチャンネルの表示順序を変更できます。よくみるチャンネルは先頭に配置しておくと便利です。"),u("br"),n(" ピン留め中のチャンネルの追加・削除は、別途 TV ホーム画面のチャンネルリストから行えます。"),u("br")])],-1),mu=u("span",{class:"ml-1"},"ピン留め中チャンネルの並び替え設定を開く",-1),Cu={class:"settings__item settings__item--switch"},Bu={class:"settings__item-heading",for:"tv_channel_selection_requires_alt_key"},pu={class:"settings__item-label",for:"tv_channel_selection_requires_alt_key"},Fu=u("br",null,null,-1),Du=u("br",null,null,-1),hu={class:"settings__item"},gu=u("div",{class:"settings__item-heading"},"デフォルトのパネルの表示状態",-1),Eu=u("div",{class:"settings__item-label"},[n(" 視聴画面を開いたときに、右側のパネルをどう表示するかを設定します。"),u("br")],-1),Au={class:"settings__item"},vu=u("div",{class:"settings__item-heading"},"テレビをみるときにデフォルトで表示されるパネルのタブ",-1),fu=u("div",{class:"settings__item-label"},[n(" テレビの視聴画面を開いたときに、右側のパネルで最初に表示されるタブを設定します。"),u("br")],-1),bu={class:"settings__item"},Vu=u("div",{class:"settings__item-heading"},"ビデオをみるときにデフォルトで表示されるパネルのタブ",-1),Su=u("div",{class:"settings__item-label"},[n(" ビデオの視聴画面を開いたときに、右側のパネルで最初に表示されるタブを設定します。"),u("br")],-1),yu=u("div",{class:"settings__item"},[u("div",{class:"settings__item-heading"},"設定をエクスポート"),u("div",{class:"settings__item-label"},[n(" このデバイス（ブラウザ）に保存されている設定データを、エクスポート（ダウンロード）できます。"),u("br"),n(" ダウンロードした設定データ (KonomiTV-Settings.json) は、[設定をインポート] からインポートできます。異なるサーバーの KonomiTV を同じ設定で使いたいときなどに使ってください。"),u("br")])],-1),wu={class:"settings__item"},$u=u("div",{class:"settings__item-heading text-error-lighten-1"},"設定をインポート",-1),ku=u("div",{class:"settings__item-label"},[n(" [設定をエクスポート] でダウンロードした設定データを、このデバイス（ブラウザ）にインポートできます。"),u("br"),n(" 設定をインポートすると、"),u("b",null,"現在のデバイス設定はすべて上書きされます。"),n("元に戻すことはできません。"),u("br"),n(" 設定のデバイス間同期がオンのときは、"),u("b",null,"同期が有効なすべてのデバイスに反映されます。"),n("十分ご注意ください。"),u("br")],-1),Tu=u("div",{class:"settings__item"},[u("div",{class:"settings__item-heading text-error-lighten-1"},"設定を初期状態にリセット"),u("div",{class:"settings__item-label"},[n(" このデバイス（ブラウザ）に保存されている設定データを、初期状態のデフォルト値にリセットできます。"),u("br"),n(" 設定をリセットすると、元に戻すことはできません。"),u("br"),n(" 設定のデバイス間同期がオンのときは、"),u("b",null,"同期が有効なすべてのデバイスに反映されます。"),n("十分ご注意ください。"),u("br")])],-1);function qu(e,t,w,$,k,T){const a=_("Icon"),D=_("router-link"),l=_("PinnedChannelSettings"),v=_("SettingsBase");return d(),p(v,null,{default:o(()=>[u("h2",du,[E((d(),p(D,{class:"settings__back-button",to:"/settings/"},{default:o(()=>[s(a,{icon:"fluent:arrow-left-12-filled",width:"25px"})]),_:1})),[[A]]),s(a,{icon:"fa-solid:sliders-h",width:"19px",style:{margin:"0 4px"}}),_u]),u("div",ru,[cu,s(C,{class:"settings__save-button mt-4",variant:"flat",onClick:t[0]||(t[0]=i=>e.pinned_channel_settings_modal=!e.pinned_channel_settings_modal)},{default:o(()=>[s(a,{icon:"iconamoon:sorting-left-bold",height:"19px"}),mu]),_:1}),u("div",Cu,[u("label",Bu,"チャンネル選局のキーボードショートカットを "+F(e.Utils.AltOrOption())+" + 数字キー/テンキーに変更する",1),u("label",pu,[n(" この設定をオンにすると、数字キーまたはテンキーに対応するリモコン番号（1～12）のチャンネルに切り替える際、"+F(e.Utils.AltOrOption())+" キーを同時に押す必要があります。",1),Fu,n(" コメントやツイートを入力しようとして誤って数字キーを押してしまい、チャンネルが変わってしまう事態を避けたい方におすすめです。"),Du]),s(N,{class:"settings__item-switch",color:"primary",id:"tv_channel_selection_requires_alt_key","hide-details":"",modelValue:e.settingsStore.settings.tv_channel_selection_requires_alt_key,"onUpdate:modelValue":t[1]||(t[1]=i=>e.settingsStore.settings.tv_channel_selection_requires_alt_key=i)},null,8,["modelValue"])]),s(f,{class:"mt-6"}),u("div",hu,[gu,Eu,s(g,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.panel_display_state,modelValue:e.settingsStore.settings.panel_display_state,"onUpdate:modelValue":t[2]||(t[2]=i=>e.settingsStore.settings.panel_display_state=i)},null,8,["density","items","modelValue"])]),u("div",Au,[vu,fu,s(g,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.tv_panel_active_tab,modelValue:e.settingsStore.settings.tv_panel_active_tab,"onUpdate:modelValue":t[3]||(t[3]=i=>e.settingsStore.settings.tv_panel_active_tab=i)},null,8,["density","items","modelValue"])]),u("div",bu,[Vu,Su,s(g,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.video_panel_active_tab,modelValue:e.settingsStore.settings.video_panel_active_tab,"onUpdate:modelValue":t[4]||(t[4]=i=>e.settingsStore.settings.video_panel_active_tab=i)},null,8,["density","items","modelValue"])]),s(f,{class:"mt-6"}),yu,s(C,{class:"settings__save-button mt-4",variant:"flat",onClick:t[5]||(t[5]=i=>e.exportSettings())},{default:o(()=>[s(a,{icon:"fa6-solid:download",class:"mr-3",height:"19px"}),n("設定をエクスポート ")]),_:1}),u("div",wu,[$u,ku,s(K,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"設定データ (KonomiTV-Settings.json) を選択",density:e.is_form_dense?"compact":"default",accept:"application/json","prepend-icon":"","prepend-inner-icon":"mdi-paperclip",modelValue:e.import_settings_file,"onUpdate:modelValue":t[6]||(t[6]=i=>e.import_settings_file=i)},null,8,["density","modelValue"])]),s(C,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:t[7]||(t[7]=i=>e.importSettings())},{default:o(()=>[s(a,{icon:"fa6-solid:upload",class:"mr-3",height:"19px"}),n("設定をインポート ")]),_:1}),Tu,s(C,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:t[8]||(t[8]=i=>e.resetSettings())},{default:o(()=>[s(a,{icon:"material-symbols:device-reset-rounded",class:"mr-2",height:"23px"}),n("設定をリセット ")]),_:1})]),s(l,{modelValue:e.pinned_channel_settings_modal,"onUpdate:modelValue":t[9]||(t[9]=i=>e.pinned_channel_settings_modal=i)},null,8,["modelValue"])]),_:1})}const Ju=y(ou,[["render",qu]]);export{Ju as default};

import{d as h,m as c,U as B,u as y,_ as V,k as E,h as o,a as s,b as e,w as v,r as _,c as C,e as g,l as n,t as F,o as r,R as b,M as d,V as m}from"./index-CYWMZUuQ.js";import{d as U}from"./vuedraggable.umd-BKhtNSKf.js";import{u as q}from"./ChannelsStore-vPFdc9el.js";import{V as j,a as O}from"./VCard-DDKqZHSy.js";import{V as P}from"./ssrBoot-KQceIYXz.js";import{V as I}from"./VDialog-mKBQo0b-.js";import{S as M}from"./Base-Cqvjydi3.js";import{V as D}from"./VSwitch-DlVOjzbP.js";import{b as f}from"./VTextField-BtpigOdW.js";import{d as A}from"./VSelect-BuOQm5N4.js";import{V as Z}from"./VFileInput-BAGesFr7.js";import"./VAvatar-O5Mngihm.js";import"./VChip-DPUqQDlw.js";import"./Navigation-_lN4rKee.js";const H=h({name:"PinnedChannelSettings",components:{draggable:U},props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":t=>!0},data(){return{Utils:Object.freeze(B),pinned_channel_settings_modal:!1,pinned_channels:[]}},computed:{...c(q,y)},watch:{modelValue(){this.pinned_channel_settings_modal=this.modelValue},pinned_channel_settings_modal(){this.$emit("update:modelValue",this.pinned_channel_settings_modal)},pinned_channels(){this.settingsStore.settings.pinned_channel_ids=this.pinned_channels.map(t=>t.id)}},async created(){await this.channelsStore.update(),this.pinned_channels=this.channelsStore.channels_list_with_pinned.get("ピン留め")??[]}}),N={class:"px-5 pb-6"},z={key:0,class:"pinned-channels-settings__label"},K={key:1,class:"pinned-channels-settings__label"},R={class:"mt-1"},G={class:"pinned-channel"},L=["src"],J={class:"pinned-channel__name"},Q=["onClick"];function W(t,u,S,w,k,$){const a=_("Icon"),p=_("draggable");return r(),E(I,{"max-width":"550",transition:"slide-y-transition",modelValue:t.pinned_channel_settings_modal,"onUpdate:modelValue":u[2]||(u[2]=l=>t.pinned_channel_settings_modal=l)},{default:o(()=>[s(O,{class:"pinned-channels-settings"},{default:o(()=>[s(j,{class:"px-5 pt-6 pb-3 d-flex align-center font-weight-bold",style:{height:"60px"}},{default:o(()=>[s(a,{icon:"iconamoon:sorting-left-bold",height:"26px"}),u[3]||(u[3]=e("span",{class:"ml-3"},"ピン留め中チャンネルの並び替え",-1)),s(P),v((r(),C("div",{class:"d-flex align-center rounded-circle cursor-pointer px-2 py-2",onClick:u[0]||(u[0]=l=>t.pinned_channel_settings_modal=!1)},[s(a,{icon:"fluent:dismiss-12-filled",width:"23px",height:"23px"})])),[[b]])]),_:1}),e("div",N,[(t.channelsStore.channels_list_with_pinned.get("ピン留め")??[]).length>0?(r(),C("div",z,u[4]||(u[4]=[e("div",null,"各チャンネルのつまみをドラッグして並べ替えできます。",-1)]))):g("",!0),(t.channelsStore.channels_list_with_pinned.get("ピン留め")??[]).length===0?(r(),C("div",K,[u[7]||(u[7]=e("div",null,[e("b",null,"ピン留めされているチャンネルがありません。")],-1)),e("div",R,[u[5]||(u[5]=n("TV ホーム画面のチャンネルリストの ")),s(a,{style:{position:"relative",bottom:"-5px"},icon:"fluent:pin-20-filled",width:"18.5px"}),u[6]||(u[6]=n(" アイコンから、よくみるチャンネルをピン留めできます。"))])])):g("",!0),t.pinned_channels.length>0?(r(),E(p,{key:2,class:"pinned-channels",handle:".pinned-channel__sort-handle","item-key":"id",modelValue:t.pinned_channels,"onUpdate:modelValue":u[1]||(u[1]=l=>t.pinned_channels=l)},{item:o(({element:l})=>[e("div",G,[e("img",{class:"pinned-channel__icon",loading:"lazy",decoding:"async",src:`${t.Utils.api_base_url}/channels/${l.id}/logo`},null,8,L),e("span",J,"Ch: "+F(l.channel_number)+" "+F(l.name),1),u[9]||(u[9]=e("button",{class:"pinned-channel__sort-handle"},[e("svg",{class:"iconify iconify--material-symbols",width:"20px",height:"20px",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 15q-.425 0-.713-.288T4 14q0-.425.288-.713T5 13h14q.425 0 .713.288T20 14q0 .425-.288.713T19 15H5Zm0-4q-.425 0-.713-.288T4 10q0-.425.288-.713T5 9h14q.425 0 .713.288T20 10q0 .425-.288.713T19 11H5Z"})])],-1)),v((r(),C("button",{class:"pinned-channel__delete-button",onClick:i=>t.pinned_channels=t.pinned_channels.filter(T=>T.id!==l.id)},u[8]||(u[8]=[e("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)]),8,Q)),[[b]])])]),_:1},8,["modelValue"])):g("",!0)])]),_:1})]),_:1},8,["modelValue"])}const X=V(H,[["render",W],["__scopeId","data-v-fc492e18"]]),Y=h({name:"Settings-General",components:{PinnedChannelSettings:X,SettingsBase:M},data(){return{Utils:Object.freeze(B),is_form_dense:B.isSmartphoneHorizontal(),pinned_channel_settings_modal:!1,panel_display_state:[{title:"前回の状態を復元する",value:"RestorePreviousState"},{title:"常に表示する",value:"AlwaysDisplay"},{title:"常に折りたたむ",value:"AlwaysFold"}],tv_panel_active_tab:[{title:"番組情報タブ",value:"Program"},{title:"チャンネルタブ",value:"Channel"},{title:"コメントタブ",value:"Comment"},{title:"Twitter タブ",value:"Twitter"}],video_panel_active_tab:[{title:"番組情報タブ",value:"RecordedProgram"},{title:"シリーズタブ",value:"Series"},{title:"コメントタブ",value:"Comment"},{title:"Twitter タブ",value:"Twitter"}],import_settings_file:null}},computed:{...c(y)},methods:{exportSettings(){const t=JSON.stringify(this.settingsStore.settings,null,4),u=new Blob([t],{type:"application/json"});B.downloadBlobData(u,"KonomiTV-Settings.json"),d.success("設定をエクスポートしました。")},async importSettings(){if(this.import_settings_file===null){d.error("インポートする設定データを選択してください！");return}await this.settingsStore.importClientSettings(this.import_settings_file)===!0?(d.success("設定をインポートしました。"),window.setTimeout(()=>this.$router.go(0),500)):d.error("設定データが不正なため、インポートできませんでした。")},async resetSettings(){await this.settingsStore.resetClientSettings(),d.success("設定をリセットしました。"),window.setTimeout(()=>this.$router.go(0),500)}}}),x={class:"settings__heading"},uu={class:"settings__content"},eu={class:"settings__item settings__item--switch"},tu={class:"settings__item settings__item--switch"},su={class:"settings__item settings__item--switch"},nu={class:"settings__item-heading",for:"tv_channel_selection_requires_alt_key"},iu={class:"settings__item-label",for:"tv_channel_selection_requires_alt_key"},lu={class:"settings__item"},au={class:"settings__item"},ou={class:"settings__item"},ru={class:"settings__item"};function du(t,u,S,w,k,$){const a=_("Icon"),p=_("PinnedChannelSettings"),l=_("SettingsBase");return r(),E(l,null,{default:o(()=>[e("h2",x,[v((r(),C("a",{class:"settings__back-button",onClick:u[0]||(u[0]=i=>t.$router.back())},[s(a,{icon:"fluent:chevron-left-12-filled",width:"27px"})])),[[b]]),s(a,{icon:"fa-solid:sliders-h",width:"19px",style:{margin:"0 4px"}}),u[13]||(u[13]=e("span",{class:"ml-3"},"全般",-1))]),e("div",uu,[u[33]||(u[33]=e("div",{class:"settings__item"},[e("div",{class:"settings__item-heading"},"ピン留め中チャンネルの並び替え"),e("div",{class:"settings__item-label"},[n(" ピン留め中のチャンネルの表示順序を変更できます。よくみるチャンネルは先頭に配置しておくと便利です。"),e("br"),n(" ピン留め中のチャンネルの追加・削除は、別途 TV ホーム画面のチャンネルリストから行えます。"),e("br")])],-1)),s(m,{class:"settings__save-button mt-4",variant:"flat",onClick:u[1]||(u[1]=i=>t.pinned_channel_settings_modal=!t.pinned_channel_settings_modal)},{default:o(()=>[s(a,{icon:"iconamoon:sorting-left-bold",height:"19px"}),u[14]||(u[14]=e("span",{class:"ml-1"},"ピン留め中チャンネルの並び替え設定を開く",-1))]),_:1}),e("div",eu,[u[15]||(u[15]=e("label",{class:"settings__item-heading",for:"show_player_background_image"},"プレイヤーの読み込み中に背景写真を表示する",-1)),u[16]||(u[16]=e("label",{class:"settings__item-label",for:"show_player_background_image"},[n(" プレイヤーの読み込み中にランダムで背景写真を表示できます。デフォルトはオンです。"),e("br"),n(" 背景写真を表示したくない場合は、この設定をオフにできます。"),e("br")],-1)),s(D,{class:"settings__item-switch",color:"primary",id:"show_player_background_image","hide-details":"",modelValue:t.settingsStore.settings.show_player_background_image,"onUpdate:modelValue":u[2]||(u[2]=i=>t.settingsStore.settings.show_player_background_image=i)},null,8,["modelValue"])]),e("div",tu,[u[17]||(u[17]=e("label",{class:"settings__item-heading",for:"use_pure_black_player_background"},"プレイヤー表示領域の背景色を完全な黒にする",-1)),u[18]||(u[18]=e("label",{class:"settings__item-label",for:"use_pure_black_player_background"},[n(" 映像の上下 or 左右に表示される黒帯の色を、完全な黒に変更できます。デフォルトはオフです。"),e("br"),n(" 特に有機 EL ディスプレイを搭載したデバイスで、映像の周囲に灰色がかった光が漏れて気になるときは、この設定をオンにすると改善されるかもしれません。"),e("br")],-1)),s(D,{class:"settings__item-switch",color:"primary",id:"use_pure_black_player_background","hide-details":"",modelValue:t.settingsStore.settings.use_pure_black_player_background,"onUpdate:modelValue":u[3]||(u[3]=i=>t.settingsStore.settings.use_pure_black_player_background=i)},null,8,["modelValue"])]),e("div",su,[e("label",nu,"チャンネル選局のキーボードショートカットを "+F(t.Utils.AltOrOption())+" + 数字キー/テンキーに変更する",1),e("label",iu,[n(" この設定をオンにすると、数字キーまたはテンキーに対応するリモコン番号（1～12）のチャンネルに切り替えるとき、"+F(t.Utils.AltOrOption())+" キーを同時に押す必要があります。",1),u[19]||(u[19]=e("br",null,null,-1)),u[20]||(u[20]=n(" コメントやツイートを入力しようとして誤って数字キーを押してしまい、チャンネルが変わってしまう事態を避けたい方におすすめです。")),u[21]||(u[21]=e("br",null,null,-1))]),s(D,{class:"settings__item-switch",color:"primary",id:"tv_channel_selection_requires_alt_key","hide-details":"",modelValue:t.settingsStore.settings.tv_channel_selection_requires_alt_key,"onUpdate:modelValue":u[4]||(u[4]=i=>t.settingsStore.settings.tv_channel_selection_requires_alt_key=i)},null,8,["modelValue"])]),s(f,{class:"mt-6"}),e("div",lu,[u[22]||(u[22]=e("div",{class:"settings__item-heading"},"デフォルトのパネルの表示状態",-1)),u[23]||(u[23]=e("div",{class:"settings__item-label"},[n(" 視聴画面を開いたときに、右側のパネルをどう表示するかを設定します。"),e("br")],-1)),s(A,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:t.is_form_dense?"compact":"default",items:t.panel_display_state,modelValue:t.settingsStore.settings.panel_display_state,"onUpdate:modelValue":u[5]||(u[5]=i=>t.settingsStore.settings.panel_display_state=i)},null,8,["density","items","modelValue"])]),e("div",au,[u[24]||(u[24]=e("div",{class:"settings__item-heading"},"テレビをみるときにデフォルトで表示されるパネルのタブ",-1)),u[25]||(u[25]=e("div",{class:"settings__item-label"},[n(" テレビの視聴画面を開いたときに、右側のパネルで最初に表示されるタブを設定します。"),e("br")],-1)),s(A,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:t.is_form_dense?"compact":"default",items:t.tv_panel_active_tab,modelValue:t.settingsStore.settings.tv_panel_active_tab,"onUpdate:modelValue":u[6]||(u[6]=i=>t.settingsStore.settings.tv_panel_active_tab=i)},null,8,["density","items","modelValue"])]),e("div",ou,[u[26]||(u[26]=e("div",{class:"settings__item-heading"},"ビデオをみるときにデフォルトで表示されるパネルのタブ",-1)),u[27]||(u[27]=e("div",{class:"settings__item-label"},[n(" ビデオの視聴画面を開いたときに、右側のパネルで最初に表示されるタブを設定します。"),e("br")],-1)),s(A,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:t.is_form_dense?"compact":"default",items:t.video_panel_active_tab,modelValue:t.settingsStore.settings.video_panel_active_tab,"onUpdate:modelValue":u[7]||(u[7]=i=>t.settingsStore.settings.video_panel_active_tab=i)},null,8,["density","items","modelValue"])]),s(f,{class:"mt-6"}),u[34]||(u[34]=e("div",{class:"settings__item"},[e("div",{class:"settings__item-heading"},"設定をエクスポート"),e("div",{class:"settings__item-label"},[n(" このデバイス (ブラウザ) に保存されている設定データを、エクスポート (ダウンロード) できます。"),e("br"),n(" ダウンロードした設定データ (KonomiTV-Settings.json) は、[設定をインポート] からインポートできます。異なるサーバーの KonomiTV を同じ設定で使いたいときなどに使ってください。"),e("br")])],-1)),s(m,{class:"settings__save-button mt-4",variant:"flat",onClick:u[8]||(u[8]=i=>t.exportSettings())},{default:o(()=>[s(a,{icon:"fa6-solid:download",class:"mr-3",height:"19px"}),u[28]||(u[28]=n("設定をエクスポート "))]),_:1}),e("div",ru,[u[29]||(u[29]=e("div",{class:"settings__item-heading text-error-lighten-1"},"設定をインポート",-1)),u[30]||(u[30]=e("div",{class:"settings__item-label"},[n(" [設定をエクスポート] でダウンロードした設定データを、このデバイス (ブラウザ) にインポートできます。"),e("br"),e("strong",{class:"text-error-lighten-1"},"設定をインポートすると、現在のデバイス設定はすべて上書きされます。元に戻すことはできません。"),e("br"),e("strong",{class:"text-error-lighten-1"},"設定のデバイス間同期がオンのときは、同期が有効なすべてのデバイスに反映されます。"),n("十分ご注意ください。"),e("br")],-1)),s(Z,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"設定データ (KonomiTV-Settings.json) を選択",density:t.is_form_dense?"compact":"default",accept:"application/json","prepend-icon":"","prepend-inner-icon":"mdi-paperclip",modelValue:t.import_settings_file,"onUpdate:modelValue":u[9]||(u[9]=i=>t.import_settings_file=i)},null,8,["density","modelValue"])]),s(m,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:u[10]||(u[10]=i=>t.importSettings())},{default:o(()=>[s(a,{icon:"fa6-solid:upload",class:"mr-3",height:"19px"}),u[31]||(u[31]=n("設定をインポート "))]),_:1}),u[35]||(u[35]=e("div",{class:"settings__item"},[e("div",{class:"settings__item-heading text-error-lighten-1"},"設定を初期状態にリセット"),e("div",{class:"settings__item-label"},[n(" このデバイス (ブラウザ) に保存されている設定データを、初期状態のデフォルト値にリセットできます。"),e("br"),e("strong",{class:"text-error-lighten-1"},"設定をリセットすると、元に戻すことはできません。"),e("br"),e("strong",{class:"text-error-lighten-1"},"設定のデバイス間同期がオンのときは、同期が有効なすべてのデバイスに反映されます。"),n("十分ご注意ください。"),e("br")])],-1)),s(m,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:u[11]||(u[11]=i=>t.resetSettings())},{default:o(()=>[s(a,{icon:"material-symbols:device-reset-rounded",class:"mr-2",height:"23px"}),u[32]||(u[32]=n("設定をリセット "))]),_:1})]),s(p,{modelValue:t.pinned_channel_settings_modal,"onUpdate:modelValue":u[12]||(u[12]=i=>t.pinned_channel_settings_modal=i)},null,8,["modelValue"])]),_:1})}const cu=V(Y,[["render",du]]);export{cu as default};

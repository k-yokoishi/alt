(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,7],{218:function(e,t,l){"use strict";l.r(t);var r=l(1).a.extend({props:{size:{type:String,default:"md"},spFull:{type:Boolean,default:!1}},computed:{classes:function(){return[{"px-2xl":!this.spFull},function(e){switch(e){case"sm":return"md:max-w-sm";case"lg":return"md:max-w-xl";default:return"md:max-w-lg"}}(this.size)]}}}),n=l(11),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"w-full mx-auto md:px-0 md:px-10 lg:px-20",class:e.classes},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,l){"use strict";l.r(t);var r=l(1).a.extend({props:{title:{required:!0,type:String},subTitle:{type:String,default:""}}}),n=l(11),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",[l("header",[l("alt-container",{attrs:{size:"lg"}},[l("div",[l("h1",{staticClass:"text-h1 font-sans"},[e._v(e._s(e.title))])]),e._v(" "),e.subTitle?l("div",{staticClass:"mt-md text-base text-gray"},[e._v("\n        "+e._s(e.subTitle)+"\n      ")]):e._e()])],1),e._v(" "),l("main",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AltContainer:l(218).default})},230:function(e,t,l){var content=l(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(25).default)("293637ba",content,!0,{sourceMap:!1})},233:function(e,t,l){"use strict";l(230)},234:function(e,t,l){var r=l(24)((function(i){return i[1]}));r.push([e.i,'.field+.field[data-v-ac2e9ffa]{margin-top:24px}.field-label.required[data-v-ac2e9ffa]:after{content:"*";margin-left:4px;--tw-text-opacity:1;color:rgba(196, 20, 20, var(--tw-text-opacity))}',""]),r.locals={},e.exports=r},235:function(e,t,l){var content=l(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(25).default)("766e4424",content,!0,{sourceMap:!1})},239:function(e,t,l){"use strict";l.r(t);var r=l(1).a.extend({props:{label:{type:String,default:""},labelFor:{type:String,default:void 0},required:{type:Boolean,default:!1}}}),n=(l(233),l(11)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"field flex flex-col"},[e.label?l("label",{staticClass:"field-label font-bold",class:{required:e.required},attrs:{for:e.labelFor}},[e._v(e._s(e.label))]):e._e(),e._v(" "),l("div",{staticClass:"mt-sm"},[e._t("default")],2)])}),[],!1,null,"ac2e9ffa",null);t.default=component.exports},241:function(e,t,l){"use strict";l(235)},242:function(e,t,l){var r=l(24)((function(i){return i[1]}));r.push([e.i,".input[data-v-47ea4292], .textarea[data-v-47ea4292]{width:100%;border-radius:0.25rem;border-width:1px;border-color:transparent;padding:12px;outline:2px solid transparent;outline-offset:2px}.input[data-v-47ea4292]:focus, .textarea[data-v-47ea4292]:focus{--tw-border-opacity:1;border-color:rgba(26, 44, 68, var(--tw-border-opacity))}",""]),r.locals={},e.exports=r},258:function(e,t,l){"use strict";l.r(t);var r=l(1),n=l(81),o=r.a.extend({components:{AltButton:n.default},data:function(){return{form:{name:"",email:"",message:""},names:{name:"entry.1764530242",email:"entry.1624598668",message:"entry.1466039086"},submitted:!1}},head:{title:"お問い合わせ"},methods:{handleLoadIframe:function(){this.submitted&&(window.location.href="/thanx")},handleSubmit:function(){this.submitted=!0}}}),d=(l(241),l(11)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mt-24 pb-20"},[l("alt-page",{attrs:{title:"CONTACT","sub-title":"お問い合わせ"}},[l("iframe",{staticClass:"hidden",attrs:{id:"hidden_iframe",name:"hidden_iframe"},on:{load:e.handleLoadIframe}}),e._v(" "),l("div",{staticClass:"mt-16"},[l("alt-container",{attrs:{size:"sm"}},[l("p",[e._v("\n          ご不明点やWeb制作についてのご依頼、ご相談は以下フォームよりお気軽にお問い合わせください。3営業日以内にご返信いたします。\n        ")]),e._v(" "),l("div",{staticClass:"mt-20"},[l("form",{attrs:{method:"post",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKlWv_MdroRu9gTEjmo3_QjnGNMbekGW7BPuuI0t7jUsDczQ/formResponse",target:"hidden_iframe"},on:{submit:e.handleSubmit}},[l("alt-form-field",{attrs:{label:"お名前","label-for":"name",required:""}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"input",attrs:{id:"name",name:e.names.name,required:""},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),l("alt-form-field",{attrs:{label:"メールアドレス","label-for":"email",required:""}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"input",attrs:{id:"email",name:e.names.email,required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),l("alt-form-field",{attrs:{label:"お問い合わせ内容","label-for":"message",required:""}},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"textarea",attrs:{id:"message",name:e.names.message,rows:"5",required:""},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),e._v(" "),l("div",{staticClass:"mt-3xl flex justify-center"},[l("div",{staticClass:"max-w-[200px] w-full"},[l("alt-button",{attrs:{full:"",rounded:"",type:"submit",disabled:e.submitted}},[e._v("\n                  送信する\n                ")])],1)])],1)])])],1)])],1)}),[],!1,null,"47ea4292",null);t.default=component.exports;installComponents(component,{AltFormField:l(239).default,AltButton:l(81).default,AltContainer:l(218).default,AltPage:l(221).default})}}]);
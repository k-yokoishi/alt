(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,7,9],{218:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{size:{type:String,default:"md"},spFull:{type:Boolean,default:!1}},computed:{classes:function(){return[{"px-2xl":!this.spFull},function(t){switch(t){case"sm":return"md:max-w-sm";case"lg":return"md:max-w-xl";default:return"md:max-w-lg"}}(this.size)]}}}),r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"w-full mx-auto md:px-0 md:px-10 lg:px-20",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("10ab56f7",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{title:{required:!0,type:String},subTitle:{type:String,default:""}}}),r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",[n("alt-container",{attrs:{size:"lg"}},[n("div",[n("h1",{staticClass:"text-h1 font-sans"},[t._v(t._s(t.title))])]),t._v(" "),t.subTitle?n("div",{staticClass:"mt-md text-base text-gray"},[t._v("\n        "+t._s(t.subTitle)+"\n      ")]):t._e()])],1),t._v(" "),n("main",[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AltContainer:n(218).default})},221:function(t,e,n){t.exports=n.p+"img/contact_airplane_circle.d66d5da.png"},222:function(t,e,n){t.exports=n.p+"img/contact_airplane.6112e7d.png"},223:function(t,e,n){"use strict";n(219)},224:function(t,e,n){var l=n(24),r=n(161),o=n(225),c=l((function(i){return i[1]})),d=r(o);c.push([t.i,".sectionContact{background:url("+d+") no-repeat 50%;background-size:cover}.sectionContact__airplane.planeLanded{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-translate-x:64px;--tw-translate-y:-96px}@media (min-width: 768px){.sectionContact__airplane.planeLanded{--tw-translate-x:124px}.sectionContact__airplane.planeLanded{--tw-translate-y:-156px}}",""]),c.locals={},t.exports=c},225:function(t,e,n){t.exports=n.p+"img/contact_section_bg.1b1f95f.png"},226:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({data:function(){return{planeLanded:!1}},mounted:function(){var t=this,e=this.$refs.sectionContact;window.addEventListener("scroll",(function(){var rect=e.getBoundingClientRect();window.innerHeight>rect.top+rect.height&&!t.planeLanded&&(t.planeLanded=!0)}))}}),r=(n(223),n(11)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{ref:"sectionContact",staticClass:"mt-28 md:mt-[172px]"},[l("alt-container",{attrs:{size:"lg","sp-full":""}},[l("div",{staticClass:"sectionContact md:rounded-xl relative"},[l("div",{staticClass:"absolute -top-16 left-4 md:left-24"},[l("div",{staticClass:"relative w-[120px] h-[120px] md:w-40 md:h-40"},[l("div",{staticClass:"absolute"},[l("img",{attrs:{src:n(221),alt:""}})]),t._v(" "),l("div",{staticClass:"\n              sectionContact__airplane\n              absolute\n              top-1/2\n              left-1/2\n              duration-300\n              transform\n              -translate-x-1/2 -translate-y-1/2\n            ",class:{planeLanded:t.planeLanded}},[l("img",{attrs:{src:n(222),alt:""}})])])]),t._v(" "),l("div",{staticClass:"py-[64px] text-center"},[l("header",{staticClass:"font-sans text-[32px]"},[l("h2",[t._v("CONTACT")])]),t._v(" "),l("main",{staticClass:"mt-md"},[l("p",{staticClass:"text-sm md:text-base"},[t._v("\n            Web制作やクリエイティブに関する"),l("br",{staticClass:"md:hidden"}),t._v("お困りごとがあれば"),l("br"),t._v("\n            まずはお気軽にお問い合わせください。\n          ")])]),t._v(" "),l("footer",{staticClass:"mt-lg flex justify-center"},[l("alt-button",{attrs:{to:"/contact",rounded:""}},[t._v("お問い合わせはこちら")])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AltButton:n(81).default,AltContainer:n(218).default})},231:function(t,e,n){t.exports=n.p+"img/works_alt.5ba04f3.jpg"},241:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{title:{type:String,required:!0},desc:{type:String,required:!0},mvImageSrc:{type:String,required:!0},url:{type:String,default:""},category:{type:String,default:""},skills:{type:String,default:""},productionPeriod:{type:String,default:""}},computed:{details:function(){return[{label:"URL",value:this.url},{label:"カテゴリー",value:this.category},{label:"担当",value:this.skills},{label:"製作期間",value:this.productionPeriod}]}}}),r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-24 md:pb-20"},[n("alt-page",{attrs:{title:"WORKS","sub-title":"制作事例"}},[n("div",{staticClass:"mt-16"},[n("alt-container",[n("section",[n("header",[n("h2",{staticClass:"text-4xl"},[t._v(t._s(t.title))])]),t._v(" "),n("main",{staticClass:"mt-2xl"},[n("figure",{staticClass:"max-full rounded"},[n("img",{attrs:{src:t.mvImageSrc,alt:"alt."}})]),t._v(" "),n("div",{staticClass:"md:flex mt-lg md:mt-16"},[n("div",[n("p",{domProps:{innerHTML:t._s(t.desc)}})]),t._v(" "),n("div",{staticClass:"\n                  mt-lg\n                  pt-lg\n                  border-t\n                  md:mt-0\n                  md:pt-0\n                  md:border-t-0\n                  md:ml-3xl\n                  md:pl-3xl\n                  md:border-l\n                "},[n("ul",t._l(t.details,(function(e){return n("li",{key:e.label,staticClass:"mt-lg first:mt-0"},[n("dl",[n("dt",{staticClass:"text-gray font-bold leading-none"},[t._v("\n                        "+t._s(e.label)+"\n                      ")]),t._v(" "),n("dd",{staticClass:"mt-sm leading-none"},[t._v(t._s(e.value))])])])})),0)])])]),t._v(" "),n("footer",{staticClass:"mt-3xl md:mt-20"},[n("div",{staticClass:"text-center"},[n("alt-link",{attrs:{to:"/works",size:"xl","back-arrow":""}},[n("span",{staticClass:"font-bold"},[t._v("制作事例一覧へ戻る")])])],1)])])]),t._v(" "),n("alt-contact-section")],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AltLink:n(37).default,AltContainer:n(218).default,AltContactSection:n(226).default,AltPage:n(220).default})},263:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({data:function(){return{desc:"独立にあたり自身のポートフォリオサイトを制作しました。<br />\n夫婦で制作に取り組んでいることもあり、ユニセックスな雰囲気のデザインを目指しました。<br />\n情報設計はシンプルにしつつも、動きを多用し遊びゴコロを取り入れています。",mvImageSrc:n(231)}},head:{title:"制作事例 - alt."}}),r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("alt-works-page",{attrs:{title:"alt.",desc:t.desc,"mv-image-src":t.mvImageSrc,url:"https://alt-design.work/",category:"Portfolio site",skills:"情報設計 / デザイン / コーディング","production-period":"1ヶ月"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AltWorksPage:n(241).default})}}]);
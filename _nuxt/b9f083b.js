(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(t,n,e){var content=e(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("3a09a43c",content,!0,{sourceMap:!1})},148:function(t,n,e){var content=e(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("680879c6",content,!0,{sourceMap:!1})},149:function(t,n,e){var content=e(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("1239d49d",content,!0,{sourceMap:!1})},155:function(t,n,e){"use strict";var o={components:{GlobalHeader:e(156).default}},r=(e(206),e(19)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GlobalHeader"),t._v(" "),e("main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports},156:function(t,n,e){"use strict";e.r(n);var o=e(1),r=e(80),l=o.a.extend({components:{AltButton:r.default},data:function(){return{navs:[{label:"ABOUT",to:"/about"},{label:"SERVICE",to:"/service"},{label:"WORKS",to:"/works"},{label:"NEWS",to:"/news"}]}}}),c=(e(204),e(19)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("header",[o("div",{staticClass:"px-20 py-4"},[o("div",{staticClass:"flex justify-between items-center"},[o("div",{staticClass:"global-header-log"},[o("NuxtLink",{attrs:{to:"/"}},[o("img",{attrs:{src:e(201)}})])],1),t._v(" "),o("nav",[o("ul",{staticClass:"flex items-center"},[t._l(t.navs,(function(nav){return o("li",{key:nav.to,staticClass:"mx-6"},[o("NuxtLink",{attrs:{to:nav.to}},[t._v(t._s(nav.label))])],1)})),t._v(" "),o("li",{staticClass:"mx-2"},[o("AltButton",{attrs:{to:"/contact",rounded:""}},[t._v("CONTACT")])],1)],2)])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AltButton:e(80).default})},157:function(t,n,e){e(158),t.exports=e(159)},201:function(t,n,e){t.exports=e.p+"img/logo.0e85312.svg"},202:function(t,n,e){"use strict";e(147)},203:function(t,n,e){var o=e(35)((function(i){return i[1]}));o.push([t.i,".button[data-v-1cda6eea]{\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n  border-radius:0.25rem;\n  display:block\n}\n.button[data-v-1cda6eea]:hover{\n  opacity:0.6\n}\n.button[data-v-1cda6eea]{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  width:10rem;\n  transition-duration:200ms\n}\n.button.button[data-v-1cda6eea]{\n  border-radius:9999px\n}\n.button.rounded[data-v-1cda6eea]{\n  border-radius:9999px\n}",""]),o.locals={},t.exports=o},204:function(t,n,e){"use strict";e(148)},205:function(t,n,e){var o=e(35)((function(i){return i[1]}));o.push([t.i,".global-header-log{\n  width:75px\n}",""]),o.locals={},t.exports=o},206:function(t,n,e){"use strict";e(149)},207:function(t,n,e){var o=e(35)((function(i){return i[1]}));o.push([t.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}',""]),o.locals={},t.exports=o},80:function(t,n,e){"use strict";e.r(n);var o=e(1).a.extend({props:{to:{type:String,default:""},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"button"}},methods:{handleClick:function(){this.$emit("click")}}}),r=(e(202),e(19)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.to?e("NuxtLink",{staticClass:"button",class:{rounded:t.rounded},attrs:{to:t.to,"active-class":"border"}},[t._t("default")],2):e("button",{staticClass:"button",class:{rounded:t.rounded},attrs:{type:t.type,disabled:t.disabled},on:{click:t.handleClick}},[t._t("default")],2)}),[],!1,null,"1cda6eea",null);n.default=component.exports}},[[157,7,1,8]]]);
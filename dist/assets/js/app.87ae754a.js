(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"7db0":function(e,t,s){"use strict";var n=s("23e7"),i=s("b727").find,a=s("44d2"),l="find",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(l)},"841c":function(e,t,s){"use strict";var n=s("c65b"),i=s("d784"),a=s("825a"),l=s("7234"),c=s("1d80"),o=s("129f"),r=s("577e"),u=s("dc4a"),d=s("14c3");i("search",(function(e,t,s){return[function(t){var s=c(this),i=l(t)?void 0:u(t,e);return i?n(i,t,s):new RegExp(t)[e](r(s))},function(e){var n=a(this),i=r(e),l=s(t,n,i);if(l.done)return l.value;var c=n.lastIndex;o(c,0)||(n.lastIndex=0);var u=d(n,i);return o(n.lastIndex,c)||(n.lastIndex=c),null===u?-1:u.index}]}))},"84ef":function(e,t,s){"use strict";s("bb57")},bb57:function(e,t,s){},f82c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("app-layout",[t("router-view")],1)},i=[],a=function(){var e=this,t=e._self._c;return t("div",{class:e.getMenuType,attrs:{id:"app-container"}},[t("topnav"),e._v(" "),t("sidebar"),e._v(" "),t("main",[t("div",{staticClass:"container-fluid"},[e._t("default")],2)]),e._v(" "),t("footer-component")],1)},l=[],c=s("5530"),o=(s("99af"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar",on:{click:function(e){return e.stopPropagation(),function(){}.apply(null,arguments)}}},[t("div",{staticClass:"main-menu"},[t("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[t("ul",{staticClass:"list-unstyled"},e._l(e.filteredMenuItems(e.menuItems),(function(s,n){return t("li",{key:"parent_".concat(n),class:{active:e.selectedParentMenu===s.id&&""===e.viewingParentMenu||e.viewingParentMenu===s.id},attrs:{"data-flag":s.id}},[s.newWindow?t("a",{attrs:{href:s.to,rel:"noopener noreferrer",target:"_blank"}},[t("i",{class:s.icon}),e._v("\n            "+e._s(e.$t(s.label))+"\n          ")]):s.subs&&s.subs.length>0?t("a",{attrs:{href:"#".concat(s.to)},on:{click:function(t){return t.preventDefault(),e.openSubMenu(t,s)}}},[t("i",{class:s.icon}),e._v("\n            "+e._s(e.$t(s.label))+"\n          ")]):t("router-link",{attrs:{to:s.to},nativeOn:{click:function(t){return e.changeSelectedParentHasNoSubmenu(s.id)}}},[t("i",{class:s.icon}),e._v("\n            "+e._s(e.$t(s.label))+"\n          ")])],1)})),0)])],1),e._v(" "),t("div",{staticClass:"sub-menu"},[t("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},e._l(e.filteredMenuItems(e.menuItems),(function(s,n){return t("ul",{key:"sub_".concat(s.id),class:{"list-unstyled":!0,"d-block":e.selectedParentMenu===s.id&&""===e.viewingParentMenu||e.viewingParentMenu===s.id},attrs:{"data-parent":s.id}},e._l(e.filteredMenuItems(s.subs),(function(s,i){return t("li",{key:"sub_".concat(i),class:{"has-sub-item":s.subs&&s.subs.length>0,active:e.$route.path.indexOf(s.to)>-1}},[s.newWindow?t("a",{attrs:{href:s.to,rel:"noopener noreferrer",target:"_blank"}},[t("i",{class:s.icon}),e._v(" "),t("span",[e._v(e._s(e.$t(s.label)))])]):s.subs&&s.subs.length>0?[t("b-link",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"menu_".concat(n,"_").concat(i),expression:"`menu_${itemIndex}_${subIndex}`"}],staticClass:"rotate-arrow-icon opacity-50",attrs:{variant:"link"}},[t("i",{staticClass:"simple-icon-arrow-down"}),e._v(" "),t("span",{staticClass:"d-inline-block"},[e._v(e._s(e.$t(s.label)))])]),e._v(" "),t("b-collapse",{attrs:{visible:"",id:"menu_".concat(n,"_").concat(i)}},[t("ul",{staticClass:"list-unstyled third-level-menu"},e._l(e.filteredMenuItems(s.subs),(function(s,a){return t("li",{key:"third_".concat(n,"_").concat(i,"_").concat(a),class:{"third-level-menu":!0,active:e.$route.path===s.to}},[s.newWindow?t("a",{attrs:{href:s.to,rel:"noopener noreferrer",target:"_blank"}},[t("i",{class:s.icon}),e._v(" "),t("span",[e._v(e._s(e.$t(s.label)))])]):t("router-link",{attrs:{to:s.to}},[t("i",{class:s.icon}),e._v(" "),t("span",[e._v(e._s(e.$t(s.label)))])])],1)})),0)])]:t("router-link",{attrs:{to:s.to}},[t("i",{class:s.icon}),e._v(" "),t("span",[e._v(e._s(e.$t(s.label)))])])],2)})),0)})),0)],1)])}),r=[],u=(s("4de4"),s("d3b7"),s("7db0"),s("caad"),s("2532"),s("a15b"),s("14d9"),s("2f62")),d=s("2b47"),m=s("d70f"),h=[{id:"piaf",icon:"iconsminds-administrator",label:"menu.piaf",to:"".concat(d["a"],"/piaf"),roles:[m["a"].SuperAdmin],subs:[{icon:"simple-icon-paper-plane",label:"menu.dashboard",to:"".concat(d["a"],"/piaf/Dashboard")},{icon:"simple-icon-list",label:"menu.agency",to:"".concat(d["a"],"/piaf/Agency")}]},{id:"second-menu",icon:"iconsminds-business-man-woman",label:"menu.admin",to:"".concat(d["a"],"/second-menu"),roles:[m["a"].SuperAdmin,m["a"].Admin],subs:[{icon:"simple-icon-list",label:"menu.user",to:"".concat(d["a"],"/second-menu/second")}]},{id:"pages",icon:"iconsminds-digital-drawing",label:"menu.pages",to:"/user/login",subs:[{icon:"simple-icon-user-following",label:"menu.login",to:"/user/login",newWindow:!0},{icon:"simple-icon-user-follow",label:"menu.register",to:"/user/register",newWindow:!0},{icon:"simple-icon-user-unfollow",label:"menu.forgot-password",to:"/user/forgot-password",newWindow:!0},{icon:"simple-icon-user-following",label:"menu.reset-password",to:"/user/reset-password",newWindow:!0}]},{id:"single",icon:"iconsminds-three-arrow-fork",label:"menu.single",to:"".concat(d["a"],"/single")},{id:"docs",icon:"iconsminds-library",label:"menu.docs",to:"https://piaf-vue-docs.coloredstrategies.com/",newWindow:!0}],b=h,v={data:function(){return{selectedParentMenu:"",menuItems:b,viewingParentMenu:""}},mounted:function(){this.selectMenu(),window.addEventListener("resize",this.handleWindowResize),document.addEventListener("click",this.handleDocumentClick),this.handleWindowResize()},beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentClick),window.removeEventListener("resize",this.handleWindowResize)},methods:Object(c["a"])(Object(c["a"])({},Object(u["d"])(["changeSideMenuStatus","addMenuClassname","changeSelectedMenuHasSubItems"])),{},{selectMenu:function(){var e=this.$route.path.split("/").filter((function(e){return""!==e}))[1];this.selectedParentMenu=void 0!==e||null!==e?e.toLowerCase():"dashboards",this.isCurrentMenuHasSubItem()},isCurrentMenuHasSubItem:function(){var e=this,t=this.menuItems.find((function(t){return t.id===e.selectedParentMenu})),s=!!(t&&t.subs&&t.subs.length>0);return s!=this.selectedMenuHasSubItems&&(s?this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:!0}):this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:!1})),s},changeSelectedParentHasNoSubmenu:function(e){this.selectedParentMenu=e,this.viewingParentMenu=e,this.changeSelectedMenuHasSubItems(!1),this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:!1})},openSubMenu:function(e,t){var s=t.id,n=t.subs&&t.subs.length>0;if(this.changeSelectedMenuHasSubItems(n),n){var i=this.menuType?this.menuType.split(" ").filter((function(e){return""!==e})):"";i.includes("menu-mobile")?this.addMenuClassname({classname:"sub-show-temporary",currentClasses:this.menuType}):!i.includes("menu-sub-hidden")||2!==this.menuClickCount&&0!==this.menuClickCount?!i.includes("menu-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount?!i.includes("menu-default")||i.includes("menu-sub-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount||this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:n}):this.changeSideMenuStatus({step:2,classNames:this.menuType,selectedMenuHasSubItems:n}):this.changeSideMenuStatus({step:3,classNames:this.menuType,selectedMenuHasSubItems:n}),this.viewingParentMenu=s}else this.viewingParentMenu=s,this.selectedParentMenu=s,this.toggle()},handleDocumentClick:function(e){this.viewingParentMenu="",this.selectMenu(),this.toggle()},toggle:function(){var e=this.menuType.split(" ").filter((function(e){return""!==e}));e.includes("menu-sub-hidden")&&3===this.menuClickCount?this.changeSideMenuStatus({step:2,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems}):(e.includes("menu-hidden")||e.includes("menu-mobile"))&&(1!==this.menuClickCount||this.selectedMenuHasSubItems)&&this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems})},handleWindowResize:function(e){if(!e||e.isTrusted){var t=this.getMenuClassesForResize(this.menuType);this.changeSideMenuStatus({step:0,classNames:t.join(" "),selectedMenuHasSubItems:this.selectedMenuHasSubItems})}},getMenuClassesForResize:function(e){var t=e.split(" ").filter((function(e){return""!==e})),s=window.innerWidth;return s<d["h"]?t.push("menu-mobile"):s<d["j"]?(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&!t.includes("menu-sub-hidden")&&t.push("menu-sub-hidden")):(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&t.includes("menu-sub-hidden")&&(t=t.filter((function(e){return"menu-sub-hidden"!==e})))),t},filteredMenuItems:function(e){var t=this;return e?e.filter((function(e){return!e.roles||e.roles&&e.roles.includes(t.currentUser.role)})):[]}}),computed:Object(c["a"])({},Object(u["c"])({currentUser:"currentUser",menuType:"getMenuType",menuClickCount:"getMenuClickCount",selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),watch:{$route:function(e,t){if(e.path!==t.path){var s=e.path.split("/").filter((function(e){return""!==e}))[1];this.selectedParentMenu=void 0!==s||null!==s?s.toLowerCase():"dashboards",this.selectMenu(),this.toggle(),this.changeSideMenuStatus({step:0,classNames:this.menuType,selectedMenuHasSubItems:this.selectedMenuHasSubItems}),window.scrollTo(0,top)}}}},p=v,f=s("2877"),g=Object(f["a"])(p,o,r,!1,null,null,null),w=g.exports,_=(s("ac1f"),s("841c"),s("b0c0"),function(){var e=this,t=e._self._c;return t("nav",{staticClass:"navbar fixed-top"},[t("div",{staticClass:"d-flex align-items-center navbar-left"},[t("a",{staticClass:"menu-button d-none d-md-block",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.changeSideMenuStatus({step:e.menuClickCount+1,classNames:e.menuType,selectedMenuHasSubItems:e.selectedMenuHasSubItems})}}},[t("menu-icon")],1),e._v(" "),t("a",{staticClass:"menu-button-mobile d-xs-block d-sm-block d-md-none",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.changeSideMenuForMobile(e.menuType)}}},[t("mobile-menu-icon")],1),e._v(" "),t("div",{ref:"searchContainer",class:{search:!0,"mobile-view":e.isMobileSearch},on:{mouseenter:function(t){e.isSearchOver=!0},mouseleave:function(t){e.isSearchOver=!1}}},[t("b-input",{attrs:{placeholder:e.$t("menu.search")},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),e._v(" "),t("span",{staticClass:"search-icon",on:{click:e.searchClick}},[t("i",{staticClass:"simple-icon-magnifier"})])],1),e._v(" "),t("div",{staticClass:"d-inline-block"},[t("b-dropdown",{staticClass:"ml-2",attrs:{id:"langddm",variant:"light",size:"sm","toggle-class":"language-button"}},[t("template",{slot:"button-content"},[t("span",{staticClass:"name"},[e._v(e._s(e.$i18n.locale.toUpperCase()))])]),e._v(" "),e._l(e.localeOptions,(function(s,n){return t("b-dropdown-item",{key:n,on:{click:function(t){return e.changeLocale(s.id,s.direction)}}},[e._v(e._s(s.name))])}))],2)],1)]),e._v(" "),t("router-link",{staticClass:"navbar-logo",attrs:{to:e.adminRoot}},[t("span",{staticClass:"logo d-none d-xs-block"}),e._v(" "),t("span",{staticClass:"logo-mobile d-block d-xs-none"})]),e._v(" "),t("div",{staticClass:"navbar-right"},[t("div",{staticClass:"d-none d-md-inline-block align-middle mr-3"},[t("switches",{staticClass:"vue-switcher-small",attrs:{id:"tool-mode-switch",theme:"custom",color:"primary"},model:{value:e.isDarkActive,callback:function(t){e.isDarkActive=t},expression:"isDarkActive"}}),e._v(" "),t("b-tooltip",{attrs:{target:"tool-mode-switch",placement:"left",title:"Dark Mode"}})],1),e._v(" "),t("div",{staticClass:"header-icons d-inline-block align-middle"},[t("div",{staticClass:"position-relative d-none d-sm-inline-block"},[t("b-dropdown",{attrs:{variant:"empty",size:"sm",right:"","toggle-class":"header-icon","menu-class":"position-absolute mt-3 iconMenuDropdown","no-caret":""}},[t("template",{slot:"button-content"},[t("i",{staticClass:"simple-icon-grid"})]),e._v(" "),t("div",[t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-shop-4 d-block"}),e._v("\n              "+e._s(e.$t("menu.dashboard"))+"\n            ")]),e._v(" "),t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-pantone d-block"}),e._v("\n              "+e._s(e.$t("menu.ui"))+"\n            ")]),e._v(" "),t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-bar-chart-4 d-block"}),e._v("\n              "+e._s(e.$t("menu.charts"))+"\n            ")]),e._v(" "),t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-speach-bubble d-block"}),e._v("\n              "+e._s(e.$t("menu.chat"))+"\n            ")]),e._v(" "),t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-formula d-block"}),e._v("\n              "+e._s(e.$t("menu.survey"))+"\n            ")]),e._v(" "),t("router-link",{staticClass:"icon-menu-item",attrs:{to:"#"}},[t("i",{staticClass:"iconsminds-check d-block"}),e._v("\n              "+e._s(e.$t("menu.todo"))+"\n            ")])],1)],2)],1),e._v(" "),t("div",{staticClass:"position-relative d-inline-block"},[t("b-dropdown",{attrs:{variant:"empty",size:"sm",right:"","toggle-class":"header-icon notificationButton","menu-class":"position-absolute mt-3 notificationDropdown","no-caret":""}},[t("template",{slot:"button-content"},[t("i",{staticClass:"simple-icon-bell"}),e._v(" "),t("span",{staticClass:"count"},[e._v("3")])]),e._v(" "),t("vue-perfect-scrollbar",{attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},e._l(e.notifications,(function(s,n){return t("div",{key:n,staticClass:"d-flex flex-row mb-3 pb-3 border-bottom"},[t("router-link",{attrs:{to:"#"}},[t("img",{staticClass:"img-thumbnail list-thumbnail xsmall border-0 rounded-circle",attrs:{src:s.img,alt:s.title}})]),e._v(" "),t("div",{staticClass:"pl-3 pr-2"},[t("router-link",{attrs:{to:"#"}},[t("p",{staticClass:"font-weight-medium mb-1"},[e._v(e._s(s.title))]),e._v(" "),t("p",{staticClass:"text-muted mb-0 text-small"},[e._v(e._s(s.date))])])],1)],1)})),0)],2)],1),e._v(" "),t("div",{staticClass:"position-relative d-none d-sm-inline-block"},[t("div",{staticClass:"btn-group"},[t("b-button",{staticClass:"header-icon btn-sm",attrs:{variant:"empty"},on:{click:e.toggleFullScreen}},[t("i",{class:{"d-inline-block":!0,"simple-icon-size-actual":e.fullScreen,"simple-icon-size-fullscreen":!e.fullScreen}})])],1)])]),e._v(" "),t("div",{staticClass:"user d-inline-block"},[t("b-dropdown",{staticClass:"dropdown-menu-right",attrs:{right:"",variant:"empty","toggle-class":"p-0","menu-class":"mt-3","no-caret":""}},[t("template",{slot:"button-content"},[t("span",{staticClass:"name mr-1"},[e._v(e._s(e.currentUser.title))]),e._v(" "),t("span",[t("img",{attrs:{alt:e.currentUser.title,src:e.currentUser.img}})])]),e._v(" "),t("b-dropdown-item",[e._v("Account")]),e._v(" "),t("b-dropdown-item",[e._v("Features")]),e._v(" "),t("b-dropdown-item",[e._v("History")]),e._v(" "),t("b-dropdown-item",[e._v("Support")]),e._v(" "),t("b-dropdown-divider"),e._v(" "),t("b-dropdown-item",{on:{click:e.logout}},[e._v("Sign out")])],2)],1)])],1)}),C=[],k=(s("5319"),function(){var e=this,t=e._self._c;return t("label",{class:e.classObject},[e.shouldShowLabel?t("span",{staticClass:"vue-switcher__label"},[e.label?t("span",{domProps:{textContent:e._s(e.label)}}):e._e(),e._v(" "),!e.label&&e.value?t("span",{domProps:{textContent:e._s(e.textEnabled)}}):e._e(),e._v(" "),e.label||e.value?e._e():t("span",{domProps:{textContent:e._s(e.textDisabled)}})]):e._e(),e._v(" "),t("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{change:e.trigger}}),e._v(" "),t("div")])}),M=[],S=s("ade3"),y={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(e){this.$emit("input",e.target.checked)}},computed:{classObject:function(){var e,t=this.color,s=this.value,n=this.theme,i=this.typeBold,a=this.disabled;return e={"vue-switcher":!0},Object(S["a"])(e,"vue-switcher--unchecked",!s),Object(S["a"])(e,"vue-switcher--disabled",a),Object(S["a"])(e,"vue-switcher--bold",i),Object(S["a"])(e,"vue-switcher--bold--unchecked",i&&!s),Object(S["a"])(e,"vue-switcher-theme--".concat(n),t),Object(S["a"])(e,"vue-switcher-color--".concat(t),t),e},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}},x=y,H=(s("84ef"),Object(f["a"])(x,k,M,!1,null,null,null)),O=H.exports,j=[{img:"/assets/img/profiles/l-2.jpg",title:"Joisse Kaycee just sent a new comment!",date:"09.04.2018 - 12:45",id:1},{img:"/assets/img/notifications/thumb-1.jpg",title:"1 item is out of stock!",date:"09.04.2018 - 12:45",id:2},{img:"/assets/img/notifications/thumb-2.jpg",title:"New order received! It is total $147,20.",date:"09.04.2018 - 12:45",id:3},{img:"/assets/img/notifications/thumb-3.jpg",title:"3 items just added to wish list by a user!",date:"09.04.2018 - 12:45",id:4}],I=j,A=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}})])},P=[],F={},$=Object(f["a"])(F,A,P,!1,null,null,null),D=($.exports,function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}})])}),T=[],E={},V=Object(f["a"])(E,D,T,!1,null,null,null),z=(V.exports,function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[t("path",{staticClass:"view-icon-svg",attrs:{d:"M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"}}),e._v(" "),t("path",{staticClass:"view-icon-svg",attrs:{d:"M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"}})])}),L=[],R={},N=Object(f["a"])(R,z,L,!1,null,null,null),W=(N.exports,function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("svg",{staticClass:"main",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"}},[t("rect",{attrs:{x:"0.48",y:"0.5",width:"7",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"0.48",y:"7.5",width:"7",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"0.48",y:"15.5",width:"7",height:"1"}})]),e._v(" "),t("svg",{staticClass:"sub",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"}},[t("rect",{attrs:{x:"1.56",y:"0.5",width:"16",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"1.56",y:"7.5",width:"16",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"1.56",y:"15.5",width:"16",height:"1"}})])])}),Z=[],B={},U=Object(f["a"])(B,W,Z,!1,null,null,null),q=U.exports,K=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"}},[t("rect",{attrs:{x:"0.5",y:"0.5",width:"25",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"0.5",y:"7.5",width:"25",height:"1"}}),e._v(" "),t("rect",{attrs:{x:"0.5",y:"15.5",width:"25",height:"1"}})])},J=[],X={},G=Object(f["a"])(X,K,J,!1,null,null,null),Q=G.exports,Y=s("ed08"),ee={components:{"menu-icon":q,"mobile-menu-icon":Q,switches:O},data:function(){return{searchKeyword:"",isMobileSearch:!1,isSearchOver:!1,fullScreen:!1,menuHiddenBreakpoint:d["h"],searchPath:d["i"],localeOptions:d["g"],notifications:I,isDarkActive:!1,adminRoot:d["a"]}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(u["d"])(["changeSideMenuStatus","changeSideMenuForMobile"])),Object(u["b"])(["setLang","signOut"])),{},{search:function(){this.$router.push("".concat(this.searchPath,"?search=").concat(this.searchKeyword)),this.searchKeyword=""},searchClick:function(){window.innerWidth<this.menuHiddenBreakpoint?this.isMobileSearch?(this.search(),this.isMobileSearch=!1):this.isMobileSearch=!0:this.search()},handleDocumentforMobileSearch:function(){this.isSearchOver||(this.isMobileSearch=!1,this.searchKeyword="")},changeLocale:function(e,t){var s=Object(Y["c"])().direction;t!==s&&Object(Y["g"])(t),this.setLang(e)},logout:function(){var e=this;this.signOut().then((function(){e.$router.push("/user/login")}))},toggleFullScreen:function(){var e=this.isInFullScreen(),t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullScreen=!e},isInFullScreen:function(){return document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement}}),computed:Object(c["a"])({},Object(u["c"])({currentUser:"currentUser",menuType:"getMenuType",menuClickCount:"getMenuClickCount",selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentforMobileSearch)},created:function(){var e=Object(Y["d"])();this.isDarkActive=e.indexOf("dark")>-1},watch:{"$i18n.locale":function(e,t){t!==e&&this.$router.go(this.$route.path)},isDarkActive:function(e){var t=Object(Y["d"])(),s=!1;e&&t.indexOf("light")>-1?(s=!0,t=t.replace("light","dark")):!e&&t.indexOf("dark")>-1&&(s=!0,t=t.replace("dark","light")),s&&(Object(Y["h"])(t),setTimeout((function(){window.location.reload()}),500))},isMobileSearch:function(e){e?document.addEventListener("click",this.handleDocumentforMobileSearch):document.removeEventListener("click",this.handleDocumentforMobileSearch)}}},te=ee,se=Object(f["a"])(te,_,C,!1,null,null,null),ne=se.exports,ie=function(){var e=this;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"page-footer"},[t("div",{staticClass:"footer-content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("p",{staticClass:"mb-0 text-muted"},[e._v("ColoredStrategies 2019")])]),e._v(" "),t("div",{staticClass:"col-sm-6 d-none d-sm-block"},[t("ul",{staticClass:"breadcrumb pt-0 pr-0 float-right"},[t("li",{staticClass:"breadcrumb-item mb-0"},[t("a",{staticClass:"btn-link",attrs:{href:"#"}},[e._v("Review")])]),e._v(" "),t("li",{staticClass:"breadcrumb-item mb-0"},[t("a",{staticClass:"btn-link",attrs:{href:"#"}},[e._v("Purchase")])]),e._v(" "),t("li",{staticClass:"breadcrumb-item mb-0"},[t("a",{staticClass:"btn-link",attrs:{href:"#"}},[e._v("Docs")])])])])])])])])}],le={},ce=le,oe=Object(f["a"])(ce,ie,ae,!1,null,null,null),re=oe.exports,ue={components:{topnav:ne,sidebar:w,"footer-component":re},data:function(){return{show:!1}},computed:Object(c["a"])({},Object(u["c"])(["getMenuType"])),mounted:function(){setTimeout((function(){document.body.classList.add("default-transition")}),100)}},de=ue,me=Object(f["a"])(de,a,l,!1,null,null,null),he=me.exports,be={components:{"app-layout":he}},ve=be,pe=Object(f["a"])(ve,n,i,!1,null,null,null);t["default"]=pe.exports}}]);
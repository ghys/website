(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{589:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),n("p",[e._v("Bundles are named according to the following convention:")]),e._v(" "),e._m(11),n("p",[e._v("where")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"bundle-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bundle-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Bundle Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("a",{attrs:{href:"#console"}},[this._v("Karaf console")]),this._v(" offers various commands to manage bundles. Most of these commands are not needed in the normal (non-developer) use of openHAB. However some basic commands are needed when dealing with some expert user situations like testing a binding.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"list-bundles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-bundles","aria-hidden":"true"}},[this._v("#")]),this._v(" List Bundles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("em",[this._v("bundle:list")]),this._v(" command returns a list of all currently installed bundles including their version.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle:list\nSTART LEVEL 100 , List Threshold: 50\n ID | State    | Lvl | Version               | Name\n-----------------------------------------------------------------------------------------------------\n 10 | Active   |  80 | 2.3.0.201506221200    | JAX-RS Gson Provider\n 11 | Active   |  80 | 5.3.1.201602281253    | OSGi JAX-RS Connector\n 12 | Active   |  80 | 2.3.1                 | Gson\n 13 | Active   |  80 | 18.0.0                | Guava: Google Core Libraries for Java\n 14 | Active   |  80 | 3.0.0.v201312141243   | Google Guice (No AOP)\n...\n209 | Active   |  80 | 2.0.0.b3              | Network Binding\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"start-stop-bundles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-stop-bundles","aria-hidden":"true"}},[this._v("#")]),this._v(" Start/Stop Bundles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Stoping a bundle is done with the command "),t("em",[this._v("stop")]),this._v(" and the ID of the bundle:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle:stop 209\nopenhab> bundle:list\n...\n209 | Resolved |  80 | 2.0.0.b3              | Network Binding\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("em",[this._v("start")]),this._v(" command works accordingly:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle:start 209\nopenhab> bundle:list\n...\n209 | Active   |  80 | 2.0.0.b3              | Network Binding\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"naming-convention-for-bundles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naming-convention-for-bundles","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming Convention For Bundles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<prefix>-<type>-<id>\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("prefix")]),e._v(" is the first element to categorize the bundle.\nFor addons this is often "),n("code",[e._v("openhab")]),e._v(" or "),n("code",[e._v("esh")]),e._v(".")]),e._v(" "),n("li",[n("strong",[e._v("type")]),e._v(' is the add-on type, e.g. "binding" or "ui"')]),e._v(" "),n("li",[n("strong",[e._v("id")]),e._v(" is the identifier for this bundle")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The naming convention has many effects you may not have noticed before, but used already.\nFor example in the Paper UI the "),t("em",[this._v("sorted tabs")]),this._v(" for all bindings are generated automatically based on the bundle naming.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In many places (e.g. logging) you will also have the "),t("strong",[this._v("package namespace")]),this._v(" as an identifier.\nYou can find it as the "),t("em",[this._v("Symbolic name")]),this._v(" of the bundle with the following command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle:list -s\n ID | State    | Lvl | Version                | Name                        | Symbolic name\n-----------------------------------------------------------------------------------------------------------------------\n...\n209 | Active   |  80 | 2.1.0                  | Network Binding             | org.openhab.binding.network\n")])])])}],!1,null,null,null);a.options.__file="bundles.md";t.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{559:function(e,t,i){"use strict";i.r(t);var s=i(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Many devices, technologies and systems can be automatically discovered on the network or browsed through some API. It therefore makes a lot of sense to use these features for a smart home solution.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("Discovery results can either be ignored or approved, where in the latter case a thing is created for them and they become available in the application. If an entry is ignored, it will be hidden in the inbox without creating a thing for it.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("If the manual acceptence of discovery results by the user is not wished, it is possible to turn on the auto-approval feature of the inbox.\nIn this case, every new entry gets automatically approved immediately (unless it has been marked as ignored as a duplicate).")]),e._v(" "),e._m(8),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"thing-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Discovery")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In Eclipse SmartHome bindings therefore implement "),i("em",[e._v("Discovery Services")]),e._v(" for things, which provide "),i("em",[e._v("Discovery Results")]),e._v(". All "),i("em",[e._v("Discovery Results")]),e._v(" are regarded as suggestions to the user and are put into the "),i("em",[e._v("inbox")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"background-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Background Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A couple of discovery services support automatic discovery in the background, while for others a scan needs to be triggered manually.\nServices that support background discovery usually have it enabled by default.\nIt is possible to override this setting and deactivate background discovery for individual services by setting "),t("code",[this._v("discovery.<serviceid>:background=false")]),this._v(", where "),t("code",[this._v("serviceid")]),this._v(" is usually identical to a binding id, e.g. the LIFX background discovery can be disabled through "),t("code",[this._v("discovery.lifx:background=false")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"inbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inbox","aria-hidden":"true"}},[this._v("#")]),this._v(" Inbox")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The inbox holds a list of all discovered things ("),t("code",[this._v("DiscoveryResult")]),this._v(") from all active discovery services. A discovery result represents a discovered thing of a specific thing type, that could be instantiated as a thing. The result usually contains properties that identify the discovered things further like IP address or a serial number. Each discovery result also has a timestamp when it was added to or updated in the inbox and it may also contain a time to live, indicating the time after which it is be automatically removed from the inbox.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Eclipse SmartHome offers a service to automatically ignore discovery results in the inbox, whenever a thing is created manually, that represents the same thing, as the respective discovery result would create.\nThis thing would either have the same thing UID or the value of its representation property is equal to the representation property's value in the discovery result.  This service is enabled by default but can be disabled by setting "),t("code",[this._v("org.eclipse.smarthome.inbox:autoIgnore=false")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"auto-approve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-approve","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto Approve")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The auto approval can be enabled by the setting "),t("code",[this._v("org.eclipse.smarthome.inbox:autoApprove=true")]),this._v("; the default is false.")])}],!1,null,null,null);r.options.__file="discovery.md";t.default=r.exports}}]);
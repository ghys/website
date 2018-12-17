(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{861:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The SNMP binding allows SNMP GET (polling) and SNMP SET (commanding), and the reception of SNMP TRAPs (asynchronous events). SNMP is often found in network equipment, and the binding can be used to ensure your network is operating correctly. The out binding can be used to configure network settings.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("The binding accepts Number, String and Switch items. Setting values is supported via Switch items and you can only set Integer values.")]),t._v(" "),s("p",[t._v("The syntax for the SNMP binding configuration string depending on whether you are using SNMP GET, SET or TRAP:")]),t._v(" "),s("p",[t._v("GET")]),t._v(" "),t._m(11),s("p",[t._v("SET")]),t._v(" "),t._m(12),s("p",[t._v("TRAP")]),t._v(" "),t._m(13),s("p",[t._v("where:")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("items/snmpdemo.items")]),t._v(" "),t._m(17),s("p",[t._v("The above configuration reads the state of the Power-over-Ethernet on a Netgear switch, and allow changing the state of the power. In this configuration, it allows reading back the status, and turning on and off the power of a powered WiFi Access Point. The String item shows the port description of a TP-Link Switch.")]),t._v(" "),s("p",[t._v("In case your Switch item stays uninitialized, you may need to add a mapping to translate the value (like 0 or 1) to ON and OFF.")]),t._v(" "),t._m(18),s("p",[t._v("transform/SwitchState.map")]),t._v(" "),t._m(19),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"snmp-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snmp-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" SNMP Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/snmp.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("community")]),t._v(" "),s("td",[t._v("public")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("default community for listening for traps (defaults to public).")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("162")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("listening port.  See "),s("a",{attrs:{href:"#binding-port"}},[t._v("Binding Port")]),t._v(" below.")])]),t._v(" "),s("tr",[s("td",[t._v("timeout")]),t._v(" "),s("td",[t._v("1500")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("timeout period (in milliseconds) when polling SNMP GET and SET requests.")])]),t._v(" "),s("tr",[s("td",[t._v("retries")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("number of retries before giving up. The retries will be sent every "),s("code",[t._v("timeout")]),t._v(" milliseconds. 0 means no retries.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"binding-port-workaround"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-port-workaround","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Port Workaround")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, the SNMP binding binds to localhost on port 162, which is the SNMP default port. However on "),e("code",[this._v("*")]),this._v("nix Systems this port can only be bound by privileged users (root, sudo). Since it's recommended to run openHAB as a non-privileged user, a "),e("code",[this._v("BindException")]),this._v(" will be thrown.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("As a workaround, one could forward all traps to a port of your choice using "),s("code",[t._v("snmptrapd")]),t._v(". You should install "),s("code",[t._v("snmptrapd")]),t._v(" somewhere on your network and run it under a privileged user.  (On Ubuntu, for example, it's part of the "),s("code",[t._v("snmpd")]),t._v(" package.)  "),s("code",[t._v("snmptrapd")]),t._v(" forwards all traps to the machine on which openHAB is listening.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("/etc/snmp/snmptrapd.conf")]),this._v(" should be enhanced like this")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("disableAuthorization yes\nforward default udp:<ip of openhab machine>:<port which is configured in openhab.cfg>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Don't forget to restart "),e("code",[this._v("snmpd")]),this._v(" after reconfiguring by issuing "),e("code",[this._v("/etc/init.d/snmpd restart")]),this._v(" (or equivalent, depending on your Linux distro).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('snmp="<[<address>:<community>:<oid>:<update>]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('snmp=">[<cmd>:<address>:<community>:<oid>:<value>]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('snmp="<[<address>:<community>:<oid>:0]"\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("<address>")]),t._v(" is the IP address[/Port] of the SNMP device. The Port is optional, the default value is 161")]),t._v(" "),s("li",[s("code",[t._v("<community>")]),t._v(" is the SNMP community string")]),t._v(" "),s("li",[s("code",[t._v("<oid>")]),t._v(" is the object ID to GET or SET")]),t._v(" "),s("li",[s("code",[t._v("<value>")]),t._v(" is the number to SET. This can only be an integer value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('snmp="<[192.168.2.111:public:.1.3.6.1.2.1.2.2.1.10.10:10000]"\nsnmp=">[OFF:192.168.2.111:private:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:2]"\nsnmp="<[192.168.2.111:public:.1.3.6.1.2.1.2.2.1.10.10:0]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Switch_POEState2")]),t._v("  "),s("span",{attrs:{class:"token string"}},[t._v('"PoE WiFi State  [%s]"')]),t._v("  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" snmp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"<[192.168.2.111:public:.1.3.6.1.4.1.4526.11.16.1.1.1.6.1.2:10000]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Switch_POEEnable2")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"PoE WiFi Enable [%s]"')]),t._v("  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" snmp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"<[192.168.2.111:public:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:10000] >[OFF:192.168.2.111:private:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:2] >[ON:192.168.2.111:private:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:1]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("switch1p01desc")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"switch1 port 01 description [%s]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" snmp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"<[192.168.3.222:public:.1.3.6.1.4.1.11863.1.1.3.2.1.1.1.1.2.1:10000]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Switch_POEEnable2")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"PoE WiFi Enable [%s]"')]),t._v("  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" snmp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"<[192.168.2.111:public:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:10000:MAP(SwitchState.map)] >[OFF:192.168.2.111:private:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:2] >[ON:192.168.2.111:private:.1.3.6.1.4.1.4526.11.16.1.1.1.3.1.2:1]"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("0=ON\n1=OFF\n-=undefined\n")])])])}],!1,null,null,null);a.options.__file="readme.md";e.default=a.exports}}]);
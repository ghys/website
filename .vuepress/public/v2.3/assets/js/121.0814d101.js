(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{862:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This binding enables support of sending and receiving FS20 messages via the CUL transport. You will need CULLite or similiar device from "),s("a",{attrs:{href:"http://busware.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("busware.de"),s("OutboundLink")],1),e._v(". This device needs to be flashed with the latest culfw firmware from "),s("a",{attrs:{href:"http://culfw.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("culfw.de"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("When using a serial port, you may need to add "),s("code",[e._v("-Dgnu.io.rxtx.SerialPorts=/dev/ttyACM0")]),e._v(" in your server startup.  Please consult the "),s("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),s("OutboundLink")],1),e._v(" for the latest information.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("You can use Switch items and Dimmer items with this binding. You need to know the house address and device address of the device you want to receive messages or send messages to. To find these addresses you can start openHAB in debug mode. The CUL transport will print all out all received messages.")]),e._v(" "),s("p",[e._v("A sample switch configuration looks like this")]),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),s("p",[e._v('Just write the last "words" together and you have the full address you need for your item (see above).')]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fs20-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs20-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" FS20 Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the "),t("code",[this._v("services/fs20.cfg")]),this._v(" file.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("device")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("in the form "),s("code",[e._v("serial:<device>")]),e._v(", where "),s("code",[e._v("<device>")]),e._v(" is a local serial port, or"),s("br"),e._v(" "),s("code",[e._v("network:<host>:<port>")]),e._v(", where "),s("code",[e._v("<host>")]),e._v(" is the host name or IP address and "),s("code",[e._v("<port>")]),e._v(" is the port number.  The "),s("code",[e._v("network")]),e._v(" option works with ser2net from a tuxnet device")])]),e._v(" "),s("tr",[s("td",[e._v("baudrate")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("one of 75, 110, 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200")])]),e._v(" "),s("tr",[s("td",[e._v("parity")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("one of EVEN, ODD, MARK, NONE, SPACE")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You may also need to add the "),t("code",[this._v("openhab")]),this._v(" user to the "),t("code",[this._v("dialout")]),this._v(" group.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To use a networked CUL device for FS20 from ser2net, this line in "),t("code",[this._v("/etc/ser2net.conf")]),this._v(" on the remote "),t("code",[this._v("<host>")]),this._v(" will publish the serial interface (replace /dev/ttySP1 with whatever is appropriate):")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("3333:raw:0:/dev/ttySP1:38400 8DATABITS NONE 1STOPBIT\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From the above, your "),t("code",[this._v("device")]),this._v(" property would be "),t("code",[this._v("network:<host>:3333")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),s("span",{attrs:{class:"token class-name"}},[e._v("WallSwitch1")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"Wandschalter 1"')]),e._v("  "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" fs20"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"C04B00"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("C04B")]),this._v(" is the house address and "),t("code",[this._v("00")]),this._v(" the device address. If you want to control switches or dimmers you can simply create you own house and device address. You can set such devices in a pairing mode and they will react to the first message they receive.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"coming-from-fhem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coming-from-fhem","aria-hidden":"true"}},[this._v("#")]),this._v(" Coming from FHEM?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the "),t("code",[this._v("fhem.cfg")]),this._v(" you find such statements:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("define AmbiLight FS20 c04b 01\n")])])])}],!1,null,null,null);i.options.__file="readme.md";t.default=i.exports}}]);
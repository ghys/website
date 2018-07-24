(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{578:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("This binding integrates JeeLink USB RF receivers and LaCrosseGateways.")]),t._m(1),s("p",[t._v("Binding should be compatible with JeeLink USB receivers and LaCrosseGateways. It supports connected LaCrosse temperature sensors as well as EC3000 sensors and PCA301 power monitoring wireless sockets.")]),t._m(2),s("p",[t._v("This binding supports:")]),t._m(3),t._m(4),s("p",[t._v("Configuration of the binding is not needed.")]),t._m(5),s("p",[t._v("Only sensor discovery is supported, the thing for the USB receiver / LaCrosseGateway has to be created manually. Pay attention to use the correct serial port, as otherwise the binding may interfere with other bindings accessing serial ports.")]),s("p",[t._v("Afterwards, discovery reads from the USB receiver / LaCrosseGateways to find out which sensors are currently connected.\nIt then creates a thing for every unknown sensor and puts it in the Inbox.")]),s("p",[t._v("Discovery only creates things for sensors that actually send a value during discovery. LaCrosse temperature sensors send values every few seconds, so that they are normally caught by the discovery. In rare cases, a second discovery run is needed.")]),s("p",[t._v("PCA301 sockets are polled every 120 seconds by default. This results in sockets not being found by the discovery. In order to make sure the socket is discovered, press the button on the socket during discovery (and make sure you have paired the socket to the USB stick / LaCrosseGateway before by pressing the button for 3 seconds while the receiver is powered).")]),t._m(6),t._m(7),t._m(8),s("p",[t._v("The available init commands depend on the sketch that is running on the USB stick / LaCrosseGateway.")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),s("p",[t._v("A typical thing configuration for PCA301 looks like this:")]),t._m(28),s("p",[t._v("A typical thing configuration for EC3000 looks like this:")]),t._m(29),s("p",[t._v("A typical Thing configuration for lacrosse looks like this:")]),t._m(30),s("p",[t._v("A typical item configuration for a LaCrosse temperature sensor looks like this:")]),t._m(31),s("p",[t._v("A typical item configuration for a PCA301 power monitoring wireless sockets looks like this:")]),t._m(32),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"jeelink-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jeelink-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Jeelink Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("JeeLink (connected to USB)")]),e("li",[this._v("JeeLink (connected over TCP)")]),e("li",[this._v("LaCrosseGateway (connected to USB)")]),e("li",[this._v("LaCrosseGateway (connected over TCP)")]),e("li",[this._v("LaCrosse Temperature Sensors")]),e("li",[this._v("EC3000 Power Monitors")]),e("li",[this._v("PCA301 power monitoring wireless sockets")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"jeelink-lacrossegateway-connected-to-usb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jeelink-lacrossegateway-connected-to-usb","aria-hidden":"true"}},[this._v("#")]),this._v(" JeeLink / LaCrosseGateway (connected to USB)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("Serial Port")]),s("td",[t._v("String")]),s("td",[t._v("The serial port name for the USB receiver / LaCrosseGateway. Valid values are e.g. COM1 for Windows and /dev/ttyS0 or /dev/ttyUSB0 for Linux")])]),s("tr",[s("td",[t._v("Baud Rate")]),s("td",[t._v("Number")]),s("td",[t._v("The baud rate of the USB Receiver. Valid values are 9600, 19200, 38400, 57600 (default), and 115200")])]),s("tr",[s("td",[t._v("Init Commands")]),s("td",[t._v("String")]),s("td",[t._v('A semicolon separated list of init commands that will be send to the Jeelink / LaCrosseGateway, e.g. "0a" for disabling the LED')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"jeelink-lacrossegateway-connected-over-tcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jeelink-lacrossegateway-connected-over-tcp","aria-hidden":"true"}},[this._v("#")]),this._v(" JeeLink / LaCrosseGateway (connected over TCP)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("IP Address")]),s("td",[t._v("String")]),s("td",[t._v("The IP address of the Server to which the USB Receiver is connected, or the IP address of the LaCrosseGateway")])]),s("tr",[s("td",[t._v("TCP Port")]),s("td",[t._v("Number")]),s("td",[t._v("The TCP port over which the serial port is made available, or the LaCrosseGateway port (which usually is 81)")])]),s("tr",[s("td",[t._v("Init Commands")]),s("td",[t._v("String")]),s("td",[t._v('A semicolon separated list of init commands that will be send to the Jeelink / LaCrosseGateway, e.g. "0a" for disabling the LED')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"lacrosse-temperature-sensors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lacrosse-temperature-sensors","aria-hidden":"true"}},[this._v("#")]),this._v(" LaCrosse temperature sensors")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("Sensor ID")]),s("td",[t._v("Number")]),s("td",[t._v("The ID of the connected sensor")])]),s("tr",[s("td",[t._v("Sensor Timeout")]),s("td",[t._v("Number")]),s("td",[t._v("The amount of time in seconds that should result in OFFLINE status when no readings have been received from the sensor")])]),s("tr",[s("td",[t._v("Update Interval")]),s("td",[t._v("Number")]),s("td",[t._v("The update interval in seconds how often value updates are propagated. A value of 0 leads to propagation of every value")])]),s("tr",[s("td",[t._v("Buffer Size")]),s("td",[t._v("Number")]),s("td",[t._v("The number of readings used for computing the rolling average")])]),s("tr",[s("td",[t._v("Lower Temperature Limit")]),s("td",[t._v("Decimal")]),s("td",[t._v("The lowest allowed valid temperature. Lower temperature readings will be ignored")])]),s("tr",[s("td",[t._v("Upper Temperature Limit")]),s("td",[t._v("Decimal")]),s("td",[t._v("The highest allowed valid temperature. Higher temperature readings will be ignored")])]),s("tr",[s("td",[t._v("Maximum allowed difference")]),s("td",[t._v("Decimal")]),s("td",[t._v("The maximum allowed difference from a value to the previous value (0 disables this check). If the difference is higher, the reading will be ignored.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ec3000-power-monitors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ec3000-power-monitors","aria-hidden":"true"}},[this._v("#")]),this._v(" EC3000 power monitors")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("Sensor ID")]),s("td",[t._v("Number")]),s("td",[t._v("The ID of the connected sensor")])]),s("tr",[s("td",[t._v("Sensor Timeout")]),s("td",[t._v("Number")]),s("td",[t._v("The amount of time in seconds that should result in OFFLINE status when no readings have been received from the sensor")])]),s("tr",[s("td",[t._v("Update Interval")]),s("td",[t._v("Number")]),s("td",[t._v("The update interval in seconds how often value updates are propagated. A value of 0 leads to propagation of every value")])]),s("tr",[s("td",[t._v("Buffer Size")]),s("td",[t._v("Number")]),s("td",[t._v("The number of readings used for computing the rolling average")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pca301-power-monitoring-wireless-sockets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pca301-power-monitoring-wireless-sockets","aria-hidden":"true"}},[this._v("#")]),this._v(" PCA301 power monitoring wireless sockets")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("Sensor ID")]),s("td",[t._v("Number")]),s("td",[t._v("The ID of the connected sensor")])]),s("tr",[s("td",[t._v("Sensor Timeout")]),s("td",[t._v("Number")]),s("td",[t._v("The amount of time in seconds that should result in OFFLINE status when no readings have been received from the sensor")])]),s("tr",[s("td",[t._v("Retry Count")]),s("td",[t._v("Number")]),s("td",[t._v("The number of times a switch command will be resent to the socket until giving up")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"lacrosse-temperature-sensors-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lacrosse-temperature-sensors-2","aria-hidden":"true"}},[this._v("#")]),this._v(" LaCrosse temperature sensors")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("temperature")]),s("td",[t._v("Number")]),s("td",[t._v("Temperature reading")])]),s("tr",[s("td",[t._v("humidity")]),s("td",[t._v("Number")]),s("td",[t._v("Humidity reading")])]),s("tr",[s("td",[t._v("batteryNew")]),s("td",[t._v("Contact")]),s("td",[t._v("Whether the battery is new (CLOSED) or not (OPEN)")])]),s("tr",[s("td",[t._v("batteryLow")]),s("td",[t._v("Contact")]),s("td",[t._v("Whether the battery is low (CLOSED) or not (OPEN)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ec3000-power-monitors-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ec3000-power-monitors-2","aria-hidden":"true"}},[this._v("#")]),this._v(" EC3000 power monitors")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("currentWatt")]),s("td",[t._v("Number")]),s("td",[t._v("Instantaneous power in Watt")])]),s("tr",[s("td",[t._v("maxWatt")]),s("td",[t._v("Number")]),s("td",[t._v("Maximum load power in Watt")])]),s("tr",[s("td",[t._v("consumptionTotal")]),s("td",[t._v("Number")]),s("td",[t._v("Total energy  consumption")])]),s("tr",[s("td",[t._v("applianceTime")]),s("td",[t._v("Number")]),s("td",[t._v("Total electrical appliance operating time in hours")])]),s("tr",[s("td",[t._v("sensorTime")]),s("td",[t._v("Number")]),s("td",[t._v("Total turn on time of power monitor in hours")])]),s("tr",[s("td",[t._v("resets")]),s("td",[t._v("Number")]),s("td",[t._v("Number of resets")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pca301-power-monitoring-wireless-sockets-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pca301-power-monitoring-wireless-sockets-2","aria-hidden":"true"}},[this._v("#")]),this._v(" PCA301 power monitoring wireless sockets")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("switchingState")]),s("td",[t._v("Switch")]),s("td",[t._v("Whether the sockets are currently switched on or off")])]),s("tr",[s("td",[t._v("currentWatt")]),s("td",[t._v("Number")]),s("td",[t._v("Instantaneous power in Watt")])]),s("tr",[s("td",[t._v("consumptionTotal")]),s("td",[t._v("Number")]),s("td",[t._v("Total energy consumption")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pca301-power-monitoring-wireless-sockets-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pca301-power-monitoring-wireless-sockets-3","aria-hidden":"true"}},[this._v("#")]),this._v(" PCA301 power monitoring wireless sockets")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Channel Type ID")]),e("th",[this._v("Item Type")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("switchingState")]),e("td",[this._v("Switch")]),e("td",[this._v("Supports ON and OFF commands to switch the socket.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("pca301")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jeelink pca301"')]),t._v(" @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" serialPort"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyUSB0"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("pca301"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("160")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("236")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"ec3k 1"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jeelink"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("pca301"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" sensorId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"1-160-236"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ec3k")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jeelink ec3k"')]),t._v(" @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" serialPort"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"COM4"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ec3k"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0E3D")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"ec3k 1"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jeelink"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("ec3k"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" sensorId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"0E3D"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ec3k"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("14E7")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"ec3k 2"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jeelink"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("ec3k"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" sensorId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"14E7"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lacrosse")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jeelink lacrosse"')]),t._v(" @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" serialPort"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"COM6"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lacrosse"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sensor1")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jeelink lacrosse 1"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jeelink"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("lacrosse"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" sensorId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"16"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minTemp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxTemp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("jeelink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lacrosse"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sensor2")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jeelink lacrosse 2"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jeelink"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("jeelinkUsb"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("lacrosse"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  @ "),s("span",{attrs:{class:"token string"}},[t._v('"home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" sensorId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"18"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minTemp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxTemp"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("32")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Humidty_LR")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Living Room"')]),s("span",{attrs:{class:"token function"}},[t._v(" <humidity>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:lacrosse:42:humidity"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Temperature_LR")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Living Room"')]),s("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:lacrosse:42:temperature"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Battery_Low_LR")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Battery Low Living Room"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:lacrosse:42:batteryLow"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Battery_New_LR")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Battery New Living Room"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:lacrosse:42:batteryLow"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SocketSwitch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:pca301:1-160-236:switchingState"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SocketWattage")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:pca301:1-160-236:currentWatt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SocketConsumption")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"jeelink:pca301:1-160-236:consumptionTotal"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{579:function(t,e,r){"use strict";r.r(e);var i=r(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("The openHAB CUPS binding allows interaction with printers and their print queues via a CUPS server.")]),t._v(" "),r("p",[t._v("There is also a binding specifically for openHAB 2 "),r("router-link",{attrs:{to:"/addons/bindings/ipp/"}},[t._v("here")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("To set up this binding, it is necessary to know the names of the printers registered with the CUPS server.")]),t._v(" "),r("p",[t._v("One way to get this information is to download the current "),r("code",[t._v("cups4j.runnable-x.x.x.jar")]),t._v(" file from "),r("a",{attrs:{href:"http://www.cups4j.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cups4j.org/"),r("OutboundLink")],1),t._v(" and query the printers by using the following command")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("Each item binding should have this format:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("ul",[t._m(11),t._v(" "),r("li",[r("p",[t._v('Number  Print_Jobs_Completed   "Completed print jobs"   (FF_Office)   { cups="'),r("a",{attrs:{href:"http://127.0.0.1:631/printers/MX-870",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:631/printers/MX-870"),r("OutboundLink")],1),t._v('" }')])])]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("The CUPS Binding can be used to switch on a printer if there are print jobs in the queue and switch it off if the queue is empty.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cups-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cups-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" CUPS Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("java -jar cups4j.runnable-x.x.x.jar -h <CUPS server name> getPrinters\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/cups.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("host")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),r("td",[t._v("The hostname or IP address of the CUPS server")])]),t._v(" "),r("tr",[r("td",[t._v("port")]),t._v(" "),r("td",[t._v("631")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("The port used to connect to the CUPS server")])]),t._v(" "),r("tr",[r("td",[t._v("refresh")]),t._v(" "),r("td",[t._v("60000")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("The refresh interval (in milliseconds)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('    cups="<printerName>[#whichJobs]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<printerName>")]),this._v(" is the name or URL of the printer, as registered with the CUPS server.\n"),e("code",[this._v("whichJobs")]),this._v(" has a default value of NOT_COMPLETED; possible values are:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("NOT_COMPLETED")]),this._v(" "),e("li",[this._v("COMPLETED")]),this._v(" "),e("li",[this._v("ALL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v('Number  Print_Jobs_Queued   "Unfinished print jobs"   (FF_Office)   { cups="MX-870#NOT_COMPLETED" }')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-use-case"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-use-case","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Use Case")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('Number Print_Jobs_Queued  "Unfinished print jobs"  (FF_Office)   { cups="MX-870#NOT_COMPLETED" }\nSwitch Printer            "Printer"\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('import org.openhab.model.script.actions.Timer\n\nvar Timer printerTimer = null\n\nrule "CUPS-Printer Queue"\nwhen\n\tItem Print_Jobs_Queued changed\nthen\n\tif (Print_Jobs_Queued.state>0) {\n\t\tif (printerTimer!=null) {\n\t\t\tprinterTimer.cancel\n\t\t\tprinterTimer=null\n\t\t}\n\t\tif (Printer.state==OFF) {\n\t\t\tsendCommand(Printer,ON)\n\t\t}\n\t}\n\telse if (Printer.state==ON) {\n\t\tprinterTimer = createTimer(now.plusMinutes(5)) [|\n\t\t\tsendCommand(Printer,OFF)\n\t\t]\n\t}\nend\n')])])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);
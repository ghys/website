(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{749:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("AddonLogo"),e._v(" "),n("p",[n("a",{attrs:{href:"http://owntracks.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OwnTracks"),n("OutboundLink")],1),e._v(", formerly known as "),n("em",[e._v("MQTTitude")]),e._v(", was developed as a replacement for the old Google Latitude service. However it is slightly different (better) in that all your location data is private - i.e. there is no 3rd party server somewhere collecting and storing your data. Instead each time your device publishes its location, it is sent to an "),n("a",{attrs:{href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT"),n("OutboundLink")],1),e._v(" broker of your choice.")]),e._v(" "),n("p",[e._v("This is where openHAB steps in, with the Mqttitude binding. The idea is that the binding will track your location and when you are 'near' to a specified location (usually your home) it will update a Switch item in openHAB, enabling presence detection.")]),e._v(" "),n("p",[e._v("First you need to set up an MQTT broker (e.g. "),n("a",{attrs:{href:"http://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mosquitto"),n("OutboundLink")],1),e._v(") and install the "),n("a",{attrs:{href:"http://owntracks.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OwnTracks"),n("OutboundLink")],1),e._v(" app on your mobile devices. At this point you should start seeing location updates appearing in your broker.")]),e._v(" "),n("p",[e._v("NOTE: from openHAB v1.7 the Mqttitude binding will support both the old and new versions of the "),n("a",{attrs:{href:"http://owntracks.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OwnTracks"),n("OutboundLink")],1),e._v(" apps. Please see the OwnTracks documentation for more details about the different versions. As of now (18 April 2015) the new versions of the app have not been released.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Now it is time to configure the MQTT and the Mqttitude bindings...")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("First you will need to install and configure the MQTT binding. This will define the connection properties for your MQTT broker and specify the broker ID which we will need when configuring the Mqttitude item bindings.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("There are two modes of operation for the Mqttitude binding. Note: you can have item bindings which are mixture of these two modes.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("The second mode leaves the geofence definition and relative location calculations to the OwnTracks app itself. You can setup any number of 'regions' or 'waypoints' in your app and give them unique descriptions. Then in openHAB you simply add the region/waypoint description (optional third parameter of the item binding) and the binding will look for 'enter' or 'leave' events which are published by the app and switch the openHAB item accordingly. This allows you to define as many 'regions' or 'waypoints' as you like, and track a phones location relative to many points of interest - e.g. home, work, holiday house.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("You only need to define these properties in your "),n("code",[e._v("services/mqttitude.cfg")]),e._v(" configuration file if you are using one or more 'Manual Mode' item bindings. In this mode you need to let the binding know exactly where 'home' is and the size of your "),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Geo-fence",target:"_blank",rel:"noopener noreferrer"}},[e._v("geofence"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Here is an example;")]),e._v(" "),e._m(10),e._m(11),e._v(" "),n("p",[e._v("To track the location/presence of a mobile device all you need to do is add a Switch item and specify the MQTT topic that device publishes its location to.")]),e._v(" "),n("p",[e._v("The binding definition for the two modes of operation are;")]),e._v(" "),n("p",[e._v("Manual Mode:")]),e._v(" "),e._m(12),n("p",[e._v("Region Mode (old):")]),e._v(" "),e._m(13),n("p",[e._v("Region Mode (new):")]),e._v(" "),e._m(14),e._m(15),e._v(" "),n("p",[e._v("Here is an example of some 'Manual Mode' item bindings;")]),e._v(" "),e._m(16),n("p",[e._v("You can track as many different mobile devices as you like, on the one MQTT broker, just by using a different MQTT topic for each. This is configured in the OwnTracks apps on your mobile devices.")]),e._v(" "),n("p",[e._v("When a device publishes a location the binding will receive it instantly, calculate the distance from your 'home' location, and if inside the 'geofence' radius set the Switch item to ON.")]),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("Here is an example of some 'Region Mode' item bindings;")]),e._v(" "),e._m(18),n("p",[e._v("And for the new versions of the OwnTracks apps;")]),e._v(" "),e._m(19),n("p",[e._v("Here you can setup as many 'regions' or 'waypoints' as you like in your OwnTracks app and track each one in openHAB by creating a different item for each, with the region description as the optional third parameter in the item binding.")]),e._v(" "),n("p",[e._v("This is a far more powerful mode and gives greater flexibility. It also stops the issue of location publishes happening just before you get close enough to 'home' and thus being considered outside the geofence, and then no further updates being sent because you don't move far enough to trigger one.")]),e._v(" "),n("p",[e._v("In 'Region Mode' the OwnTracks apps detects when you cross a geofence boundary and ALWAYS sends a location update (either enter or leave), meaning openHAB should never lose track of your position.")]),e._v(" "),n("p",[e._v("All regions/waypoints configured in the OwnTracks apps must to be set as 'Shared' as otherwise the description field is not sent, which the binding needs to match to an item.")]),e._v(" "),e._m(20),e._v(" "),n("p",[e._v("Due to power management policies, OwnTracks on iPhone running in the background is only updating the location roughly every 10 minutes and sometimes even longer. This is blocking for many use cases that need timing wise short response.")]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"owntracks-formerly-mqttitude-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#owntracks-formerly-mqttitude-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" OwnTracks (formerly MQTTitude) Binding")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Platform")]),e._v(" "),n("th",[e._v("Old")]),e._v(" "),n("th",[e._v("New")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("iOS")]),e._v(" "),n("td",[e._v("< v8.0")]),e._v(" "),n("td",[e._v(">= v8.0")])]),e._v(" "),n("tr",[n("td",[e._v("Android")]),e._v(" "),n("td",[e._v("< v5.0")]),e._v(" "),n("td",[e._v(">= v5.0")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Where the 'new' versions will publish lat/lon values as floats (rather than strings) and region enter/leave events are published to a "),t("code",[this._v("/event")]),this._v(" sub topic (see below for details).  As of 1 June 2016, the current version of the OwnTracks mobile app is 9.1.5 (iOS) and 0.6.14 (Android).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"broker-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Broker Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"manual-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual Mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The first is a manual calculation of your position relative to a single fixed 'home' geofence. In this mode you specify the 'home' geofence in your "),t("code",[this._v("services/mqttitude.cfg")]),this._v(" file and then configure your item bindings to watch for location publishes from the OwnTracks app. As each location update is received the binding will calculate the distance from 'home' and update the item (ON/OFF) accordingly.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"region-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#region-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Region Mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("NOTE: if you are using the latest versions of the OwnTracks apps you will need to append "),t("code",[this._v("/event")]),this._v(" to your MQTT topic as the apps now publish the 'enter'/'leave' events to this sub-topic, rather than the base location topic.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"services-mqttitude-cfg-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services-mqttitude-cfg-config","aria-hidden":"true"}},[this._v("#")]),this._v(" services/mqttitude.cfg Config")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# Optional. The lat/lon coordinates of 'home'\nhome.lat=xxx.xxxxx\nhome.lon=xxx.xxxxx\n\n# Optional. Distance in metres from 'home' to be considered 'present'\ngeofence=100`\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ mqttitude="<broker_id>:<mqtt_topic>" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ mqttitude="<broker_id>:<mqtt_topic>:<region_description>" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ mqttitude="<broker_id>:<mqtt_topic>/event:<region_description>" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"manual-mode-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-mode-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual Mode")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),n("span",{attrs:{class:"token class-name"}},[e._v("PresenceBen_PhoneMqtt")]),e._v("   "),n("span",{attrs:{class:"token string"}},[e._v('"Ben @ Home"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mqttitude"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"mosquitto:owntracks/ben"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),n("span",{attrs:{class:"token class-name"}},[e._v("PresenceSam_PhoneMqtt")]),e._v("   "),n("span",{attrs:{class:"token string"}},[e._v('"Sam @ Home"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mqttitude"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"mosquitto:owntracks/sam"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"region-mode-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#region-mode-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Region Mode")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),n("span",{attrs:{class:"token class-name"}},[e._v("PresenceBen_PhoneMqttHome")]),e._v("   "),n("span",{attrs:{class:"token string"}},[e._v('"Ben @ Home"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mqttitude"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"mosquitto:owntracks/ben:home"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),n("span",{attrs:{class:"token class-name"}},[e._v("PresenceBen_PhoneMqttWork")]),e._v("   "),n("span",{attrs:{class:"token string"}},[e._v('"Ben @ Work"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mqttitude"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"mosquitto:owntracks/ben:work"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("  "),n("span",{attrs:{class:"token class-name"}},[e._v("PresenceBen_PhoneMqttHome")]),e._v("   "),n("span",{attrs:{class:"token string"}},[e._v('"Ben @ Home"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mqttitude"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"mosquitto:owntracks/ben/event:home"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"iphone-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iphone-considerations","aria-hidden":"true"}},[this._v("#")]),this._v(" iPhone considerations")])}],!1,null,null,null);s.options.__file="readme.md";t.default=s.exports}}]);
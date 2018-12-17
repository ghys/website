(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{605:function(t,e,r){"use strict";r.r(e);var _=r(0),v=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("The openHAB EcoTouch binding allows interaction with a heat pump.")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Make sure the display unit of the heat pump is connected to the network and\nthat the network settings are configured. By default, the heat pump uses DHCP.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("The binding configuration format is simple and looks like this:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v('Heatpump event type "state" can be mapped to strings. Different heatpump models seem to have slightly different state values.\nMappings for the Ai1 Geo have been copied from '),r("a",{attrs:{href:"http://www.haustechnikdialog.de/Forum/t/173357/Waterkotte-via-Ethernet-OpenHAB-und-Android-App?page=6",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("The following charts are created via the rrd4j chart and heatpump bundle.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ecotouch-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ecotouch-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" EcoTouch Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/ecotouch.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ip")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),r("td",[t._v("ip or DNS name of the heat pump")])]),t._v(" "),r("tr",[r("td",[t._v("username")]),t._v(" "),r("td",[t._v("waterkotte")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("username for login")])]),t._v(" "),r("tr",[r("td",[t._v("password")]),t._v(" "),r("td",[t._v("waterkotte")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("password for login")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("NOTE: Since Waterkotte Display software version 1.6.xx, the username/password\ndefault value is "),e("code",[this._v("waterkotte")]),this._v(". Prior to that, the username default was "),e("code",[this._v("admin")]),this._v("\nand the password default was "),e("code",[this._v("wtkadmin")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('ecotouch="<eventType>"\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<eventType>")]),this._v(" is one of the following values:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Description")]),t._v(" "),r("th",[r("code",[t._v("<eventType>")])]),t._v(" "),r("th",[t._v("ItemClass")]),t._v(" "),r("th",[t._v("Write")]),t._v(" "),r("th",[t._v("Notes")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Außentemperatur")]),t._v(" "),r("td",[t._v("temperature_outside")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Außentemperatur gemittelt über 1h")]),t._v(" "),r("td",[t._v("temperature_outside_1h")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Außentemperatur gemittelt über 24h")]),t._v(" "),r("td",[t._v("temperature_outside_24h")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Quelleneintrittstemperatur")]),t._v(" "),r("td",[t._v("temperature_source_in")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Geo only")])]),t._v(" "),r("tr",[r("td",[t._v("Quellenaustrittstemperatur")]),t._v(" "),r("td",[t._v("temperature_source_out")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Geo only")])]),t._v(" "),r("tr",[r("td",[t._v("Umgebungstemperatur")]),t._v(" "),r("td",[t._v("temperature_surrounding")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Air only")])]),t._v(" "),r("tr",[r("td",[t._v("Verdampfungstemperatur")]),t._v(" "),r("td",[t._v("temperature_evaporation")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sauggastemperatur")]),t._v(" "),r("td",[t._v("temperature_suction")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Geo only")])]),t._v(" "),r("tr",[r("td",[t._v("Sauggas")]),t._v(" "),r("td",[t._v("temperature_suction_air")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Air only")])]),t._v(" "),r("tr",[r("td",[t._v("Ölsumpf")]),t._v(" "),r("td",[t._v("temperature_sump")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Ai1 Air only")])]),t._v(" "),r("tr",[r("td",[t._v("Verdampfungsdruck")]),t._v(" "),r("td",[t._v("pressure_evaporation")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Temperatur Rücklauf Soll")]),t._v(" "),r("td",[t._v("temperature_return_set")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Temperatur Rücklauf")]),t._v(" "),r("td",[t._v("temperature_return")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Temperatur Vorlauf")]),t._v(" "),r("td",[t._v("temperature_flow")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Kondensationstemperatur")]),t._v(" "),r("td",[t._v("temperature_condensation")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Kondensationsdruck")]),t._v(" "),r("td",[t._v("pressure_condensation")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Speichertemperatur")]),t._v(" "),r("td",[t._v("temperature_storage")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Raumtemperatur")]),t._v(" "),r("td",[t._v("temperature_room")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Raumtemperatur gemittelt über 1h")]),t._v(" "),r("td",[t._v("temperature_room_1h")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Warmwassertemperatur")]),t._v(" "),r("td",[t._v("temperature_water")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Pooltemperatur")]),t._v(" "),r("td",[t._v("temperature_pool")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Solarkollektortemperatur")]),t._v(" "),r("td",[t._v("temperature_solar")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Solarkreis Vorlauf")]),t._v(" "),r("td",[t._v("temperature_solar_flow")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Ventilöffnung elektrisches Expansionsventil %")]),t._v(" "),r("td",[t._v("position_expansion_valve")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("elektrische Leistung Verdichter")]),t._v(" "),r("td",[t._v("power_compressor")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("abgegebene thermische Heizleistung der Wärmepumpe")]),t._v(" "),r("td",[t._v("power_heating")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("abgegebene thermische KälteLeistung der Wärmepumpe")]),t._v(" "),r("td",[t._v("power_cooling")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("COP Heizleistung")]),t._v(" "),r("td",[t._v("cop_heating")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("COP Kälteleistung")]),t._v(" "),r("td",[t._v("cop_cooling")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Aktuelle Heizkreistemperatur")]),t._v(" "),r("td",[t._v("temperature_heating_return")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Geforderte Temperatur im Heizbetrieb")]),t._v(" "),r("td",[t._v("temperature_heating_set")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwertvorgabe Heizkreistemperatur")]),t._v(" "),r("td",[t._v("temperature_heating_set2")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Aktuelle Kühlkreistemperatur")]),t._v(" "),r("td",[t._v("temperature_cooling_return")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Geforderte Temperatur im Kühlbetrieb")]),t._v(" "),r("td",[t._v("temperature_cooling_set")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwertvorgabe Kühlbetrieb")]),t._v(" "),r("td",[t._v("temperature_cooling_set2")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwert Warmwassertemperatur")]),t._v(" "),r("td",[t._v("temperature_water_set")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwertvorgabe Warmwassertemperatur")]),t._v(" "),r("td",[t._v("temperature_water_set2")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwert Poolwassertemperatur")]),t._v(" "),r("td",[t._v("temperature_pool_set")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Sollwertvorgabe Poolwassertemperatur")]),t._v(" "),r("td",[t._v("temperature_pool_set2")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("geforderte Verdichterleistung")]),t._v(" "),r("td",[t._v("compressor_power")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("% Heizungsumwälzpumpe")]),t._v(" "),r("td",[t._v("percent_heat_circ_pump")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("% Quellenpumpe")]),t._v(" "),r("td",[t._v("percent_source_pump")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("% Leistung Verdichter")]),t._v(" "),r("td",[t._v("percent_compressor")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Heizkurve - Norm-Aussen-Temp (Auslegungstemp)")]),t._v(" "),r("td",[t._v("nviNormAussen")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Heizkurve - Temp Heizkreis bei Auslegungstemp")]),t._v(" "),r("td",[t._v("nviHeizkreisNorm")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Heizkurve - Temp Heizgrenze")]),t._v(" "),r("td",[t._v("nviTHeizgrenze")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Heizkurve - Temp Heizkreis Heizgrenze")]),t._v(" "),r("td",[t._v("nviTHeizgrenzeSoll")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Heizkurve - max. VL-Temp")]),t._v(" "),r("td",[t._v("maxVLTemp")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Kühlen Einschalt-Aussentemp")]),t._v(" "),r("td",[t._v("coolEnableTemp")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("geforderte Kühltemperatur")]),t._v(" "),r("td",[t._v("nviSollKuehlen")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Firmware-Version Regler")]),t._v(" "),r("td",[t._v("version_controller")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Build-Nr. Regler")]),t._v(" "),r("td",[t._v("version_controller_build")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Bios-Version Regler")]),t._v(" "),r("td",[t._v("version_bios")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Datum: Tag")]),t._v(" "),r("td",[t._v("date_day")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Datum: Monat")]),t._v(" "),r("td",[t._v("date_month")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Datum: Jahr")]),t._v(" "),r("td",[t._v("date_year")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Uhrzeit: Stunde")]),t._v(" "),r("td",[t._v("time_hour")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Uhrzeit: Minute")]),t._v(" "),r("td",[t._v("time_minute")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Betriebsstunden Verdichter 1")]),t._v(" "),r("td",[t._v("operating_hours_compressor1")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Betriebsstunden Verdichter 2")]),t._v(" "),r("td",[t._v("operating_hours_compressor2")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Betriebsstunden Heizungsumwälzpumpe")]),t._v(" "),r("td",[t._v("operating_hours_circulation_pump")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Betriebsstunden Quellenpumpe")]),t._v(" "),r("td",[t._v("operating_hours_source_pump")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Betriebsstunden Solarkreis")]),t._v(" "),r("td",[t._v("operating_hours_solar")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Handabschaltung Heizbetrieb")]),t._v(" "),r("td",[t._v("enable_heating")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Handabschaltung Kühlbetrieb")]),t._v(" "),r("td",[t._v("enable_cooling")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Handabschaltung Warmwasserbetrieb")]),t._v(" "),r("td",[t._v("enable_warmwater")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Handabschaltung Pool_Heizbetrieb")]),t._v(" "),r("td",[t._v("enable_pool")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status der Wärmepumpenkomponenten")]),t._v(" "),r("td",[t._v("state")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("State as a number, see below for possible mapping.")])]),t._v(" "),r("tr",[r("td",[t._v("Status Quellenpumpe")]),t._v(" "),r("td",[t._v("state_sourcepump")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Heizungsumwälzpumpe")]),t._v(" "),r("td",[t._v("state_heatingpump")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Freigabe Regelung EDV / Magnetventil")]),t._v(" "),r("td",[t._v("state_evd")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Verdichter 1")]),t._v(" "),r("td",[t._v("state_compressor1")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Verdichter 2")]),t._v(" "),r("td",[t._v("state_compressor2")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status externer Wärmeerzeuger")]),t._v(" "),r("td",[t._v("state_extheater")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Alarmausgang")]),t._v(" "),r("td",[t._v("state_alarm")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Motorventil Kühlbetrieb")]),t._v(" "),r("td",[t._v("state_cooling")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Motorventil Warmwasser")]),t._v(" "),r("td",[t._v("state_water")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Motorventil Pool")]),t._v(" "),r("td",[t._v("state_pool")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status Solarbetrieb")]),t._v(" "),r("td",[t._v("state_solar")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Status 4-Wege-Ventil")]),t._v(" "),r("td",[t._v("state_cooling4way")]),t._v(" "),r("td",[t._v("switch")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Temperaturanpassung für die Heizung -2,0 / +2,0")]),t._v(" "),r("td",[t._v("adapt_heating")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("-2 bis +2 (0,5)---\x3e 0 bis 8")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Heizungspumpe")]),t._v(" "),r("td",[t._v("manual_heatingpump")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A) H= manuell ein (Handschaltung), 0= aus, A= Automatik")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Quellenpumpe")]),t._v(" "),r("td",[t._v("manual_sourcepump")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Solarpumpe 1")]),t._v(" "),r("td",[t._v("manual_solarpump1")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Solarpumpe 2")]),t._v(" "),r("td",[t._v("manual_solarpump2")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Speicherladepumpe")]),t._v(" "),r("td",[t._v("manual_tankpump")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Brauchwasserventil")]),t._v(" "),r("td",[t._v("manual_valve")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Poolventil")]),t._v(" "),r("td",[t._v("manual_poolvalve")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Kühlventil")]),t._v(" "),r("td",[t._v("manual_coolvalve")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Vierwegeventil")]),t._v(" "),r("td",[t._v("manual_4wayvalve")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])]),t._v(" "),r("tr",[r("td",[t._v("Handschaltung Multiausgang Ext.")]),t._v(" "),r("td",[t._v("manual_multiext")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("(H-0-A)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mappings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mappings","aria-hidden":"true"}},[this._v("#")]),this._v(" Mappings")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("State")]),t._v(" "),r("th",[t._v("Ai1 Geo")]),t._v(" "),r("th",[t._v("Ai1 Air")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("0")]),t._v(" "),r("td",[t._v("aus")]),t._v(" "),r("td",[t._v("aus")])]),t._v(" "),r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("nur Solepumpe 1")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("nur Heizkreispumpe 2")]),t._v(" "),r("td",[t._v("Standby")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("unbekannt")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("unbekannt")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("10")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Heizbetrieb")])]),t._v(" "),r("tr",[r("td",[t._v("15")]),t._v(" "),r("td",[t._v("Heizbetrieb")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("131")]),t._v(" "),r("td",[t._v("Naturkühlung")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("256")]),t._v(" "),r("td",[t._v("Vorlauf Warmwasser")]),t._v(" "),r("td",[t._v("Vorlauf Warmwasser")])]),t._v(" "),r("tr",[r("td",[t._v("258")]),t._v(" "),r("td",[t._v("Nachlauf Warmwasser")]),t._v(" "),r("td",[t._v("Nachlauf Warmwasser")])]),t._v(" "),r("tr",[r("td",[t._v("259")]),t._v(" "),r("td",[t._v("unbekannt 259 vor WW Bereitung")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("263")]),t._v(" "),r("td",[t._v("unbekannt 263 vor WW Bereitung")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("266")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Warmwasserbereitung")])]),t._v(" "),r("tr",[r("td",[t._v("271")]),t._v(" "),r("td",[t._v("Warmwasserbereitung")]),t._v(" "),r("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"items-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Items examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('/* Waterkotte EcoTouch heat pump DEMO */\nGroup Heatpump\nGroup Heatpump_outside\nGroup Heatpump_source\nGroup Heatpump_control\nGroup Heatpump_water\nGroup Heatpump_heating\nGroup Heatpump_power\nGroup Heatpump_state\nNumber Chart_Period "Chart Period"\nNumber HeatPump_Temperature_3   "Wärmepumpe Außentemperatur [%.1f °C]"   <temperature> (Heatpump,Heatpump_outside) { ecotouch="temperature_outside" }\nNumber HeatPump_Temperature_4   "Wärmepumpe Außentemperatur 1h [%.1f °C]"   <temperature> (Heatpump,Heatpump_outside) { ecotouch="temperature_outside_1h" }\nNumber HeatPump_Temperature_5   "Wärmepumpe Außentemperatur 24h [%.1f °C]"   <temperature> (Heatpump,Heatpump_outside) { ecotouch="temperature_outside_24h" }\nNumber HeatPump_Temperature_6   "Wärmepumpe Quelleneintrittstemperatur [%.1f °C]"   <temperature> (Heatpump,Heatpump_source) { ecotouch="temperature_source_in" }\nNumber HeatPump_Temperature_7   "Wärmepumpe Quellenaustrittstemperatur [%.1f °C]"   <temperature> (Heatpump,Heatpump_source) { ecotouch="temperature_source_out" }\nNumber HeatPump_Temperature_8   "Wärmepumpe Vorlauf [%.1f °C]"   <temperature> (Heatpump,Heatpump_control) { ecotouch="temperature_flow" }\nNumber HeatPump_Temperature_9   "Wärmepumpe Rücklauf [%.1f °C]"   <temperature> (Heatpump,Heatpump_control) { ecotouch="temperature_return" }\nNumber HeatPump_Temperature_10   "Wärmepumpe Rücklauf Soll [%.1f °C]"   <temperature> (Heatpump,Heatpump_control) { ecotouch="temperature_return_set" }\nNumber HeatPump_Temperature_11   "Wärmepumpe Warmwasser Ist [%.1f °C]"   <temperature> (Heatpump,Heatpump_water) { ecotouch="temperature_water" }\nNumber HeatPump_Temperature_12   "Wärmepumpe Warmwasser Soll [%.1f °C]"   <temperature> (Heatpump,Heatpump_water) { ecotouch="temperature_water_set" }\nNumber HeatPump_Temperature_13   "Wärmepumpe Warmwasser Soll2 [%.1f °C]"   <temperature> (Heatpump,Heatpump_water) { ecotouch="temperature_water_set2" }\nNumber HeatPump_Temperature_14   "Wärmepumpe Heizung Ist [%.1f °C]"   <temperature> (Heatpump,Heatpump_heating) { ecotouch="temperature_heating_return" }\nNumber HeatPump_Temperature_15   "Wärmepumpe Heizung Soll [%.1f °C]"   <temperature> (Heatpump,Heatpump_heating) { ecotouch="temperature_heating_set" }\nNumber HeatPump_Temperature_16   "Wärmepumpe Heizung Soll2 [%.1f °C]"   <temperature> (Heatpump,Heatpump_heating) { ecotouch="temperature_heating_set2" }\nNumber HeatPump_power_1   "Wärmepumpe elektrische Leistung [%.1f kW]"   <energy> (Heatpump,Heatpump_power) { ecotouch="power_compressor" }\nNumber HeatPump_power_2   "Wärmepumpe thermische Leistung [%.1f kW]"   <energy> (Heatpump,Heatpump_power) { ecotouch="power_heating" }\nNumber HeatPump_state            "Wärmepumpe Status [%i]"   <settings> (Heatpump) { ecotouch="state" }\nNumber HeatPump_state_sourcepump "Wärmepumpe Status Quellenpumpe [%i]"   <settings> (Heatpump,Heatpump_state) { ecotouch="state_sourcepump" }\nNumber HeatPump_state_heatingpump "Wärmepumpe Status Heizungsumwälzpumpe [%i]"   <settings> (Heatpump,Heatpump_state) { ecotouch="state_heatingpump" }\nNumber HeatPump_state_compressor1 "Wärmepumpe Status Kompressor [%i]"   <settings> (Heatpump,Heatpump_state) { ecotouch="state_compressor1" }\nNumber HeatPump_state_water      "Wärmepumpe Status Motorventil Warmwasser[%i]"   <settings> (Heatpump,Heatpump_state) { ecotouch="state_water" }\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sitemap-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('    Frame label="Waterkotte" {\n            Text item=HeatPump_Temperature_3 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_outside period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_outside period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_outside period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_6 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_source period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_source period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_source period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_7 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_source period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_source period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_source period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_8 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_control period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_control period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_control period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_9 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_control period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_control period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_control period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_10 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_control period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_control period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_control period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_11 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_water period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_water period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_water period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_12 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_water period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_water period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_water period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_13 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_water period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_water period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_water period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_14 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_heating period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_heating period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_heating period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_15 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_heating period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_heating period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_heating period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_Temperature_16 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_heating period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_heating period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_heating period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_power_1 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_power period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_power period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_power period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n            Text item=HeatPump_power_2 {\n                    Frame {\n                            Switch item=Chart_Period label="Chart Period" mappings=[0="Hour", 1="Day", 2="Week"]\n                            Chart item=Heatpump_power period=h refresh=60000 visibility=[Chart_Period==0, Chart_Period=="Uninitialized"]\n                            Chart item=Heatpump_power period=D refresh=60000 visibility=[Chart_Period==1]\n                            Chart item=Heatpump_power period=W refresh=60000 visibility=[Chart_Period==2]\n                    }\n            }\n    }\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"gallery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gallery","aria-hidden":"true"}},[this._v("#")]),this._v(" Gallery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/sibbi77/openhab/wiki/images/binding-ecotouch_chart1.png",alt:"outside temperature"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/sibbi77/openhab/wiki/images/binding-ecotouch_chart2.png",alt:"power consumption"}})])}],!1,null,null,null);v.options.__file="readme.md";e.default=v.exports}}]);
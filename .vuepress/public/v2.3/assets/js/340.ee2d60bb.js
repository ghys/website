(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{652:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("This service allows you to persist state updates using a SQL or NoSQL database through the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Java_Persistence_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Persistence API"),a("OutboundLink")],1),e._v(".  The service uses an abstraction layer that theoretically allows it to support many available SQL or NoSQL databases.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("The service currently supports MySQL, Apache Derby and PostgreSQL databases.  Only the embedded Apache Derby database driver is included. Other drivers must be installed manually. (See below for more information on that.)")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("If a database driver is not an OSGi bundle, the technique below can be used to extend the openHAB classpath.")]),e._v(" "),a("p",[e._v("Other database drivers can be added by expanding the openHAB classpath.")]),e._v(" "),a("p",[e._v("Use the following classpath setup in "),a("a",{attrs:{href:"http://start.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("start.sh"),a("OutboundLink")],1),e._v(" / start_debug.sh of openHAB:")]),e._v(" "),e._m(7),a("p",[e._v('This will add all .jar files in a folder "lib" in the root of openhab.')]),e._v(" "),a("p",[e._v("All databases that are supported by JPA can be added.")]),e._v(" "),e._m(8),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"java-persistence-api-jpa-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-persistence-api-jpa-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Java Persistence API (JPA) Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It will create one table named "),t("code",[this._v("historic_item")]),this._v(" where all item states are stored.  The item state is stored in a string representation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/jpa.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("url")]),e._v(" "),a("td"),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),a("td",[e._v("JDBC connection URL.  Examples:"),a("br"),a("br"),a("code",[e._v("jdbc:postgresql://hab.local:5432/openhab")]),a("br"),a("code",[e._v("jdbc:derby://hab.local:1527/openhab;create=true")]),a("br"),a("code",[e._v("jdbc:mysql://localhost:3306/openhab")])])]),e._v(" "),a("tr",[a("td",[e._v("driver")]),e._v(" "),a("td"),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),a("td",[e._v("database driver.  Examples:"),a("br"),a("br"),a("code",[e._v("org.postgresql.Driver")]),a("br"),a("code",[e._v("org.apache.derby.jdbc.ClientDriver")]),a("br"),a("code",[e._v("com.mysql.jdbc.Driver")]),a("br"),a("br"),e._v("Only the Apache Derby driver is included with the service.  Drivers for other databases must be installed manually.  This is a trivial process.  Normally JDBC database drivers are packaged as OSGi bundles and can just be dropped into the "),a("code",[e._v("addons")]),e._v(" folder. This has the advantage that users can update their drivers as needed. The following database drivers are known to work:"),a("br"),a("br"),a("code",[e._v("postgresql-9.4-1203-jdbc41.jar")]),a("br"),a("code",[e._v("postgresql-9.4-1206-jdbc41.jar")])])]),e._v(" "),a("tr",[a("td",[e._v("user")]),e._v(" "),a("td"),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("if needed")]),e._v(" "),a("td",[e._v("database user name for connection")])]),e._v(" "),a("tr",[a("td",[e._v("password")]),e._v(" "),a("td"),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("if needed")]),e._v(" "),a("td",[e._v("database user password for connection")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"adding-support-for-other-jpa-supported-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-support-for-other-jpa-supported-databases","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding support for other JPA supported databases")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is done in the file "),t("code",[this._v("persistence/jpa.persist")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cp=$(echo lib/*.jar | tr ' ' ':'):$(find $eclipsehome -name \"org.eclipse.equinox.launcher_*.jar\" | sort | tail -1);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Define "),t("code",[this._v("driver")]),this._v(" and "),t("code",[this._v("url")]),this._v(" according to the database definitions.")])}],!1,null,null,null);s.options.__file="readme.md";t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{470:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://www.synology.com/en-us/dsm",target:"_blank",rel:"noopener noreferrer"}},[e._v("DiskStation by Synology"),a("OutboundLink")],1),e._v(" is a famous NAS server solution for your home, allowing the installation of additional packages.\nWe are proud to be able to provide an "),a("a",{attrs:{href:"https://github.com/openhab/openhab-syno-spk",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB Synology package"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Current releases of openHAB require Oracle Java due to the generation of certificates based on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Elliptic_curve_cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("EC"),a("OutboundLink")],1),e._v(" which is not available in free Java implementations.\nIf you see the following error you are likely using OpenJDK:")]),e._v(" "),e._m(2),a("p",[e._v("The easiest way to install Java is to install the Synology Java8 package from Package Center.\nAfter installation, OpenJDK will be used by default and must be upgraded.\nTo update Oracle JDK to Java8, click the Install Java / Upgrade Java button and then follow the onscreen instructions.\nThe filename and format of the uploaded file will be checked before installation.")]),e._v(" "),a("p",[a("strong",[e._v("Armada 370/XP")]),e._v(" systems running DSM 6 require hard float ABI rather than the soft float used on DSM 5.\nIf there is not a Java8 package in the Package Center, your machine may not be supported by the "),a("a",{attrs:{href:"https://www.synology.com/en-us/dsm/packages/Java8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Synology package"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The best option for older unsupported Synology models such as "),a("strong",[e._v("PowerPC")]),e._v(" and "),a("strong",[e._v("ARMv5")]),e._v(" is to include the "),a("a",{attrs:{href:"https://pcloadletter.co.uk/2011/08/23/java-package-for-synology/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PC-Loadletter"),a("OutboundLink")],1),e._v(" Repo.\n"),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Java SE"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/javase-embedded-downloads-2209751.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("(latest ARMv6)"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("(Java Cryptography Extension if required)"),a("OutboundLink")],1),e._v(" and put them in the "),a("em",[e._v("public")]),e._v(" folder of your NAS.\nThen start the installation of Java8 SE.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Java8 PowerPC")]),e._v(" versions are available from "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/javaseembedded8u6-2406243.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Download the latest SPK package: "),a("a",{attrs:{href:"https://github.com/openhab/openhab-syno-spk/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases"),a("OutboundLink")],1),e._v("\nThe SPK is a wrapper to download the latest openHAB release and does not contain openHAB itself.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("If your NAS cannot connect to the internet, the installer will tell you to download and place the ZIP file into your NAS public folder.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Synology does not document which models will automatically create a public folder.\nRefer to the Synology knowlegde base article on "),a("a",{attrs:{href:"https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/file_share_desc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shared Folder"),a("OutboundLink")],1),e._v(" to learn more.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"synology-diskstation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synology-diskstation","aria-hidden":"true"}},[this._v("#")]),this._v(" Synology DiskStation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisite-install-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-install-java","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite - Install Java")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("java.security.NoSuchAlgorithmException: EC KeyPairGenerator not available\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note that it may be necessary to rename the downloaded file to match the name the Loadletter utility expects which may be an older version than what is currently available.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("Login and open the DiskStation Manager.")]),e._v(" "),a("li",[e._v("Go to Main Menu → Package Center.")]),e._v(" "),a("li",[e._v("Click on the Manual Install button.")]),e._v(" "),a("li",[e._v('Click "Choose File" and select the previously downloaded openHAB '),a("code",[e._v(".spk")]),e._v(" file.")]),e._v(" "),a("li",[e._v('On the confirmation page: If you would like the package to run immediately after installation, make sure the box next to "Run after Installation" is ticked.')]),e._v(" "),a("li",[e._v("Click Apply to start installation.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The location of configuration files by openHAB differs depending on wether or not a shared folder named "),t("code",[this._v("public")]),this._v(" exists:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("with public share folder: "),t("code",[this._v("/volume1/public/openHAB2/conf/")])]),this._v(" "),t("li",[this._v("without public share folder: "),t("code",[this._v("/volume1/@appstore/openHAB2/conf/")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For certain Synology models the "),t("code",[this._v("public")]),this._v(" folder is created automatically during the first setup.\nThe administrator can also create a public shared folder if desired.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The openHAB2 log files can be found here:\n"),t("code",[this._v("/volume1/@appstore/openHAB2/userdata/logs/")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From Version openHAB-2.2.0.006 the SPK generates two log files located at "),t("code",[this._v("/var/log/")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The first log file "),t("code",[this._v("openHAB2-install.log")]),this._v(" will be generated during the installation. If you can't install the openHAB2 SPK, please have a look inside the file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The second log "),t("code",[this._v("openHAB2-start-stop.log")]),this._v(" will be generated by starting and stopping openHAB2 inside the Package Manager.")])}],!1,null,null,null);o.options.__file="synology.md";t.default=o.exports}}]);
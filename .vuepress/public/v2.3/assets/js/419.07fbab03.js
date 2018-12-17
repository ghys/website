(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{437:function(e,t,i){"use strict";i.r(t);var r=i(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("OSGi coding tasks can help Java developers with no experience in OSGi and Eclipse Plug-in development to get familiar with writing bundles. This page contains tasks, related to several fundamental topics, and references to tutorials, where similar tasks are implemented.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("Before you start, you should first install the "),i("router-link",{attrs:{to:"./../development/ide.html"}},[e._v("Eclipse IDE")]),e._v(".")],1),e._v(" "),i("p",[e._v("In order to run your samples in an OSGi Runtime you might want to start Equinox in a command line.")]),e._v(" "),i("p",[e._v("You might take a look at the "),i("router-link",{attrs:{to:"/developers/development/guidelines.html"}},[e._v("Coding Guidelines")]),e._v(" as well.")],1),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The tasks are divided in several sections:")]),e._v(" "),i("p"),e._m(4),i("p"),e._v(" "),i("p",[e._v("Sample implementations are present in the "),i("a",{attrs:{href:"https://github.com/openhab/openhab-docs/tree/gh-pages/_sample_code/osgi_codings_tasks/bundles",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB docs repo"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("ol",[e._m(8),e._v(" "),i("li",[e._m(9),e._v(" "),i("ul",[e._m(10),e._v(" "),i("li",[e._v("which registers the "),i("code",[e._v("HomeElectricityNetwork")]),e._v(" as "),i("code",[e._v("ElectricityProvider")]),e._v(" in the OSGi "),i("em",[e._v("Service Registry")]),e._v(" with "),i("a",{attrs:{href:"https://osgi.org/javadoc/r4v43/core/org/osgi/framework/BundleContext.html",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("BundleContext")]),i("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(11)]),e._v(" "),e._m(12),e._v(" "),e._m(13)]),e._v(" "),e._m(14),e._v(" "),i("ol",[e._m(15),e._v(" "),e._m(16),e._v(" "),i("li",[i("p",[e._v("Create a "),i("code",[e._v("TV")]),e._v(" consumer with "),i("code",[e._v("int consumption = 10")]),e._v(", that implements the "),i("code",[e._v("ElectricityConsumer")]),e._v(" interface and the "),i("code",[e._v("DynamicConsumer")]),e._v("interface in an "),i("code",[e._v("org.openhab.training.electricity.tv")]),e._v(" bundle by using "),i("a",{attrs:{href:"https://osgi.org/javadoc/r4v42/org/osgi/util/tracker/ServiceTracker.html",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("ServiceTracker")]),i("OutboundLink")],1),e._v(". The "),i("code",[e._v("TV")]),e._v(" should be able to dynamically switch between different "),i("code",[e._v("ElectricityProvider")]),e._v(":")]),e._v(" "),e._m(17),e._v(" "),e._m(18)])]),e._v(" "),e._m(19),e._v(" "),i("ol",[i("li",[i("p",[e._v("Provider and consumer:")]),e._v(" "),i("ul",[i("li",[e._v("rewrite all tasks in section "),i("a",{attrs:{href:"#ii-services"}},[e._v("II.")]),e._v(" and "),i("a",{attrs:{href:"#iii-service-tracker"}},[e._v("III.")]),e._v(" to use the "),i("code",[e._v("ElectricityProvider")]),e._v(" service by injecting it by the means of "),i("router-link",{attrs:{to:"./osgids.html"}},[i("em",[e._v("Declarative Services")])]),e._v(" (do not use Service Tracker and BundleContext).The name of the new bundles will be the same, but ending with a .ds (e.g. "),i("code",[e._v("org.openhab.training.electricity.tv.ds")]),e._v(");")],1)]),e._v(" "),e._m(20)]),e._v(" "),e._m(21),e._v(" "),e._m(22)]),e._v(" "),e._m(23),e._v(" "),i("ol",[i("li",[e._m(24),e._v(" "),i("p",[e._v("Hint! Install "),i("code",[e._v("org.eclipse.equinox.event")]),e._v(" bundle in order to use "),i("em",[e._v("EventAdmin")]),e._v(" service for sending events."),i("br"),e._v("\nHint! "),i("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/ScheduledExecutorService.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ScheduledExecutorService"),i("OutboundLink")],1),e._v(" can be used in this task.")])]),e._v(" "),e._m(25)]),e._v(" "),e._m(26),e._v(" "),i("ol",[i("li",[i("p",[e._v("Implement the "),i("a",{attrs:{href:"https://osgi.org/javadoc/r4v42/org/osgi/service/cm/ManagedService.html",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("ManagedService")]),i("OutboundLink")],1),e._v(" interface in the "),i("code",[e._v("org.openhab.training.electricity.tv.events")]),e._v(" bundle and:")]),e._v(" "),e._m(27)]),e._v(" "),i("li",[e._m(28),e._v(" "),e._m(29),e._v(" "),i("p",[e._v("Hint! Read about the "),i("a",{attrs:{href:"https://osgi.org/javadoc/r4v42/org/osgi/service/cm/ConfigurationAdmin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConfigurationAdmin"),i("OutboundLink")],1),e._v(" service and how you can use it to change the configuration of a ManagedService. You might want to implement additional bundle that is using the ConfigurationAdmin service to change the configuration of the battery to perform a quick test.")]),e._v(" "),e._m(30)]),e._v(" "),e._m(31)]),e._v(" "),e._m(32),e._v(" "),i("ol",[i("li",[e._m(33),e._v(" "),e._m(34),e._v(" "),i("p",[e._v("Hint! You might have to register all consumers as services in the OSGi ServiceRegistry.")]),e._v(" "),e._m(35),e._v(" "),i("p",[e._v("Hint! You can add console commands with the help of\n"),i("a",{attrs:{href:"http://help.eclipse.org/neon/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fosgi%2Fframework%2Fconsole%2FCommandProvider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CommandProvider"),i("OutboundLink")],1)]),e._v(" "),e._m(36)])]),e._v(" "),e._m(37),e._v(" "),i("p",[e._v("Some of the tutorials listed below are not up-to-date with the latest versions of the Equinox framework or are written to be run in another implementation of the OSGi Runtime (e.g. Apache Felix). They can help you with solving the tasks above. This resources are divided in several groups.")]),e._v(" "),e._m(38),e._v(" "),i("ul",[i("li",[e._v("This tutorials simply cover more than one from the topics below:\n"),i("ul",[i("li",[i("a",{attrs:{href:"http://enroute.osgi.org/book/150-tutorials.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi enRoute project"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.vogella.com/tutorials/OSGi/article.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lars Vogel: OSGi Modularity"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.vogella.com/tutorials/OSGiServices/article.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lars Vogel: OSGi Services"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.javaworld.com/article/2077837/java-se/java-se-hello-osgi-part-1-bundles-for-beginners.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hello, OSGi, Part 1: Bundles for beginners"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://mnlipp.github.io/osgi-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi Getting Started"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://o7planning.org/en/10135/java-osgi-tutorial-for-beginners",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java OSGi Tutorial for Beginners"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://crunchify.com/understand-osgi-concepts-try-to-follow-the-puzzle-approach/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understand OSGi Concepts. Try to Follow the Puzzle Approach"),i("OutboundLink")],1),e._v(".")])])])]),e._v(" "),e._m(39),e._v(" "),i("ul",[i("li",[e._v("This tutorials are focused on writing basic bundle, managing the dependencies between the bundles and running them in an OSGi container:\n"),i("ul",[i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/m92130843.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Your first bundle"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/m92131032.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Interacting with the Framework"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/t90544.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Dependencies between Bundles"),i("OutboundLink")],1),e._v(".")])])])]),e._v(" "),e._m(40),e._v(" "),i("ul",[i("li",[e._v("Registering and using Services with the low-level OSGi API:\n"),i("ul",[i("li",[i("a",{attrs:{href:"http://eclipsezone.com/eclipse/forums/t90688.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Registering a Service"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/t90796.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Consuming a Service"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that listens for OSGi service events"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a dictionary service"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-2b.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements another dictionary service"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a simple dictionary service client"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a more robust dictionary service client"),i("OutboundLink")],1),e._v(".")])])])]),e._v(" "),e._m(41),e._v(" "),i("ul",[i("li",[e._v("OSGi Service Tracker simplifies using services from the Framework's registry. You can find example usage in the links below:\n"),i("ul",[i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/t91059.rhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Dynamic Service Tracking"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a dictionary service client using the Service Tracker"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-6.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a spell checker service using dictionary services."),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a spell checker service client"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://stackoverflow.com/questions/28748052/osgi-servicetracker-servicetrackercustomizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi - ServiceTracker - ServiceTrackerCustomizer"),i("OutboundLink")],1),e._v(".")])])])]),e._v(" "),e._m(42),e._v(" "),i("ul",[i("li",[e._v("OSGi Declarative Services is a high level API for managing services in OSGi. Its functionality is widely used in the openHAB project. Tutorials about the topic:\n"),i("ul",[i("li",[i("a",{attrs:{href:"http://blog.vogella.com/2016/06/21/getting-started-with-osgi-declarative-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started with OSGi Declarative Services"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/t96740.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Introducing Declarative Services"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.eclipsezone.com/eclipse/forums/t97690.rhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with OSGi: Declarative Services and Dependencies"),i("OutboundLink")],1),e._v(";")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://felix.apache.org/documentation/tutorials-examples-and-presentations/apache-felix-osgi-tutorial/apache-felix-tutorial-example-9.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Felix Tutorial: A bundle that implements a spell checker service using Declarative Services"),i("OutboundLink")],1),e._v(".")])])])]),e._v(" "),e._m(43),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://nakvic-dev.blogspot.bg/2010/11/osgi-declarative-managed-services-and.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi declarative managed services and configuration"),i("OutboundLink")],1)])]),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"coding-tasks-for-osgi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coding-tasks-for-osgi","aria-hidden":"true"}},[this._v("#")]),this._v(" Coding tasks for OSGi")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tasks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tasks","aria-hidden":"true"}},[this._v("#")]),this._v(" Tasks")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),i("li",[i("a",{attrs:{href:"#prerequisites"}},[e._v("Prerequisites")])]),i("li",[i("a",{attrs:{href:"#tasks"}},[e._v("Tasks")]),i("ul",[i("li",[i("a",{attrs:{href:"#i-writing-basic-osgi-bundle"}},[e._v("I. Writing basic OSGi bundle")])]),i("li",[i("a",{attrs:{href:"#ii-services"}},[e._v("II. Services")])]),i("li",[i("a",{attrs:{href:"#iii-service-tracker"}},[e._v("III. Service Tracker")])]),i("li",[i("a",{attrs:{href:"#iv-declarative-services-and-components"}},[e._v("IV. Declarative Services and Components")])]),i("li",[i("a",{attrs:{href:"#v-events"}},[e._v("V. Events")])]),i("li",[i("a",{attrs:{href:"#vi-managed-services"}},[e._v("VI. Managed Services")])]),i("li",[i("a",{attrs:{href:"#vii-console-commands"}},[e._v("VII. Console Commands")])])])]),i("li",[i("a",{attrs:{href:"#references"}},[e._v("References")]),i("ul",[i("li",[i("a",{attrs:{href:"#multiple-topics"}},[e._v("Multiple topics")])]),i("li",[i("a",{attrs:{href:"#writing-basic-osgi-bundle"}},[e._v("Writing basic OSGi bundle")])]),i("li",[i("a",{attrs:{href:"#services"}},[e._v("Services")])]),i("li",[i("a",{attrs:{href:"#service-trackers"}},[e._v("Service Trackers")])]),i("li",[i("a",{attrs:{href:"#declarative-services-and-components"}},[e._v("Declarative Services and Components")])]),i("li",[i("a",{attrs:{href:"#managed-services"}},[e._v("Managed Services")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"i-writing-basic-osgi-bundle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-writing-basic-osgi-bundle","aria-hidden":"true"}},[this._v("#")]),this._v(" I. Writing basic OSGi bundle")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.helloosgi")]),e._v(" bundle, that prints a message on the console, when it is started and stopped. Test it in the OSGi Container.")]),e._v(" "),i("p",[e._v("Hint! You can install a bundle in the OSGi Container with the "),i("code",[e._v("install {url}")]),e._v(" command."),i("br"),e._v("\nHint! If you still have difficulties look at the\n"),i("a",{attrs:{href:"#writing-basic-osgi-bundle"}},[e._v("reference section")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.utils")]),e._v(" bundle, which contains class "),i("code",[e._v("TimeUtilities")]),e._v(", that has a single method "),i("code",[e._v("String getCurrentTimeStamp()")]),e._v(' that returns the current time stamp in format "hh:mm". Mind the '),i("code",[e._v("TimeUtilities")]),e._v(" class might be used in some other bundles.")]),e._v(" "),i("p",[e._v("Hint! Find out how can you export packages in OSGi.")])]),e._v(" "),i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.helloosgi.modified")]),e._v(" bundle to use the "),i("code",[e._v("TimeUtilities")]),e._v(" class to display the current time stamp on the console when it is started.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ii-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ii-services","aria-hidden":"true"}},[this._v("#")]),this._v(" II. Services")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.electricity.provider")]),e._v(" bundle, which defines a service interface "),i("code",[e._v("ElectricityProvider")]),e._v(" with one method:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("boolean provide (int value)")]),e._v(" - discharges the provider with the 'value' parameter. It should return true, if the requested charge is available in the provider and false, if it is not;")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create an "),t("code",[this._v("org.openhab.training.electricity.homenetwork")]),this._v(" bundle:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("with "),t("code",[this._v("HomeElectricityNetwork")]),this._v(" implementation of the "),t("code",[this._v("ElectricityProvider")]),this._v(" interface with infinite charge (the "),t("code",[this._v("provide()")]),this._v(" method should always return true);")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hint! You can find similar tasks in the\n"),t("a",{attrs:{href:"#services"}},[this._v("examples below")]),this._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.electricity.consumer")]),e._v(" bundle, which contains an\ninterface "),i("code",[e._v("ElectricityConsumer")]),e._v(" with methods:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("void startConsuming()")]),e._v(" - starts the device and displays a message on the console. If the device requires a provider (it is not energy independent), this method can set the current provider. After the device is started it should try to consume electricity equal to the device consumption from the current provider at fixed interval from 5 seconds and display a message on the console, which provider is in use at the moment;")]),e._v(" "),i("li",[i("code",[e._v("void stopConsuming()")]),e._v(" - stops the device and displays message on the console. The device should not consume electricity anymore. The device should stop, if the current provider is discharged;")]),e._v(" "),i("li",[i("code",[e._v("void setCurrentProvider(ElectricityProvider)")]),e._v(" - sets a current provider from a list with available providers;")]),e._v(" "),i("li",[i("code",[e._v("List<ElectricityProvider> getAllAvailableProviders()")]),e._v(" - returns a list with available providers (a provider is available, when it is registered in the "),i("em",[e._v("Service Registry")]),e._v(" and has more charge, than the device consumption).")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.electricity.radio")]),e._v(" bundle, which:")]),e._v(" "),i("ul",[i("li",[e._v("implements the "),i("code",[e._v("ElectricityConsumer")]),e._v(" interface in a  "),i("code",[e._v("BasicRadio")]),e._v(" consumer, which has specific consumption (e.g "),i("code",[e._v("int consumption = 5")]),e._v(") and can be connected to only one provider;")]),e._v(" "),i("li",[e._v("the device should be able to stop automatically, when there is no provider available and display a message on the console. After that it must be started manually;")]),e._v(" "),i("li",[e._v("use the "),i("code",[e._v("ElectricityProvider")]),e._v(" service by getting it directly from the "),i("em",[e._v("BundleContext")]),e._v(".")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"iii-service-tracker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iii-service-tracker","aria-hidden":"true"}},[this._v("#")]),this._v(" III. Service Tracker")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create an "),i("code",[e._v("org.openhab.training.electricity.battery")]),e._v(" bundle, which implements and registers "),i("code",[e._v("Battery")]),e._v(" implementation of the "),i("code",[e._v("ElectricityProvider")]),e._v(" service with finite charge (e.g "),i("code",[e._v("int capacity = 20")]),e._v(").")]),e._v(" "),i("p",[e._v("Hint! An ElectricityProvider can be used by different consumers simultaneously. Consider whether it is necessary to make an implementation of this class thread-safe.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create an interface "),i("code",[e._v("DynamicConsumer")]),e._v(" in an "),i("code",[e._v("org.openhab.training.electricity.dynamicconsumer")]),e._v(" bundle that should manage the availability of the different "),i("code",[e._v("ElectricityProvider")]),e._v(". It defines two methods:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("void providerAdded(ElectricityProvider)")]),e._v(" - called when a new provider is registered in the "),i("em",[e._v("ServiceRegistry")]),e._v(". It should add the provider in a list with available electricity sources for the current device;")]),e._v(" "),i("li",[i("code",[e._v("void providerRemoved(ElectricityProvider)")]),e._v(" - called when a provider is unregistered from the "),i("em",[e._v("ServiceRegistry")]),e._v(". It should remove the provider from a list with available electricity sources for the current device.")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("when both providers are available, it should work with the "),i("code",[e._v("HomeElectricityNetwork")]),e._v(";")]),e._v(" "),i("li",[e._v("otherwise it should use the provider that is available at the moment;")]),e._v(" "),i("li",[e._v("when no provider is available or it can not provide enough charge, the "),i("code",[e._v("TV")]),e._v(" should stop;")]),e._v(" "),i("li",[e._v("it should be able to start automatically, if a new provider is available and is able to provide enough electricity.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hint! Install "),t("code",[this._v("org.eclipse.osgi.util")]),this._v(" bundle in order to use "),t("em",[this._v("ServiceTracker")]),this._v(".\nTutorials with examples can be found\n"),t("a",{attrs:{href:"#service-trackers"}},[this._v("below")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"iv-declarative-services-and-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iv-declarative-services-and-components","aria-hidden":"true"}},[this._v("#")]),this._v(" IV. Declarative Services and Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hint! Install "),t("code",[this._v("org.eclipse.equinox.ds")]),this._v(" bundle in order to use "),t("em",[this._v("Declarative Services")]),this._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create a "),i("code",[e._v("SolarRadio")]),e._v(" consumer that extends "),i("code",[e._v("BasicRadio")]),e._v(" from IV.1 in an "),i("code",[e._v("org.openhab.training.electricity.solarradio")]),e._v(" bundle. This radio does not need any "),i("code",[e._v("ElectricityProvider")]),e._v(" to run, but will use one, if it is available (the device should not stop when there are no providers available).")]),e._v(" "),i("p",[e._v("Hint! Read about cardinality in OSGi Declarative Services!")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Create a "),i("code",[e._v("CombinedSolarRadio")]),e._v(" that extends "),i("code",[e._v("SolarRadio")]),e._v(" and implements "),i("code",[e._v("DynamicConsumer")]),e._v(" in "),i("code",[e._v("org.openhab.training.electricity.combinedradio")]),e._v(" it the following way:")]),e._v(" "),i("ul",[i("li",[e._v("the consumer does not need any provider to run;")]),e._v(" "),i("li",[e._v("if one is available, it must set it as current and use it;")]),e._v(" "),i("li",[e._v("if more than one are available, add all to the list with available providers.")])]),e._v(" "),i("p",[e._v("Hint! What happens when you stop the provider that is not in use? Why does the "),i("code",[e._v("CombinedSolarRadio")]),e._v(" stops and starts? Modify the consumer to handle the removal of the service dynamically - without calling the stop and start methods every time! Read about service policy in OSGi!")]),e._v(" "),i("p",[e._v("Hint! Test all the bundles in the OSGi container by starting and stopping the different "),i("code",[e._v("ElectricityProvider")]),e._v(" implementations and track, if the consumers are used as expected.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-events","aria-hidden":"true"}},[this._v("#")]),this._v(" V. Events")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Create a bundle "),i("code",[e._v("org.openhab.training.util.sender")]),e._v(" that registers as a service "),i("code",[e._v("TimeEventSender")]),e._v(', that sends events with topic "org/openhab/training/time" every minute with the current time stamp (hh:mm) (you can use the '),i("code",[e._v("TimeUtilities")]),e._v(" class from chapter "),i("a",{attrs:{href:"#i-writing-basic-osgi-bundle"}},[e._v("I.")]),e._v(").")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Extend the "),t("code",[this._v("org.openhab.training.electricity.tv.ds.TV")]),this._v(" class from IV.1 in an "),t("code",[this._v("org.openhab.training.electricity.tv.events")]),this._v(" bundle to listen for events and print them on the console.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vi-managed-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-managed-services","aria-hidden":"true"}},[this._v("#")]),this._v(" VI. Managed Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("add a configuration to the "),t("code",[this._v("TV")]),this._v(' class with property "autoSleep" and value a timestamp (hh:mm);')]),this._v(" "),t("li",[this._v('modify the method that listens for events with topic "time" to stop the bundle, when the "autoSleep" property is equal to the "time" topic.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create another implementation of the "),t("code",[this._v("ElectricityProvider")]),this._v(" interface ("),t("code",[this._v("RechargableBattery")]),this._v(") in an "),t("code",[this._v("org.openhab.training.electricity.rechargeablebattery")]),this._v(" bundle that:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("has a  finite charge (e.g "),i("code",[e._v("int capacity = 30")]),e._v(");")]),e._v(" "),i("li",[e._v("implements the "),i("em",[e._v("ManagedService")]),e._v(" interface. After this modification, it should be possible to change the charge of a battery with a "),i("code",[e._v("setCharge(int capacity)")]),e._v(" method;")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hint! Install "),t("code",[this._v("org.eclipse.equinox.cm")]),this._v(" bundle in order to use "),t("em",[this._v("ConfigurationAdmin")]),this._v(" service.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Create a "),t("code",[this._v("org.openhab.training.electricity.recharger")]),this._v(" bundle that will wait 10 seconds after it is activated and will recharge a rechargeable battery if it is registered as a service.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vii-console-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vii-console-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" VII. Console Commands")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Implement a service in  the "),t("code",[this._v("org.openhab.training.util.console")]),this._v(" bundle that adds console command, that:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("displays all  "),t("code",[this._v("ElectricityProvider")]),this._v(" implementations that are registered with their charge;")]),this._v(" "),t("li",[this._v("displays all consumers, to which providers are they connected (which providers are available) and what is the current provider at the moment;")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("sets the charge of the "),t("code",[this._v("RechargableBattery")]),this._v(" to a provided value;")]),this._v(" "),t("li",[this._v("changes the configuration of the "),t("code",[this._v("TV")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hint! Test the console commands in the OSGi runtime by starting the different Radio consumers and the TV consumer. Start only the "),t("code",[this._v("Battery")]),this._v(" provider and wait until it is discharged. Check if the consumers have stopped as expected. Recharge the battery and check, if the consumers have started. You can try out different scenarios as well!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"multiple-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Multiple topics")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"writing-basic-osgi-bundle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-basic-osgi-bundle","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing basic OSGi bundle")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[this._v("#")]),this._v(" Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"service-trackers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-trackers","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Trackers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"declarative-services-and-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declarative-services-and-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Declarative Services and Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"managed-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managed-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Managed Services")])}],!1,null,null,null);a.options.__file="osgitasks.md";t.default=a.exports}}]);
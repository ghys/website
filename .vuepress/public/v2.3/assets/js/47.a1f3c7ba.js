(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{527:function(t,e,i){"use strict";i.r(e);var n=i(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("AddonLogo"),t._v(" "),i("p",[t._v('Twitter can be used to "tweet" notifications when certain events take place in openHAB.')]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("After enabling, you will then need to authenticate openHAB with Twitter.\nTypically a new Twitter account would be set up for openHAB, rather than using your personal account, but that is entirely up to you.")]),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("You'll have to authorise openHAB to use Twitter.\nThis is done using a two step process, similar to Dropbox authentication.\nopenHAB requests a token which is used as a one-time-password to get hold of an authentication token (second step) which will be used for all future requests to Twitter.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("This step is handled automatically by openHAB.\nIt will detect the PIN file you just created and use it to generate an authentication token which it will store away for future use.\nopenHAB will give up waiting after 5 minutes, so if you are not quick enough you will have to restart openHAB and begin the authentication process again.")]),t._v(" "),i("p",[t._v("Once authenticated, you should see an entry in the log file to indicate authentication was successful.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("Please beware there are technical limits that apply to your account.\nThe current limits are:")]),t._v(" "),t._m(16),t._v(" "),i("DocPreviousVersions"),t._v(" "),i("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"twitter-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twitter-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Twitter Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sendTweet(message)")]),this._v(": Send a Tweet")]),this._v(" "),e("li",[e("code",[this._v("sendDirectMessage('recipient', 'direct message')")]),this._v(": Send a direct message simply use the following syntax inside a rule or script;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('The Twitter action service is one of the pre-defined set of actions that is automatically available, and can be used within rules and scripts.\nYou will need to enable "tweeting" by adding the following to the file '),e("code",[this._v("services/twitter.cfg")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("enabled=true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"step-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 1")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is performed by openHAB automatically after configuration above.\nYou will find some entries like this in your "),e("code",[this._v("openhab.log")]),this._v(" file:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("08:46:10.013 INFO  o.openhab.io.net.actions.Tweet[:136] - ################################################################################################\n08:46:10.014 INFO  o.openhab.io.net.actions.Tweet[:137] - # Twitter-Integration: U S E R   I N T E R A C T I O N   R E Q U I R E D !!\n08:46:10.014 INFO  o.openhab.io.net.actions.Tweet[:138] - # 1. Open URL 'http://api.twitter.com/oauth/authorize?oauth_token=hP9gKIQ4wfMrzpmzqp4NcTJjAxXdwLo9fFEcndkks'\n08:46:10.014 INFO  o.openhab.io.net.actions.Tweet[:139] - # 2. Grant openHAB access to your Twitter account\n08:46:10.014 INFO  o.openhab.io.net.actions.Tweet[:140] - # 3. Create an empty file 'twitter.pin' in your openHAB install path\n08:46:10.015 INFO  o.openhab.io.net.actions.Tweet[:141] - # 4. Add the line 'pin=<authpin>' to the twitter.pin file\n08:46:10.015 INFO  o.openhab.io.net.actions.Tweet[:142] - # 5. openHAB will automatically detect the file and complete the authentication process\n08:46:10.015 INFO  o.openhab.io.net.actions.Tweet[:143] - # NOTE: You will only have 5 mins before openHAB gives up waiting for the pin!!!\n08:46:10.015 INFO  o.openhab.io.net.actions.Tweet[:144] - ################################################################################################\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"step-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This steps needs your interaction.\nCopy the given URL to your browser and authorize openHAB to use Twitter.\nBe aware that the request token is only valid for the next five minutes, so don't wait too long.\nAfter successful authorization, you will be given an authentication PIN which you will need to copy to a new file you create in the "),e("code",[this._v("<openhabhome>")]),this._v(" directory called "),e("code",[this._v("twitter.pin")]),this._v(".\nPlease note that the PIN must be given in this format: "),e("code",[this._v("pin=<authpin>")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"step-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("08:53:53.486 INFO  o.openhab.io.net.actions.Twitter[:94] - TwitterAction has been successfully authenticated > awaiting your Tweets!\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("And you will notice a new file is created in "),e("code",[this._v("etc")]),this._v(" called "),e("code",[this._v("twitter.token")]),this._v(".\nThis is where the authentication token is stored for future use.\nYou can now safely delete the "),e("code",[this._v("twitter.pin")]),this._v(" file if you wish as it is no longer required.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rate-limits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Rate Limits")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Direct messages: 250 per day.")]),this._v(" "),e("li",[this._v("Tweets: 1,000 per day. The daily update limit is further broken down into smaller limits for semi-hourly intervals. Retweets are counted as Tweets.")]),this._v(" "),e("li",[this._v("Following (daily): The technical follow limit is 1,000 per day. Please note that this is a technical account limit only, and there are additional rules prohibiting aggressive following behavior. Details about following limits and prohibited behavior are on the Follow Limits and Best Practices page.")]),this._v(" "),e("li",[this._v("Following (account-based): Once an account is following 2,000 other users, additional follow attempts are limited by account-specific ratios. The Follow Limits and Best Practices page has more information.")])])}],!1,null,null,null);a.options.__file="readme.md";e.default=a.exports}}]);
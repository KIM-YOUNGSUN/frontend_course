"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_10_get_json.js
var dataUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=MOgM_qsh4jy5W_FryrRui6cgEzFabu74NNaR0k52pC3IxAMP0DlKpGstqhLzvXOrc6GbuhO85GvtyunNWP85gW3BjUSs9Hhmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGWEevfd7m4kmSkhDJ5iwO6wa7Q6rF7g9g5swGbGOPR8J-lPRRkPXB98p02Szu3_ZaQDezu1b2BgCTDpdpsjWx77tiI6Df4vgw&lib=MneTmoOM14GKUtqEwISgXd-GBBJSCRRoM';
fetch(dataUrl).then(function (response) {
  return response.json();
});
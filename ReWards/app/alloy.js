// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//Facebook Setup
var appId = Ti.App.Properties.getString("ti.facebook.appid");
var fb = require('facebook');
console.debug("App init - Setting facebook app ip: " + appId );
fb.appid = appId;
fb.forceDialogAuth = true;
Alloy.Globals.Facebook = fb;


var apiClient = require("rewards-sdk/Client");
Alloy.Globals.apiClient = new apiClient();

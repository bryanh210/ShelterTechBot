"use strict";
const fb_messaging = require('../messaging.js');
const fb_sample = require('../templates/sample_listing.js');

module.exports.requestUserLocation = function (sender, action, message, contexts, parameters) {
    var replies = [{"content_type":"location"}];
    fb_messaging.sendQuickReply(sender, message, replies, "request_location");
}


module.exports.findResource = function (sender, action, message, contexts, parameters){
    console.log(parameters);
    fb_messaging.sendTextMessage(sender, message);
    var usrLocation = parameters.location;
    fb_messaging.sendTemplateMessage(sender, fb_sample.samplePayload);
}



"use strict";
const fb_messaging = require('../messaging.js');
const fb_sample = require('../templates/sample_listing.js');
const askdarcel_querying = require('../askdarcel_api_call/askdarcel_querying');

module.exports.requestUserLocation = function (sender, action, message, contexts, parameters) {
    var replies = [{"content_type":"location"}];
    fb_messaging.sendQuickReply(sender, message, replies, "request_location");
}

// parameters
module.exports.findResource = function (sender, action, message, contexts, parameters){
    fb_messaging.sendTextMessage(sender, message);
    var usrLocation = parameters.location;
    fb_messaging.sendTemplateMessage(sender, fb_sample.samplePayload);
    const latitude = parameters.location.latitude;
    const longitude = parameters.location.longitude;
    const resource_category = parameters["resource-category"];
    // const resource_category = parameters.resource-category;
    console.log("testing");

    let resources = askdarcel_querying.handlingAskDarcel(resource_category, longitude,latitude);

}


//

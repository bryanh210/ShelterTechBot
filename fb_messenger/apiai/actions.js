"use strict";
const fb_messaging = require('../messaging.js');

module.exports = {
        requestUserLocation: requestUserLocation
}

function requestUserLocation(sender, action, responseText, 
                             contexts, parameters) {
        var replies = [{"content_type":"location"}];
        fb_messaging.sendQuickReply(sender, responseText, replies, null);
}




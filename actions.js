"use strict";
const fb = require('./messenger_utils.js');

function requestUserLocation(sender, action, responseText, 
                             contexts, parameters) {
        var replies = [{"content_type":"location"}];
        fb.sendQuickReply(sender, responseText, replies, null);
}


module.exports = {
        requestUserLocation: requestUserLocation
}

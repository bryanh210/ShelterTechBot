"use strict";

const config = require('./conf.js');
const request = require('request');
const {URL} = require('url');

const BASE_URL = config.ASKDARCEL_URL;

module.exports.getCategories = function () {
    request({
        //uri: new URL('/categories', BASE_URL), 
        uri: "http://0.0.0.0:3000/categories",
        method: 'GET'
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Successfully requested category id mapping");
        } else {
            console.error("Failed getting categories", response.statusCode, response.statusMessage, body.error);
        }
    });
}

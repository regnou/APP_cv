/*
* Will connect to wa-config rest server and deploy
*
* 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo,
* service@monwoo.com
*/

// https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
const fetch = require('node-fetch');

// https://www.npmjs.com/package/dotenv
// https://coderrocketfuel.com/article/how-to-load-environment-variables-from-a-.env-file-in-nodejs
require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it's working

// https://stackoverflow.com/questions/26156292/trim-specific-character-from-a-string
const waApiBaseUrl = process.env.WA_REST_API_SERVER
.replace(/\/+$/g, ''); // .trim('/');
const waApiUserLocation = process.env.WA_USER_LOCATION;

function assert(test, msg, ...ctx) {
    if (!test) {
        console.warn(`Assertion failed : ${msg}`, ...ctx);
        throw new Error(msg);    
    }
}

function debug(...ctx) {
    if (process.env.DEBUG) {
        const prompt = `[${new Date()}]`;
        // console.debug(prompt, ...ctx);
        console.debug("");
        console.debug(prompt);
        ctx.forEach(function (log) {
            console.debug("    ", log);
        });
        console.debug("");
    }
}

// Soft assert example :
// console.assert(waApiBaseUrl, "Missing WA_REST_API_SERVER env, check your .env file.");
assert(waApiBaseUrl, "Missing WA_REST_API_SERVER env, check your .env file.");
assert(waApiUserLocation, "Missing WA_USER_LOCATION env, check your .env file.");

debug("Will deploy from : ", waApiBaseUrl, waApiUserLocation)

const deployUrl = `${waApiBaseUrl}/fronthead/sync`;
debug("To url : ", deployUrl);

// const headers = new Headers({
const headers = {
    accept: 'application/json'
};

fetch(deployUrl, {
    method: 'GET',
    // body: content, method: 'POST'
    headers: headers
})
.then(res => res.clone().text().then(
    t => debug("Did fetch : ", t)
) && res)
.then(res => res.json())
.then(text => console.log(text));

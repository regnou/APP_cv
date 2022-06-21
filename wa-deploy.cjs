/*
* Will connect to wa-config rest server and deploy
*
* 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo,
* service@monwoo.com
*/

const fs = require('fs');
// https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch
const fetch = require('node-fetch');
const FormData = require('form-data');
const readline = require("readline");
const path = require("path");

// https://www.npmjs.com/package/dotenv
// https://coderrocketfuel.com/article/how-to-load-environment-variables-from-a-.env-file-in-nodejs
require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it's working

// https://stackoverflow.com/questions/26156292/trim-specific-character-from-a-string
const waApiBaseUrl = process.env.WA_REST_API_SERVER
.replace(/\/+$/g, ''); // .trim('/');
const waApiUserLocation = process.env.WA_USER_LOCATION;

let [head_target, zip_subpath, zip_bundle] = [
    process.env.WA_HEAD_TARGET || "wa-axelo-app-cv",
    process.env.WA_ZIP_SUBPATH || "",
    process.env.WA_ZIP_ARCHIVEPATH || "build/static.zip"
];

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

// https://nodejs.dev/learn/writing-files-with-nodejs
const secuTmpFile = '.wa-access.tmp';
let waAccess = {};
try {
    if (fs.existsSync(secuTmpFile)) {
        waAccess = JSON.parse(fs.readFileSync(secuTmpFile, waAccess));
    }
} catch (err) {
    console.error(err);
}

// const headers = new Headers({
const defaultHeaders = () => ({
    accept: 'application/json'
});

const defaultPostData = () => ({
    sync_action: 'publish',
    user_location: waApiUserLocation,
    wa_access_id: waAccess.wa_access_id,
    wa_api_pre_fetch_token: waAccess.wa_api_pre_fetch_token,
});

// 🌖🌖 Request : wa-config-by-monwoo deploy api  🌖🌖
// 🌖🌖           with build at build/static.zip  🌖🌖

const deploy_init = () => {
    const headers = {
        ...defaultHeaders(),
        accept: 'application/json'
    };
    debug("With headers data : ", headers);
    
    // https://gist.github.com/pinkhominid/e6f53706e0dd8cf34f2bd94c3aa357c5
    const postData = new FormData();

    // loading zip file 
    const stats = fs.statSync(zip_bundle);
    const fileSizeInBytes = stats.size;
    const fileStream = fs.createReadStream(zip_bundle);
    postData.append('zip_bundle', fileStream, {
        name: path.basename(zip_bundle),
        knownLength: fileSizeInBytes,
    });
    // loading extra params
    const extra = {
        ...defaultPostData(),
        head_target,
        zip_subpath,
        zip_bundle,
    };
    Object.keys(extra).forEach(k => {
        console.log("key", k);
        // Err : Cannot read properties of undefined (reading 'name')
        // if append undefined values to postData..., if check to avoid it
        if (extra[k] && extra[k].length) {
            postData.append(k, extra[k]);
        }
    });
    debug("With post data : ", postData);

    // Try to deploy
    return fetch(deployUrl, {
        method: 'POST',
        body: postData,
        headers: headers
    })
    // Debug
    .then(res => res.clone().text().then(
        t => debug("Did fetch : ", t)
    ) && res)
    // Json extract
    .then(res => res.json())
    // Test error and take appropriate actions
    .then(res => {
        let resp = res;
        if ('wa_api_login_required' === res.error) {
            const authLink = res.location;
            // https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            resp = new Promise((resolve, reject) => {
                rl.question(`Did you succed to authenticate with :\n${authLink}\n? (y/n)`, userResp => {
                    if ('n' === userResp) {
                        rl.question(`Deploy will fail, should re-try \n${authLink}\n? (y/n) `, userResp => {
                            if ('y' === userResp) {
                                resolve({
                                    ...res,
                                    should_retry: true,
                                });
                            } else {
                                reject(res);
                            }
                            rl.close();
                        });    
                    } else {
                        rl.close();
                        resolve({
                            ...res,
                            should_retry: true,
                        });    
                    }
                });
            });          
        }
        return resp;
    })
    // Debug
    .then(resp => debug("Did load : ", resp) || resp)
    // Retry if should_retry is asked
    .then(resp => resp.should_retry ? deploy_init() : resp)
    // Error handler
    .catch(err => {
        console.error('Error :', err);
        return err;
    })
    // Update internals from response
    .then(resp => {
        wa_api_pre_fetch_token = (resp.wa_api_pre_fetch_token && resp.wa_api_pre_fetch_token.length)
        ? resp.wa_api_pre_fetch_token : waAccess.wa_api_pre_fetch_token;

        wa_access_id = (resp.wa_access_id && resp.wa_access_id.length)
        ? resp.wa_access_id : waAccess.wa_access_id;

        waAccess = {
            ...waAccess,
            wa_api_pre_fetch_token,
            wa_access_id
        }

        return resp;
    });
}

const deploy = () => deploy_init()
.then(resp => {
    console.log(resp);

    // Save headers, cookies, auth, etc...
    // re-load deploy_init with updated headers will launch it right ;)
    try {
        waAccess = fs.writeFileSync(secuTmpFile, JSON.stringify(waAccess));
    } catch (err) {
        console.error(err);
    }    
})

// Launch the deploy process
deploy();
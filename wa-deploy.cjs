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
// const {Base64Encode} = require("base64-stream"); // npm install -D base64-stream // Required: {"node":"18.x"}
const path = require("path");

// https://www.npmjs.com/package/dotenv
// https://coderrocketfuel.com/article/how-to-load-environment-variables-from-a-.env-file-in-nodejs
require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it's working

// https://stackoverflow.com/questions/26156292/trim-specific-character-from-a-string
const waApiBaseUrl = process.env.WA_REST_API_SERVER
.replace(/\/+$/g, ''); // .trim('/');
const waApiUserLocation = process.env.WA_USER_LOCATION;

function toBool(mixed) {
    // TODO : parse env to real values ?
    // https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
    // $.parseJSON("TRUE".toLowerCase()); sound the best generic, but heavy ? 
    return (typeof mixed === 'string' || mixed instanceof String)
    ? JSON.parse(mixed.toLowerCase()) : Boolean(mixed);
}

let [head_target, zip_subpath, zip_bundle, isDebug, isDebugVerbose, isDebugVeryVerbose] = [
    process.env.WA_HEAD_TARGET || "wa-axelo-app-cv",
    process.env.WA_ZIP_SUBPATH || "",
    process.env.WA_ZIP_ARCHIVEPATH || "build/static.zip",
    toBool(process.env.DEBUG),
    toBool(process.env.DEBUG_VERBOSE),
    toBool(process.env.DEBUG_VERY_VERBOSE),
];

function assert(test, msg, ...ctx) {
    if (!test) {
        console.warn(`Assertion failed : ${msg}`, ...ctx);
        throw new Error(msg);    
    }
}

function debug(...ctx) {
    if (isDebug) {
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

function debugVerbose(...ctx) {
    if (isDebugVerbose) {
        debug(...ctx);
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
    // TODO : x-wp-nonce: ...
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
    };
    debug("With headers data : ", headers);
    
    // https://gist.github.com/pinkhominid/e6f53706e0dd8cf34f2bd94c3aa357c5
    const postData = new FormData();

    // loading zip file 
    // TODO : 406 error solved with curl using "zip_bundle='@tmp.zip;type=application/zip'", but fail with below :
    // const stats = fs.statSync(zip_bundle);
    // const fileSizeInBytes = stats.size;
    // const fileStream = fs.createReadStream(zip_bundle);
    // postData.append('zip_bundle', fileStream, {
    //     // contentType: 'application/zip', // This is for request Headers / Full encoding, per file it's 'type' arg
    //     type: 'application/zip',
    //     name: path.basename(zip_bundle),
    //     knownLength: fileSizeInBytes,
    // }); // TODO : Base64Encode for node >18, how in earlier version of node ? + dev env node install deps needed, bad for simple script...
    // const b64Stream = fileStream.pipe(new Base64Encode());
    // postData.append('zip_bundle_b64', < ... b64Stream ... >);
    const zipBuffer = fs.readFileSync(zip_bundle);
    
    // utf8.decode(base64.decode(base64Str));
    // const b64Buffer = base64.encode(utf8.encode(zipBuffer));

    // https://stackoverflow.com/questions/6182315/how-can-i-do-base64-encoding-in-node-js
    const b64Buffer = Buffer.from(zipBuffer).toString('base64')

    postData.append('zip_bundle_b64', b64Buffer);

    // TODO : 
    // loading extra params
    const extra = {
        ...defaultPostData(),
        head_target,
        zip_subpath,
        zip_bundle,
    };
    Object.keys(extra).forEach(k => {
        // console.log("key", k);
        // Err : Cannot read properties of undefined (reading 'name')
        // if append undefined values to postData..., if check to avoid it
        if (extra[k] && extra[k].length) {
            postData.append(k, extra[k]);
        }
    });
    debugVerbose("With post data : ", postData);

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
    .then(resp => debugVerbose("Did load : ", resp) || resp)
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
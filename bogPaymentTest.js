import https from "node:https";

const clientId = process.env.BOG_CLIENT_KEY; //dummy
const secretKey = process.env.BOG_SECRET_KEY; //dummy
const string = `${clientId}:${secretKey}`;
const buffer = Buffer.from(string);
const authorization = buffer.toString("base64");
const generated = "MTAwNjo1ODFiYTVlZWFkZDY1N2M4Y2NkZGM3NGM4MzliZDNhZA=="

const options = {
    hostname: "dev.ipay.ge",
    path: "/opay/api/v1/oauth2/token",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${generated}`,
    },
};

const cb = (res) => {
    var str = "";
    res.on("data", function (chunk) {
        str += chunk;
    });
    res.on("end", function () {
        console.log(JSON.parse(str));
    });
};

const req = https.request(options, cb);
req.write("grant_type=client_credentials")
req.end();

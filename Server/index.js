const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var cors = require("cors");

const fs = require("fs");
const https = require("https");
const axios = require("axios");
const Path = require("path");

async function download(url) {
    // const url = "https://api.memegen.link/images/aag/_/aliens.jpg";
    const path = Path.resolve(__dirname, "Downloaded_memes", "image.jpg");
    const writer = fs.createWriteStream(path);

    const res = await axios({
        method: "GET",
        url,
        responseType: "stream",
    });

    res.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on("finish", () => {
            resolve();
        });

        res.data.on("error", (err) => {
            reject(err);
        });
    });
}
app.use(cors());

app.use(bodyparser.json());
app.post("/api", (req, res) => {
    const url = req.body.destination;
    console.log(url);
    download(url);
    res.send("downloading");
});

app.listen(8080, () => {
    console.log("Server started and listening at port 8080...");
});

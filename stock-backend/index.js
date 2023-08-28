const express = require("express");
const server = express();
const { PORT } = require("./config/config.js");
const { db } = require("./config/database.js");

db.authenticate().then(() => {
    console.log("Database conneted");
    server.listen(PORT, () => {
        console.log(`The server is listening on ${PORT}`);
    });
});
const express = require("express");
const server = express();
const { PORT } = require("./config/config.js");
const { db } = require("./config/database.js");
const cors = require("cors");
const routes = require("./server/routes/index.js");

server.use(cors());
server.use(express.json());
server.use("/api/v1", routes);

db.authenticate().then(() => {
    console.log("Database conneted");
    server.listen(PORT, () => {
        console.log(`The server is listening on ${PORT}`);
    });
});
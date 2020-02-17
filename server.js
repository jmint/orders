 
const express = require("express");
const { path } = require("./utils");
const server = express();

server.use(express.json());

server.get("/api/orders", (request, response) => {
  response.sendFile(path);
});

server.listen(3000);


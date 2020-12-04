const express = require("express");
const socket_io = require("socket.io")

wapp = express();

// Setup
let server = wapp.listen("1976", () => console.log("The server started with success. Listening on port 1976"));


// Static files
wapp.use(express.static("public"))

socket = socket_io(server);

socket.on("connection", function(){
    console.log("Connection established");
})
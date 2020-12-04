const express = require("express");
const socket = require("socket.io")

wapp = express();

// Setup
let server = wapp.listen("1976", () => console.log("The server started with success. Listening on port 1976"));


// Static files
wapp.use(express.static("public"))

io = socket(server);

// Listening for connection, the callback function has info about the socket
io.on("connection", function(socket){
    console.log("Socket connected");
})
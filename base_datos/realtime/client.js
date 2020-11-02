const io = require("socket.io-client");

let host = "http://localhost:3000";

if(process.env.NODE_ENV && process.env.NODE_ENV == 'production'){
  host = "https://cryptic-chamber-33203.herokuapp.com/";
}

let socket = io.connect(host,{reconnect: true});

socket.on("connect",function(){
  console.log("\n\nsocket connected fron NodeJS\n\n")
})

module.exports = socket;

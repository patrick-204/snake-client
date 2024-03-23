// require the client connection and user input modules as objects
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// call the connect module
connect();

// call the module that reads input from user and writes to server
setupInput();

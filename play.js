// require the client connection and user input modules as objects
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// make a const to store connect module return value
const conn = connect();

// call the module that reads input from user and writes to server.
// Have the function take the connect object return value as an argument so that can
// take data from the connection object
setupInput(conn);



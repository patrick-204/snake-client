// require the client connection object so that can send messages to the server
// const { connect } = require("./client");
// const conn = require('./play');
// define variable connection for mapping to the connect object 
// let connection = require('./play');
let connection;

// specifies what happens when data is received from stdin
// (when key is pressed on keyboard)
const handleUserInput = function(key) {
  // if ctrl+c is pressed then exit game
  if (key === "\u0003") {
    process.exit();
  }

  // if the w key is presses, write "Move: up" to the server using 
  // the connection object.
  // use unicode value
  if (key === "\u0077") {
    connection.write("Move: up");
    // console.log("test");
  }

  // if the a key is presses, write "Move: left"
  // use unicode value
  if (key === "\u0061") {
    connection.write("Move: left");
  }

  // if the s key is presses, write "Move: down"
  // use unicode value  
  if (key === "\u0073") {
    connection.write("Move: down");
  }

  // if the d key is presses, write "Move: right"
  // use unicode value
  if (key === "\u0064") {
    connection.write("Move: right");
  }
}

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", (key) => handleUserInput(key, connection));
  stdin.on("data", handleUserInput);
  return stdin;
};

// export setupInput as an object using object shorthand
module.exports = { setupInput };


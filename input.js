// define variable connection for mapping to the connect object
let connection;

// require the key constants
const { movementCommands, messagesToSnek } = require('./constants');

// specifies what happens when data is received from stdin
// (when key is pressed on keyboard)
const handleUserInput = function(key) {
  // if ctrl+c is pressed then exit game
  if (key === "\u0003") {
    process.exit();
  }

  // define a constant that is assigned the value of whichever key is pressed
  const command = movementCommands[key];

  // define a constant that is assigned the value of whichever  message key is pressed
  const message = messagesToSnek[key];

  // if the w, a, s, or d keys are pressed then move in whichever
  // direction is assigned to the properties value
  if (command) {
    connection.write(`Move: ${command}`);
  }

  // if a message key is pressed then send message to server
  if (message) {
    connection.write(`Say: ${message}`);
  }

};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
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


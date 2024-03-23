const connect = require('./client');

console.log("Connecting ...");
connect();

// specifies what happens when data is received from stdin
// (when key is pressed on keyboard)
const handleUserInput = function(key) {
  // if ctrl+c is pressed then exit game
  if (key === "\u0003") {
    process.exit();
  }
}

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
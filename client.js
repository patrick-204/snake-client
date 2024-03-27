// Require the net module so can use tcp
const net = require('net');
// require the constants module that contain TCP IP and Port
const { IP, PORT } = require("./constants");

// Create a client connection function to be exported
const connect = function() {
  // create a tcp connection using creatconnection net method and
  // set server IP and port and client name
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // set encoding to be read as plain text
  conn.setEncoding("utf-8");

  // use the on method to inidcate to client that successfully connected
  // to server
  conn.on("connect", () => {
    console.log("connected to server!");

    // make sure user inputs name as cmd line arg. If don't then exit
    if (process.argv.length < 3 || process.argv[2].length > 3) {
      console.log("Enter 3 letter name as command line argument.");
      process.exit();
    }

    // store the name given
    const name = process.argv[2];

    // write the users name to the server
    conn.write(`Name: ${name}`);
  });

  // read data from the server
  conn.on("data", (data) => {
    console.log("The snek server says: ", data);
  });

  return conn;
};

// export the connection function as an object using shorthand
module.exports = { connect };
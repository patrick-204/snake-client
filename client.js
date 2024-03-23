// Require the net module so can use tcp
const net = require('net');

// Create a client connection function to be exported 
const connect = function() {
  // create a tcp connection using creatconnection net method and 
  // set server IP and port and client name
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // set encoding to be read as plain text
  conn.setEncoding("utf-8");

  // use the on method to inidcate to client that successfully connected
  // to server
  conn.on("connect", () => {
    console.log("connected to server!");
    // send move up command to server as soon as connect
    // conn.write("Move: up");
    // write 3 letter name to server
    conn.write("Name: pat");
  });

  // read data from the server
  conn.on("data", (data) => {
    console.log("The snek server says: ", data);
  });

  return conn;
};

// export the connection function as an object using shorthand
module.exports = { connect };
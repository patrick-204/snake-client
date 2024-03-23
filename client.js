const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("connected to server!");
  });

  conn.on("data", (data) => {
    console.log("The snek server says: ", data);
  });

  return conn;
};

  module.exports = connect;
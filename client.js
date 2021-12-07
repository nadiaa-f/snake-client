const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", (data) => {
    console.log("connected to server");
    conn.write("Name: FSN");
  })

  conn.on("data", (data) => {
    console.log("message from server: ", data);
  })
  
  return conn;
};

module.exports = { connect };
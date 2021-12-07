// Stores the active TCP connection object.
let connection;

const handleUserInput = input => {

  if (input === '\u0003') {
    process.exit();
  }

  if (input === 'w') { 
    connection.write("Move: up");
  }

  if (input === 'a') { 
    connection.write("Move: left");
  }


  if (input === 's') { 
    connection.write("Move: down");
  }

  if (input === 'd') { 
    connection.write("Move: right");
  }

  if (input === 'x') { 
    connection.write("LETS GOOOOOOO!");
  }
};

const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };
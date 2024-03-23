// define and assign TCP IP and PORT
const IP = 'localhost';
const PORT = 50541;

// define movement commands in form of object
const movementCommands = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
};

// define messages for the server in form of object
const messagesToSnek = {
  'z': 'you',
  'x': 'can\'t',
  'c': 'catch',
  'v': 'me'
};

// export the IP and PORT as an object
module.exports = {
  IP,
  PORT,
  movementCommands,
  messagesToSnek
};

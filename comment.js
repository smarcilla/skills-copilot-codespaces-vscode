// create web server with express and socket.io to handle comments and likes on posts and comments in real time using websockets and express server to handle the requests

const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const io = socket(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Socket connection established', socket.id);

  socket.on('comment', (data) => {
    io.sockets.emit('comment', data);
  });

  socket.on('like', (data) => {
    io.sockets.emit('like', data);
  });
} );


const app = require('http').createServer();
const io = require('socket.io')(app);
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server has been started on port - ${PORT}`)
});

io.on('connection', function (socket) {

    socket.on('JOIN_ROOM', function (room) {
        socket.join(room)
    });
    socket.on('CHANGE_CLIENT', function (data) {
        socket.broadcast.to(data.room).emit('CHANGE_SERVER', data.code);
    });
});

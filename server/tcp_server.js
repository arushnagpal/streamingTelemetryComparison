var constants = require('../constants');
var fs = require('fs');
var contents = fs.readFileSync(constants.filename, 'utf8');

var net = require('net');
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(chunk) {
		console.log("Received post request at time: "+new Date().getTime()+"   "+process.hrtime());
	  });
	  socket.on('end', socket.end);
});

server.listen(1337, constants.serverIP);

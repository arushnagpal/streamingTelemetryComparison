var fs = require('fs');
var constants = require('../constants');
var contents = fs.readFileSync(constants.filename, 'utf8');

var net = require('net');

var client = new net.Socket();
client.connect(1337, constants.serverIP, function() {
	console.log('Connected');
});

client.on('data', function(data) {
	// console.log('Received: at ' +process.hrtime() );
	// client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});


function PostCode(){
    console.log("Starting tcp request at time: "+new Date().getTime()+"   "+process.hrtime());
	client.write(contents);
}

j=1;
function intervalFunc() {
	contents = fs.readFileSync("file"+j+".data", 'utf8');
	console.log("For file: "+"file"+j+".data")
	PostCode();
	j++;
}

setInterval(intervalFunc,constants.timeInterval);
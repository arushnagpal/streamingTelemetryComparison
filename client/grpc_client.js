var PROTO_PATH = __dirname + '/protofile.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

var fs = require('fs');

var contents = fs.readFileSync('file.data', 'utf8');

function PostCode() {
  var client = new hello_proto.Greeter('localhost:50051',grpc.credentials.createInsecure());
var data=contents;
  console.log("Sending data at time: "+new Date().getTime()+"   "+process.hrtime());
  client.sayHello({name: data}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

j=1;
function intervalFunc() {
	contents = fs.readFileSync("file"+j+".data", 'utf8');
	console.log("For file: "+"file"+j+".data")
	PostCode();
	j++;
}

setInterval(intervalFunc,constants.timeInterval);
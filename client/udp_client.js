var udp = require('dgram');
var fs = require('fs');

var constants = require('../constants');
var contents = fs.readFileSync(constants.filename, 'utf8');

var a = fs.readFileSync(constants.filename).toString().split('\n');
var dataprocess = '';

// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from(contents);

client.on('message',function(msg,info){
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

var PostCode=function(){




    i=0;
    a.forEach(function (line) { 
    dataprocess=dataprocess+line; 
    if(i%5==0){
        console.log(dataprocess);
        client.send(dataprocess,2222,constants.serverIP,function(error){
            if(error){
              client.close();
            }else{
                console.log("Starting udp request at time: "+i+" -- "+new Date().getTime()+"   "+process.hrtime());
            }
          });
          dataprocess='';
    }
    i++;
 });

 console.log("\n\n");

}

j=1;
function intervalFunc() {
	contents = fs.readFileSync("file"+j+".data", 'utf8');
	console.log("For file: "+"file"+j+".data")
	PostCode();
	j++;
}

setInterval(intervalFunc,constants.timeInterval);
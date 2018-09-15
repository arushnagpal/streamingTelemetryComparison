const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
var constants = require('../constants');

var fs = require('fs');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

 
var contents = fs.readFileSync(constants.filename, 'utf8');



var PostCode=function() {
  // Build the post string from an object
  var post_data = contents;

  // An object of options to indicate where to post to
  var post_options = {
      host: 'localhost',
      port: '9000',
      path: '/data',
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };

  // Set up the request
  console.log("Starting post request at time: "+new Date().getTime()+"   "+process.hrtime());
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
        //   console.log("Data received at time: "+new Date().getTime()+"   "+process.hrtime());
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}



j=1;
function intervalFunc() {
	contents = fs.readFileSync("file"+j+".data", 'utf8');
	console.log("For file: "+"file"+j+".data")
	PostCode();
	j++;
}

setInterval(intervalFunc,constants.timeInterval);
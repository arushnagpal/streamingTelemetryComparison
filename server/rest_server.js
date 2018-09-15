const express = require('express');
const app = express();
const bodyParser = require('body-parser')

var constants = require('../constants');
app.use(rawBody);

var fs = require('fs');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

 
var contents = fs.readFileSync(constants.filename, 'utf8');


function rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
      req.rawBody += chunk;
    });
    req.on('end', function(){
      next();
    });
  };

app.post('/data', function(req, res){
    // console.log(req.rawBody);
    if(req.rawBody!==undefined){
        console.log("Received data at time: "+new Date().getTime()+"   "+process.hrtime());
    }
    res.send('{"status":"success"}');
});


app.listen(9000, function(){
    console.log('Server app listening on port 9000!');
});






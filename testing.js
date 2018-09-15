var fs = require('fs');


fs.readFile("file.data", "utf8", function(err, data) {
    console.log("something received is "+data);
});
var http = require('http');
var fs = require('fs');


var  ws = fs.createWriteStream('sourcecode.txt');


// Options to be used by request 
var options = {
   host: 'indiacansolutions.com',

};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
ws.write(body);
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();

var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send(fs.readFileSync('~/HW3/bitstarter/index.html','utf-8'));
  var fileContent = fs.readFileSync('~/HW3/bitstarter/index.html','utf-8');
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

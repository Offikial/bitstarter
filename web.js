var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileContents = fs.readFile('~/HW3/bitstarter/index.html').toString();
  response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

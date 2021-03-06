var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(loadFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var loadFile = function (fileName) {
  var fileBuffer = fs.readFileSync(fileName);
  return fileBuffer.toString('utf8');
}

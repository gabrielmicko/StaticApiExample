var express = require('express');
var app = express();
var path = require('path');

app.get('/speakers', function(req, res) {
  res.sendFile(path.join(__dirname + '/examples/speakers.html'));
});

app.get('/speakers_with_talks', function(req, res) {
  res.sendFile(path.join(__dirname + '/examples/speakers_with_talks.html'));
});

app.get('/speakers_min', function(req, res) {
  res.sendFile(path.join(__dirname + '/examples/speakers_min.html'));
});

app.get('/speakers_with_talks', function(req, res) {
  res.sendFile(path.join(__dirname + '/examples/speakers_with_talks.html'));
});

app.listen(3001);

console.log('Running at Port 3001');

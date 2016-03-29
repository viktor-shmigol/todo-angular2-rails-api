var express = require('express');
var app = express();
var request = require('request');

app.use('/api', function(req, res) {
  var url = 'https://task-manager-api.herokuapp.com/api/' + req.url;
  req.pipe(request(url)).pipe(res);
});
app.use(express.static(__dirname + '/dist/prod'));
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/prod/index.html');
});
app.listen(process.env.PORT || 3000);

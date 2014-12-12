var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.register('html', require('jade'));

app.get('/', function(req, res){
  res.render('index.html');
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

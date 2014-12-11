var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   var query = client.query('SELECT * FROM main_table');

//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });
// });


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

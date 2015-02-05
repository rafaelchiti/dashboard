var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 4000;
app.listen(port);

console.log("Listening on port " + port);

require('./server')(app);

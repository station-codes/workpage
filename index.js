var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('duchoud working page');
});

app.get('/object', function (req, res) {
	res.send('object oriented stuff');
});

app.listen(31898, function () {

});


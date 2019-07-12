var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('duchoud working page');
});

app.listen(31898, function () {

});


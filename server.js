var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var errorHandler = require('./server/responseHandlers/errorHandler');
var port = process.env.PORT || 3000;

var app = express();

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/html', express.static(__dirname + '/client/html'));
app.use('/bower_components', express.static(__dirname + '/client/bower_components'));

app.use('/apidoc', express.static(__dirname + '/client/apidoc'));



app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description, Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {

    res.status(200).send();

  } else {

    // Pass to next layer of middleware
    next();

  }
});



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/html/index.html'));
});

// errors
app.use(errorHandler);

app.listen(port, function () {
  console.log("listening on port: "+ port);
});

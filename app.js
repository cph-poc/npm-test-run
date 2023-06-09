var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

let appInsights = require("applicationinsights");

appInsights.setup("InstrumentationKey=a012f4a3-4330-43fc-8e74-31a7a37eb235;IngestionEndpoint=https://southeastasia-1.in.applicationinsights.azure.com/;LiveEndpoint=https://southeastasia.livediagnostics.monitor.azure.com/")
.setAutoDependencyCorrelation(false)
.start();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  next(err);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;

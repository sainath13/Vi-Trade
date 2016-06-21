var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var chartman = require("./routes/chartman");
var profitloss = require("./routes/profitloss");
var msprofitloss = require("./routes/msprofitloss");

var orders = require("./routes/orders");
// var msorders = require("./routes/msorders");

var stats = require("./routes/stats");
var msstats = require("./routes/msstats");

var twitter = require("./routes/twitter");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/chartman', chartman);
app.use('/profitloss', profitloss);
app.use('/msprofitloss', msprofitloss);
app.use('/orders', orders);
// app.use('/msorders', msorders);
app.use('/stats', stats);
app.use('/msstats', msstats);
app.use('/twitter', twitter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

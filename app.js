var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var pollufic = require('./routes/pollufic');
var polluficdata = require('./routes/polluficdata');
var Parse = require('node-parse-api').Parse;
var Kaiseki = require('kaiseki');

var app_id = "mNVYu3bFR5QzmSaQ1YLfgF5ZSEqRw5VlagmXjta9";
var master_id = "XQbcWD8bhNoumKhiP5F9mgUyesK108OJONibMkZb";
var rest_id = "ZeSCKwwaX8nzzl2ZboeANbszMea2ZpokJ9W9FIEY";
var set_up = new Kaiseki(app_id, rest_id);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/pollufic', pollufic);
app.use('/polluficdata', polluficdata);



// query without parameters
set_up.getObjects('Dog', function(err, res, body, success) {
  app.locals.data = body;
  console.log('found objects = \n');
  
  
});

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

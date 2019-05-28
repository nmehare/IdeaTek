var express = require('express');
//require('./config/config'); 
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');


//NPM START
//connect to database (currently using a live database.)
//mongoose.connect('mongodb://sschapma:qwerty@ds025603.mlab.com:25603/heroku_d719vzc0',(err) => {
    mongoose.connect('mongodb+srv://nmehare:beautiful12@ideatekcluster-cudia.mongodb.net/test?retryWrites=true', {useNewUrlParser: true},(err) => {

    if (!err){
        console.log('Mongo connection success');
    }
    else{
        console.log(err);
    }
});


var options = {
    auth: {
      api_user: 'nmehare',
      api_key: 'IdeaTek'
    }
  }
  
  var client = nodemailer.createTransport(sgTransport(options));
 // sgMail.setApiKey('IdeaTek');
//mongoose.connect('mongodb://localhost/news'); //use this to connect to a local db
require('./models/Posts');
require('./models/Comments');// in order to create this record in db
require('./models/Users');
require('./config/passport');

var routes = require('./routes/index');
var app = express();//in order to work with express
app.use(cors());
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.use to configure the middleware fr application
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());//bodyparser so that we can pass json data to this app
//app.use(cors());//enable cors server and client running on diffrent port 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());

// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin',"*");
//     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers','Content_Type');
//     next();
// });

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err.stack)
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

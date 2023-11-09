var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const restaurants = require(('./routes/restaurant.routes'))
const mongoose = require('mongoose');
var app = express();
const cors = require('cors');



mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://hartza-13:hartza-13@cluster0.ps8tt3c.mongodb.net/')
        .then(() => console.log("con succ"))
        .catch((err) => console.log(err))




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');




app.use(cors({
  origin: 'http://localhost:5174/', // โดเมนหรือ URL ของ frontend ของคุณ
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // HTTP methods ที่ยอมรับ
  credentials: true, // อนุญาตให้ส่งคุกกี้ระหว่างโดเมน
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/restaurants', restaurants);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept');
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

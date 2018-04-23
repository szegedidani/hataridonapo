var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/datebases')
const helmet = require('helmet')

var datesRouter = require('./routes/dates');
var usersRouter = require('./routes/users');



// Connect to MongoDB
mongoose.connect(db.uri, db.options).then(
  () => {
    console.log('MongoDB connected.')
  },
  err => {
    console.error('MongoDB error.:' + err)
  }
);


var app = express();
const port = "3500"

//CORS Handler
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use(helmet());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dates', datesRouter);
app.use('/users', usersRouter);

//Set Body-Parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})





module.exports = app;
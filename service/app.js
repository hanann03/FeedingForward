var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require ('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors({
  origin: '*', // Replace with the allowed origin
  methods: ['GET', 'POST'],    // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose
  .connect(
    "mongodb+srv://salmahossam:salmahossam@backenddb.fjbdw.mongodb.net/feedingForward?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("connected to DB");

    app.post("/orders", async (req, res) => {
      try {

        var order = await Order.create(req.body);
        res.status(200).json(order);
      } catch (error) {
        
        res.status(500).json({ message: error.message });
      }
    });
  }).catch(() => {
    console.log("connection failed");
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

// app.post('/order', async (req, res) => {
//   try {
//       const order = await OrderForm.create(req.body); 
//       res.status(200).json(order);
//   } catch (error) {
//       console.error('Error creating order:', error.message); 
//       res.status(500).json({ message: error.message });
//   }
// });

module.exports = app;

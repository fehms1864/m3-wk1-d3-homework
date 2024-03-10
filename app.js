var express = require('express');
var path = require('path');

var routes = require('./routes/content');
var app = express();

// view engine setup for pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Go to routes folder to access content.js
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

//Execute and see this code on port 3000
app.listen(3300);

module.exports = app;

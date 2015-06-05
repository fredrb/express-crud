var app         = require('express')();
var bodyParser  = require('body-parser');
var multer      = require('multer');

// parse post body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(multer());

// load view engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/client');

// use router
var router = require('./route.js');
app.use('/', router);

module.exports = app;

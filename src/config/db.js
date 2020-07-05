var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bookstore");
mongoose.Promise = global.Promise;
var connection = mongoose.connection;
connection.once('open', function () {
    console.log('connected to database');

});

connection.on('error', function () {
    console.error("Mongoose connection error");

});
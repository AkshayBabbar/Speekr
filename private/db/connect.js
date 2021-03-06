/**
 * Helpful database connection methods
 */

var Constants = require('../constants');

// Established database connection

var mongoose = require('mongoose');

var dbURI = Constants.MONGOLAB_URI;
mongoose.connect(dbURI);

// when connected with db
mongoose.connection.on('connected', function() {
  console.log('Connected to db ' + dbURI);
});

// some error when connecting
mongoose.connection.on('error', function(err) {
  console.log('Connection error: ' + err);
});

// disconnected from db
mongoose.connection.on('disconnected', function() {
  console.log('Disconnected from DB.');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Disconnected from DB by app.');
    process.exit(0);
  });
});

// bring in all models
require('./../models/user');
require('./../models/thing');

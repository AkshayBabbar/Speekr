/*
  Schema for a user.
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// For any user
var userSchema = new Schema({
  created_at: {
    // auto added user registration timestamp
    type: Date,
    default: Date.now
  },
  accessToken: {
    type: String
  },
  accessTokenSecret: {
    type: String
  },
  photo: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true // force email lowercase
  },
  name: {
    type: String
  },
  linkedinId: String
});


module.exports = mongoose.model('User', userSchema);

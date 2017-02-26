const Q = require('q');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const SALT_WORK_FACTOR = 10;

let UserSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,  
  location: {
    address: String,
    city: String,
    state: String,
    zip: Number
  },
  age: Number,
  meta: {
    gender: String,
    dementia: Boolean,
    diabetes: Boolean,
    cancer: Boolean,    
    heart: Boolean,
    stroke: Boolean,
    smoker: Number,
    weight: Number,
    diet: Number,
    drinker: Number,
    maritalStatus: String,
    
  },
  created_at: Date,
  updated_at: Date
});

UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};


module.exports = mongoose.model('users', UserSchema);
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const userSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true,  unique: true, },
	hash: String,
  	salt: String
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.createJwt = function() {
	return jwt.sign({
		_id: this._id,
		email: this.email,
		name: this.name,
	}, process.env.SECRET_JWT)
}

module.exports = mongoose.model('User', userSchema);
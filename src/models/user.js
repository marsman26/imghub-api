const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true },
	password: {type: String, required: true },
});


userSchema.methods.createJwt = function() {
	return jwt.sign({
		_id: this._id,
		email: this.email,
		name: this.name,
	}, process.env.SECRET_JWT)
}


module.exports = mongoose.model('User', userSchema);
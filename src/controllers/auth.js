const mongoose = require('mongoose');
const User = require('../models/user');

exports.register = (req, res) => {
	const {name, email, password} = req.body;
	if(name && email && password) {
		const newUser = new User({name, email});
		newUser.setPassword(password);
		newUser.save(err => {
			if(err) {
				res.json({err}).status(402);
				console.log(err);
			} else {
				try{
					res.json({token: newUser.createJwt()}).status(200);

				} catch(e) {
					res.status(402).json({e});
				}
			}
		})
	}

}

exports.user = (req, res) => {
	const {id} = req.params;
	
	User.findById(id, (err, user) => {
		if(err) {
			res.json({err}).status(404);
		} else {
			const {name, email, _id} = user;
			res.json({name, email, _id}).status(201);
		}
	});
}

exports.login = (req, res) => {
	const {email, password} = req.body;
	if(email && password) {
		User.find({email}, (err, user) => {
			if(err) {
				res.json({err}).status(402);
			} else {
				if(user[0].validPassword(password)) {
					try {
						res.json({token: user[0].createJwt()}).status(200);
					} catch(e) {
						res.json({e}).status(401);
					}
				} else {
					res.json({err: 'password incorrect'}).status(401);
				}
			}
		})
	} else {
		res.json({err: 'Email and password are required'}).status(402);
	}
}
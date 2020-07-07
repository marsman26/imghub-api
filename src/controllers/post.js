const mongoose = require('mongoose');
const Post = require('../models/post');
const fs = require('fs');

exports.send = (req, res) => {
	fs.writeFile('./img/' + req.file.originalname, req.file.buffer, err => {
		if(err) throw err;
		res.json(req.file.originalname);
	});
}


exports.create = (req, res) => {
	
}

exports.delete = (req, res) => {

}

exports.change = (req, res) => {

}
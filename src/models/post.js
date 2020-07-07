const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	url: { type: String, required: true }, 
	date: {type: Date, required: true },
	author: {type: String, required: true},
	visibility: {type: Number, required: true} // 0-only for user 1-only link 2-whole visibility
})
const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
	isActive: {
		type: Number,
		required: true
	}
})

module.exports = mongoose.model('posts', postsSchema)
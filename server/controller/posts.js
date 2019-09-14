const express = require('express')
const Post    = require('../models/post')

exports.posts = (req, res) => {
	const post = new Post(
		{
			title: 'test',
			content: 'test',
			imageUrl: '1.jpg',
			isActive: 1
		}
	)
	post.save()
	.then(response => console.log('added!'))
}
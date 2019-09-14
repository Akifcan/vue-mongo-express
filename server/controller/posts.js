const express = require('express')
const Post    = require('../models/post')

exports.addPost = (req, res) => {
	const title = req.body.title
	const content = req.body.content
	const post = new Post(
	{
		title: title,
		content: content,
		imageUrl: '1.jpg',
		isActive: 1
	}
	)
	post.save()
	.then(response => console.log('added!'))
}

exports.posts = (req,  res) => {
	Post.find({isActive: 1})
	.sort({title: 1})
	.then(response => {
		res.send(response)
	})
}

exports.getLast = (req, res) => {
	Post.findOne({}, {}, {sort: {_id: -1}})
	.then(response => {
		res.send(response)
	})
}

exports.postDetail = (req, res) => {
	const id = req.body.id
	Post.findOne({_id: id})
	.then(response => {
		res.send(response)
	})
} 
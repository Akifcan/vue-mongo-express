const express = require('express')
const mongodb = require('mongodb')
const postController = require('../../controller/posts')

const router = express.Router()

router.post('/add', postController.addPost)
router.get('/lastAdded', postController.getLast)
router.get('/', postController.posts)
router.post('/detail', postController.postDetail)

module.exports = router
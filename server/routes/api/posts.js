const express = require('express')
const mongodb = require('mongodb')
const postController = require('../../controller/posts')

const router = express.Router()

router.get('/', postController.posts)

module.exports = router
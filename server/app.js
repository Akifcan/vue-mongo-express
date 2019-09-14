const express 	 = require('express')
const bodyParser = require('body-parser')
const cors 		 = require('cors')
const posts      = require('./routes/api/posts')
const mongoose   = require('mongoose')

const app = express()

//Midleware
app.use(bodyParser.json())
app.use(cors())
app.use('/api/posts',posts)

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})
.then(response => {
	app.listen(3000, () => {
		console.log('working on 3000')
	})	
})

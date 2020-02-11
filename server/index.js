const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
const dishs = require('./routes/api/dishs')
const categories = require('./routes/api/categories')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/api/dishs', dishs)
app.use('/api/categories', categories)

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
  app.listen(port)
}

module.exports = app

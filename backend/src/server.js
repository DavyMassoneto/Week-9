const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
mongoose.connect('mongodb://omnistack:omnistack@mongo:27017/week-9', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// FindOneAndUpdate is deprecated but findAndModify don't have implements.
mongoose.set('useFindAndModify', false);

app.use(express.json())
app.use(routes)

app.listen(3000)

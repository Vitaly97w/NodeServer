const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: String,
  age: Number,
  email: String,
})

module.exports = model('users', schema)

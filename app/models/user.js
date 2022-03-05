import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  email: 'string',
  password: 'string',
  name: 'string',
  lastName: 'string'
})

const User = mongoose.model('user', schema)

export { User }

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

schema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

schema.methods.isValidPassword = async function (password) {
  await bcrypt.compare(password, this.password)
}

const User = mongoose.model('user', schema)

export { User }

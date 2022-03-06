import { User } from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const index = (req, res) => res.json({ user: req.user })

const store = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' })
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
    return res.status(404).json({ message: 'Incorrect password' })
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.TOKEN_KEY, { expiresIn: '2h' })

  return res.status(201).json({ data: { token }, message: 'You are logged in' })
}

const update = (req, res) => {
  const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.TOKEN_KEY, { expiresIn: '2h' })

  return res.status(201).json({ data: { token }, message: 'New token created' })
}

const destroy = (req, res) => {
  User.deleteOne({ _id: req.user.id })

  return res.status(200).json({ message: 'User deleted' })
}

export default { index, store, update, destroy }

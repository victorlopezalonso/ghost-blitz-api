import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

const index = async (req, res) => {
  const users = await User.find().select('-_id name').exec()

  return res.json({ data: users })
}

const store = async (req, res) => {
  if (await User.findOne().or([{ email: req.body.email }, { username: req.body.username }])) {
    return res.status(409).json({ message: 'Email/Username already exists' })
  }

  const { username, email, password } = req.body

  const user = await User.create({ username, email, password })

  const token = jwt.sign({ id: user._id, email }, process.env.TOKEN_KEY, { expiresIn: '2' })

  return res.status(201).json({ data: { token }, message: 'User created' })
}

const update = (req, res) => res.json({ service: 'users update' })

const destroy = (req, res) => res.json({ service: 'users destroy' })

export default { index, store, update, destroy }

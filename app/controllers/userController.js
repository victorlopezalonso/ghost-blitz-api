import { User } from '../models/user.js'

const index = async (req, res) => {
  const users = await User.find({ email: req.query.email }).exec()

  res.json({ data: users })
}

const store = async (req, res) => {
  if (await User.findOne({ email: req.body.email })) {
    return res.status(409).json({ message: 'Email already exists' })
  }

  const { name, lastName, email, password } = req.body

  const user = await User.create({ name, lastName, email, password })

  return res.status(201).json({ data: user, message: 'User created' })
}

const update = (req, res) => res.json({ service: 'users update' })

const destroy = (req, res) => res.json({ service: 'users destroy' })

export default { index, store, update, destroy }

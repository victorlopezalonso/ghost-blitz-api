import { Game } from '../models/game.js'

const index = (req, res) => res.json({ service: 'games index' })

const store = async (req, res) => {
  const game = await Game.create({ user: req.user._id })

  return res.status(201).json({ data: game, message: 'Game created' })
}

const update = (req, res) => res.json({ service: 'games update' })

const destroy = (req, res) => res.json({ service: 'games destroy' })

export default { index, store, update, destroy }

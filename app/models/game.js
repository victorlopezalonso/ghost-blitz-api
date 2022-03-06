import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const Game = mongoose.model('game', schema)

export { Game }

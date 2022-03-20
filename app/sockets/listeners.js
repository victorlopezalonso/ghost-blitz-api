import { Game } from '../models/game.js'

const emitNewScreen = (client) => client.emit('new-screen', {
  question: 'Pick a number',
  response: Math.floor(Math.random() * 2)
})

const handleUserResponse = (client, arg) => {
  client.emit(arg.original.response === arg.response ? 'win' : 'fail')
  // setTimeout(() => emitNewScreen(client), 1500)
}

export default (client) => {
  client.on('join', async (arg) => {
    const game = await Game.findOne({ id: arg.gameId })
    client.emit(game ? 'joined-to-game' : 'wrong-game-id', arg)
  })

  client.on('start-game', async () => emitNewScreen(client))

  client.on('user-response', arg => handleUserResponse(client, arg))
}

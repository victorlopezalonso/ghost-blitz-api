const socket = io('http://localhost:3300', {
  withCredentials: true
})

socket.emit('join', { gameID: 'a6236f08f6526cc20efa9899f' })

socket.on('new-screen', (event) => {
  console.log(event)
  setTimeout(() => {
    const response = Math.floor(Math.random() * 2)
    console.log('User response: ' + response)
    socket.emit('user-response', { original: event, response })
  }, 2500)
})

socket.on('win', () => console.log('win!'))
socket.on('fail', () => console.log('fail!'))

// Start game
setTimeout(() => {
  socket.emit('start-game', { gameID: 'a6236f08f6526cc20efa9899f' })
}, 1500)

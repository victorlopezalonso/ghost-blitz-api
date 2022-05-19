const socket = io('http://localhost:3300', {
  withCredentials: true,
  auth: {
    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjQ4ZmY5MGE2ZTE2NjYzZWQ5NDgxMiIsImVtYWlsIjoidmljdG9ybG9wZXphbG9uc29AZ21haWwuY29tIiwiaWF0IjoxNjUyOTUyODYwLCJleHAiOjE2NTI5NjAwNjB9.9BTErJPnglx8jWcTPLNl6MdiqjL07XvcF0lBYsLcY_U'
  }
})

socket.emit('join', { gameID: 'a6236f08f6526cc20efa9899f' })

const respond = (event, response) => socket.emit('user-response', { original: event, response })

socket.on('new-screen', (event) => {
  console.log(event)
  window.document.getElementById('response').textContent = ''
  window.document.getElementById('question').textContent = event.question
  window.document.getElementById('btn0').onclick = () => respond(event, 0)
  window.document.getElementById('btn1').onclick = () => respond(event, 1)
  // setTimeout(() => {
  //   const response = Math.floor(Math.random() * 2)
  //   console.log('User response: ' + response)
  //   socket.emit('user-response', { original: event, response })
  // }, 2500)
})

socket.on('win', () => {
  console.log('win!')
  window.document.getElementById('response').textContent = 'WIN!!!'
  window.document.getElementById('question').textContent = ''
})

socket.on('fail', () => {
  console.log('fail!')
  window.document.getElementById('response').textContent = 'FAIL!!!'
  window.document.getElementById('question').textContent = ''
})

// client-side
socket.on('connect_error', (err) => {
  console.log(err.message) // not authorized
})

// Start game
setTimeout(() => {
  socket.emit('start-game', { gameID: 'a6236f08f6526cc20efa9899f' })
}, 1500)

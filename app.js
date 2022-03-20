import 'dotenv/config'
import express from 'express'
import users from './routes/users.js'
import sessions from './routes/sessions.js'
import games from './routes/games.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import listeners from './app/sockets/listeners.js'
import('./db/connection.js')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:8080',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.on('connection', listeners)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())

httpServer.listen(process.env.SERVER_PORT)

// app.listen(process.env.SERVER_PORT, () => {
//   console.log(`App listening on port ${process.env.SERVER_PORT}`)
// })

/**********************
 * Routes V1
 **********************/
app.use('/api/v1/sessions', sessions)
app.use('/api/v1/users', users)
app.use('/api/v1/games', games)

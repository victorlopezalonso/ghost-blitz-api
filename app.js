import 'dotenv/config'
import express from 'express'
import users from './routes/users.js'
import sessions from './routes/sessions.js'
import('./db/connection.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on port ${process.env.SERVER_PORT}`)
})

/**********************
 * Routes V1
 **********************/
app.use('/api/v1/sessions', sessions)
app.use('/api/v1/users', users)

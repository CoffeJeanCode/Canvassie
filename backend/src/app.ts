import express, { Response } from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import sockets from './sockets'

// Initializations
const app = express()
const server = createServer(app)
const io = new Server(server)

// Settings
app.set('port', process.env.PORT || 4000)

// static
app.use(express.static(path.join(__dirname, 'public')))

// socket
io.on('connection', (socket: Socket) => {
  sockets(socket, io)
})

export { app, server }

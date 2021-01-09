import { Socket, Server } from 'socket.io'
import { v4 as uuid } from 'uuid'

interface Cursor {
  x: number
  y: number
}

export default function sockets(socket: Socket, io: Server) {
  socket.on('joinUser', (cursor: Cursor) => {
    socket.broadcast.emit('joinUser', cursor)
    socket.join(uuid() + uuid())
  })

  socket.on('move', (cursor: Cursor) => {
    socket.broadcast.emit('mousemove', cursor)
  })
}

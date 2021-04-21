import { Socket, Server } from "socket.io";
import { v4 as uuid } from "uuid";

interface Cursor {
  x: number;
  y: number;
}

const cursorList = [];

const sockets = (io: Server) => (socket: Socket) => {
  socket.on("joinUser", (cursor: Cursor) => {
    socket.broadcast.emit("joinUser", cursor);
    cursorList.push(cursor);
    socket.join(uuid());
  });

  socket.on("move", (cursor: Cursor) => {
    socket.broadcast.emit("mousemove", cursor);
  });
};

export default sockets;

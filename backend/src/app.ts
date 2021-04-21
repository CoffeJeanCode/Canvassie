import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import sockets from "./sockets";

// Initializations
const app = express();
const server = createServer(app);
const io = new Server(server);

// Settings
app.set("port", process.env.PORT || 4000);

// static
app.use(express.static(path.join(__dirname, "public")));

// socket
io.on("connection", sockets(io));

export { app, server };

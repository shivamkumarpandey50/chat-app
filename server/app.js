import express from "express";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {});

app.get("/", (req, res) => {
  res.send("hello world!");
});

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log("Id", socket.id);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

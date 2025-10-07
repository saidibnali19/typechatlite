import { NextApiRequest } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Server as HTTPServer } from "http";
import type { NextApiResponseServerIO } from "@/types/socket";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO,
) {
  if (!res.socket.server.io) {
    console.log("Starting new Socket.io server...");
    const io = new SocketIOServer(
      (res.socket.server as any).http as HTTPServer,
      {
        path: "/api/socket",
        addTrailingSlash: false,
        cors: {
          origin: "*",
        },
      },
    );

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("send-message", (msg) => {
        console.log("Message received:", msg);
        socket.broadcast.emit("receive-message", msg);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    (res.socket.server as any).io = io;
  }
  res.end();
}

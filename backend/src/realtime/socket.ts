import { Server } from "socket.io";
import http from "http";
let ioInstance;
export function initRealtimeLogs(server) {
  ioInstance = new Server(server, { path: "/realtime", cors: { origin: process.env.FRONTEND_ORIGIN || "*" }, });
  ioInstance.on("connection", socket => {
    socket.on("identify", (payload) => {
      if (payload?.userId) socket.join(`user-${payload.userId}`);
    });
  });
  return ioInstance;
}
export const io = {
  emit: (...args) => ioInstance?.emit(...args),
  to: (room) => ioInstance?.to(room),
};

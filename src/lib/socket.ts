// lib/socket.ts (frontend)
import { io } from "socket.io-client";

// Хэрвээ Vercel, production орчинд байвал origin тохируулна
const socket = io("http://localhost:4000", {
  transports: ["websocket"],
});

export default socket;

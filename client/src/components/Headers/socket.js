import socketIO from "socket.io-client";
const ENDPOINT = 'http://localhost:4000/';


export const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });
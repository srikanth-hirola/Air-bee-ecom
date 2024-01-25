import socketIO from "socket.io-client";
const ENDPOINT = 'https://chat.airbee.co.in/';


export const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });
import { io } from "socket.io-client";

const socketInit = () => {
  return io("http://localhost:5050");
};

export default socketInit;

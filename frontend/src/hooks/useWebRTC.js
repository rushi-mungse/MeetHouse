import { useStateWithCallback } from "./useStateWithCallback";
const user = [
  { id: 1, name: "Rushikesh Mungse" },
  { id: 2, name: "Rushikesh Mungse" },
];

export const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback(user);
  return { clients };
};

import { useStateWithCallback } from "./useStateWithCallback";

export const useWebRTC = () => {
  const user = [
    { id: 1, name: "Rushikesh Mungse" },
    { id: 2, name: "Rushikesh Mungse" },
  ];
  const [clients, setClients] = useStateWithCallback(user);
  return { clients };
};

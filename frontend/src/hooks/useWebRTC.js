import { useRef, useEffect, useCallback } from "react";
import socketInit from "../socket";
import { useStateWithCallback } from "./useStateWithCallback";

export const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback([]);
  const audioElements = useRef({});
  const connections = useRef({});
  const localMediaStream = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = socketInit();
  }, []);

  const provideRef = (instance, userId) => {
    audioElements.current[userId] = instance;
  };

  const addNewClient = useCallback(
    (newClient, cb) => {
      const lookingFor = clients.find((client) => client._id === newClient._id);
      if (lookingFor === undefined) {
        setClients((existingClients) => [...existingClients, newClient], cb);
      }
    },
    [clients, setClients]
  );
  //cpture media stream
  useEffect(() => {
    const startCaptureMedia = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    };

    startCaptureMedia().then(() => {
      addNewClient(user, () => {
        const localElement = audioElements.current[user._id];
        if (localElement) {
          localElement.volume = 0;
          localElement.srcObject = localMediaStream.current;
        }
        socket.current.emit("hello", { name: "Rushi" });
      });
    });
  }, []);

  return { clients, provideRef };
};

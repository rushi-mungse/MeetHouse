import { useWebRTC } from "../hooks/useWebRTC";

const Room = () => {
  const { clients } = useWebRTC();
  return (
    <div className="container items-center flex justify-center screen-height">
      {clients.map((client) => {
        return (
          <div key={client.id}>
            <audio controls autoPlay></audio>
            <h1>{client.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Room;

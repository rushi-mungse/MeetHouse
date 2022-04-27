import { useWebRTC } from "../hooks/useWebRTC";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { clients } = useWebRTC(roomId, user);

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

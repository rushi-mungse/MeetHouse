import { useWebRTC } from "../hooks/useWebRTC";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { clients, provideRef } = useWebRTC(roomId, user);

  return (
    <div className="container items-center flex justify-center screen-height">
      {clients.map((client) => {
        return (
          <div key={client._id}>
            <audio
              ref={(instance) => provideRef(instance, client._id)}
              controls
              autoPlay
            ></audio>
            <h1>{client.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Room;

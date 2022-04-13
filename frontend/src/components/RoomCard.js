import { Link } from "react-router-dom";
const RoomCard = ({ room }) => {
  return (
    <div className="flex  px-4 py-2 flex-col bg-gray-700 rounded-md ">
      <Link to={`/rooms/${room._id}`}>
        <h1 className="mb-4 text-orange-500 text-lg font-bold h-12 ">
          {room.topic}
        </h1>
      </Link>
      <div className="flex items-center justify-between">
        <div className="rounded-full h-12 w-12 border-2 border-orange-500 overflow-hidden flex items-center justify-center">
          {room.speakers.map((speaker) => {
            return (
              <img
                src={`${process.env.REACT_APP_BASE_URL}${speaker.avatar}`}
                alt="chat"
                key={speaker._id}
              />
            );
          })}
        </div>

        {room.speakers.map((speaker) => {
          return (
            <div className="flex items-center justify-center" key={speaker._id}>
              <img src="/images/chat-bubble.png" alt="chat" />
              <h1 className="text-yellow-500 ml-2">{speaker.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-white ml-2 flex items-center justify-center">
          <img src="/images/user-icon.png" alt="user" className="h-3" />
          <span className="ml-1 font-bold text-gray-400"> : 40</span>
        </span>
        <span className="flex items-center justify-center text-white">
          <img src="/images/red-heart.png" alt="heart" className="h-5 mr-1" />:
          <span className="ml-1 text-lg">40</span>
        </span>
      </div>
    </div>
  );
};

export default RoomCard;

import RoomCard from "../components/RoomCard";
import { useState } from "react";
import RoomModel from "../components/RoomModel";

const Room = () => {
  const [createRoomPage, setCreateRoomPage] = useState(false);
  const createRoom = () => {
    setCreateRoomPage(true);
  };
  const closingCreateRoomPage = () => {
    setCreateRoomPage(false);
  };
  return !createRoomPage ? (
    <div className="container mx-auto screen-height">
      <div className="flex justify-between items-center mt-8 ">
        <div className="flex items-center justify-center w-1/2">
          <h1 className="w-32 text-lg font-bold text-after relative">
            All Rooms!
          </h1>
          <div className="flex items-center justify-between bg-gray-300 px-4 w-full ml-8 py-1">
            <input
              type="text"
              placeholder="Search room here"
              className="outline-none border-none bg-gray-300 w-4/5 placeholder:text-gray-900"
            />
            <img
              src="/images/search.png"
              alt="search"
              className="h-6 cursor-pointer"
            />
          </div>
        </div>
        <button
          className="text-lg py-1 px-4 text-white font-bold bg-orange-500 hover:bg-orange-600 transition-all ease-in-out duration-300"
          onClick={createRoom}
        >
          Create Room
        </button>
      </div>
      <hr className="bg-orange-500 w-full h-1 mt-8" />
      <div className="grid grid-cols-4 gap-4 py-4">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  ) : (
    <div>
      <RoomModel closeCreateRoomPage={closingCreateRoomPage} />
    </div>
  );
};

export default Room;

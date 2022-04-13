import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { createRoom } from "../http";

const RoomModel = ({ closeCreateRoomPage }) => {
  const styles = {
    boxStyle:
      "bg-gray-300 p-4 flex items-center justify-center flex-col rounded-lg w-24 cursor-pointer transition-all duration-300 ease-in-out",
  };

  const [type, setType] = useState("open");
  const [topic, setTopic] = useState("");

  const getData = async () => {
    if (!topic) return toast.error("Please fill all fields");
    try {
      const payload = { topic, type };
      const { data } = await createRoom(payload);
      console.log(data);
    } catch (error) {
      console.log(error);
      return toast.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center screen-height">
        <div
          style={{ width: "500px" }}
          className="relative bg-gray-100 py-8 px-12 rounded-lg"
        >
          <button
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 duration-300 transition-all ease-in-out"
            onClick={closeCreateRoomPage}
          >
            <img src="/images/close.png" alt="close" />
          </button>
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-bold mb-2">Enter the room details :</h2>
            <input
              placeholder="Enter Topic Name!"
              className="outline-none border-none bg-gray-300 placeholder:text-gray-900 px-2 py-1 w-full rounded-md"
              onChange={(e) => setTopic(e.target.value)}
            />
            <div className={`flex items-center justify-around py-4 `}>
              <div
                className={`${styles.boxStyle} ${
                  type === "open" ? "bg-green-400" : ""
                }`}
                onClick={() => setType("open")}
              >
                <img src="/images/globe.png" alt="global" />
                <span>Open</span>
              </div>
              <div
                className={`${styles.boxStyle} ${
                  type === "lock" ? "bg-green-400" : ""
                }`}
                onClick={() => setType("lock")}
              >
                <img src="/images/lock.png" alt="lock" />
                <span>Lock</span>
              </div>
              <div
                className={`${styles.boxStyle} ${
                  type === "social" ? "bg-green-400" : ""
                }`}
                onClick={() => setType("social")}
              >
                <img src="/images/social.png" alt="social" />
                <span>Social</span>
              </div>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="mt-4">
            <p className="text-orange-400 text-lg font-bold">
              Start Room, Happy Journey!
            </p>
            <div className="flex items-center justify-center mt-4">
              <Button img="celebration" text="Create Room" onClick={getData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModel;

const RoomCard = () => {
  return (
    <div className="flex  px-4 py-2 flex-col bg-gray-700 rounded-md ">
      <h1 className="mb-4 text-orange-500 text-lg font-bold h-12 ">
        JavaSctipt is awesome!!
      </h1>
      <div className="flex items-center justify-between">
        <div className="rounded-full h-12 w-12 border-2 border-orange-500 overflow-hidden flex items-center justify-center">
          <img src="/images/monkey-emoji.png" alt="monkey" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/chat-bubble.png" alt="chat" />
          <h1 className="text-yellow-500 ml-2">Rushikesh Mungse</h1>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-white ml-2">Total : 45</span>
        <span className="flex items-center justify-center text-white">
          <img src="/images/red-heart.png" alt="heart" className="h-6 mr-4" />:{" "}
          <span className="ml-4 text-lg">40</span>
        </span>
      </div>
    </div>
  );
};

export default RoomCard;

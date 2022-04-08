import { Link } from "react-router-dom";
import { RiUserVoiceFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <nav className="border-b border-gray-400 py-4 sm:px-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center justify-center">
          <span className="text-3xl mr-2 text-orange-600">
            <RiUserVoiceFill />
          </span>
          <span className="text-3xl font-bold text-orange-600 branding tracking-wide">
            MeetHouse
          </span>
        </Link>
        {!isAuth && (
          <Link
            to={"/authenticate"}
            className="bg-orange-500 py-1 px-4 flex justify-center items-center rounded-full hover:bg-orange-600 duration-300 ease-in-out"
          >
            <span className=" font-bold text-lg text-white ">Register</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

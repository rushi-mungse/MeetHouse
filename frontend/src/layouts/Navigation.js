import { Link } from "react-router-dom";
import { RiUserVoiceFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/slices/authSlice";

const Navigation = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutBtn = async () => {
    try {
      const { data } = await logout();
      toast.success("Logged out your account.");
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
      return toast.error(error.message);
    }
  };

  return (
    <nav className="border-b border-gray-400 py-4 sm:px-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center justify-center">
          <span className={`text-3xl mr-2 text-orange-600 `}>
            <RiUserVoiceFill />
          </span>
          <span
            className={`text-3xl font-bold text-orange-600 branding tracking-wide `}
          >
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
        {isAuth && (
          <div className="flex justify-center items-center">
            {user && user.activated && (
              <>
                <Link
                  to={"/profile"}
                  className="mr-4 text-orange-600 text-lg italic"
                >
                  {user.username}
                </Link>
                <div className="h-12 w-12 rounded-full border-2 border-gray-900 overflow-hidden flex items-center justify-center mr-4">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${user.avatar}`}
                    alt=""
                    className="h-12 w-12"
                  />
                </div>
              </>
            )}
            <button
              onClick={logoutBtn}
              className="py-1 px-4 bg-orange-500 font-bold hover:bg-orange-600 duration-300 transition-all text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

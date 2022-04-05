import PropsType from "prop-types";
import { useNavigate } from "react-router-dom";
const Card = ({ heading, img, backButton, children }) => {
  const navigate = useNavigate();
  const backToPrevPage = () => {
    navigate(-1);
  };
  return (
    <div className="bg-gray-100 w-11/12 sm:w-11/12 md:w-2/3 lg:w-1/2 px-8 py-12 flex justify-center items-center flex-col rounded-lg mx-auto relative">
      {backButton && (
        <div
          className="absolute top-4 left-4 flex items-center justify-center bg-orange-500 px-4 py-1 rounded-md cursor-pointer"
          onClick={backToPrevPage}
        >
          <img src="/images/arrow-left.png" alt="arrow" />
          <span className="ml-2 text-lg text-white">Back</span>{" "}
        </div>
      )}
      <div className="flex items-center justify-center">
        <img src={`/images/${img}.png`} alt="logo" />
        <h1 className="text-2xl sm:text-3xl font-bold ml-4">{heading}</h1>
      </div>
      {children}
    </div>
  );
};

Card.prototype = {
  heading: PropsType.srting,
  img: PropsType.string,
};
Card.defaultProps = {
  heading: "Welcome to MeetHouse",
  img: undefined,
};
export default Card;

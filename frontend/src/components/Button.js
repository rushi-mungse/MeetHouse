import PropsType from "prop-types";
const Button = ({ text, img, onClick }) => {
  return (
    <button
      className="bg-orange-500 py-1 px-4 flex justify-center items-center rounded-full hover:bg-orange-600 duration-300 ease-in-out"
      onClick={onClick}
    >
      <span className="mr-2 font-bold text-lg text-white ">{text}</span>
      {img && <img src={`/images/${img}.png`} alt="arrow-forward" />}
    </button>
  );
};

Button.prototype = {
  text: PropsType.string,
  img: PropsType.string,
};

Button.defaultProps = {
  text: "Next",
  img: "arrow-forward",
};
export default Button;

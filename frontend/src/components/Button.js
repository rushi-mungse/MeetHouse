const Button = ({ text, img }) => {
  return (
    <button className="bg-orange-500 py-1 px-4 flex justify-center items-center rounded-full hover:bg-orange-600 duration-300 ease-in-out">
      <span className="mr-2 font-bold text-lg text-white ">{text}</span>
      {img && <img src={`/images/${img}.png`} alt="arrow-forward" />}
    </button>
  );
};

export default Button;

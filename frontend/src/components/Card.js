import PropsType from "prop-types";
const Card = ({ heading, children }) => {
  return (
    <div>
      <div className="bg-gray-100 w-11/12 sm:w-11/12 md:w-2/3 lg:w-1/2   px-8 py-12  flex justify-center items-center flex-col rounded-lg mx-auto">
        <div className="flex items-center justify-center">
          <img src="/images/logo.png" alt="logo" />
          <h1 className="text-2xl sm:text-3xl font-bold ml-4">{heading}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

Card.prototype = {
  heading: PropsType.srting,
};
Card.defaultProps = {
  heading: "Welcome to MeetHouse",
};
export default Card;

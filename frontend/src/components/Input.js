const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="my-4 py-2 px-4 placeholder:text-gray-900 bg-gray-300 w-1/3 rounded-md outline-none border-none"
    />
  );
};

export default Input;

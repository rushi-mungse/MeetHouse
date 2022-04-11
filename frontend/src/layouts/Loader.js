const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full rounded-lg bg-white flex items-center justify-center flex-col">
        <img
          src="/images/loader.png"
          alt="loader"
          className="h-24 animate-spin"
        />
        <h1 className="mt-12 text-lg " style={{ color: "#00A2DF" }}>
          Please wait your process is running...
        </h1>
      </div>
    </div>
  );
};

export default Loader;

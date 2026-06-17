const Hero = () => {
  return (
    <div className="hero bg-[#1313130D] min-h-screen rounded-xl mt-5 md:mt-10 ">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div>
          <img
            src="https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png"
            className="max-w-sm rounded-lg shadow-2xl h-90 lg:h-full"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6 max-w-sm">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

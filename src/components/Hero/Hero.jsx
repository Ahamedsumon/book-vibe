import bannerImage from "../../assets/books.jpg"
const Hero = () => {
  return (
    <div className="hero bg-[#1313130D] py-10 rounded-xl mt-5 md:mt-10">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div>
          <img
            src={bannerImage}
            className="max-w-sm rounded-lg shadow-2xl h-80 lg:h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-sm playfair-display-font">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

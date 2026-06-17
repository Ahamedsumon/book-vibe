const Book = () => {
  return (
    <div className="card bg-base-100 shadow-sm ">
      <figure className="px-4 pt-4 ">
        <div className="bg-[#F3F3F3] p-3">
          <img
            src="https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png"
            alt="Shoes"
            className="rounded-sm h-41.5"
          />
        </div>
      </figure>
      <div className="card-body  ">
        <div className="flex text-[#23BE0A] w-[70%]">
          <p>Young Adult</p>
          <p>Identity</p>
        </div>
        <h2 className="card-title text-2xl font-bold">
          The Catcher in the Rye
        </h2>
        <p className="text-[#131313CC]">By : Awlad Hossain</p>
        <div className="flex justify-between text-[#131313CC]">
          <p>Fiction</p>
          <p className="text-right">
            5.00 <span>str</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;

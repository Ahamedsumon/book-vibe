const WishlistBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    category,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="card card-side gap-5  items-center flex-row shadow mb-3 border border-gray-200">
      <figure className="bg-base-300 m-3 rounded-2xl">
        <div className="p-7 ">
          <img className="max-h-41" src={image} alt="Movie" />
        </div>
      </figure>
      <div className="card-body max-w-xl p-3 md:p-0">
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="text-[#131313B0]">By: {author}</p>
        {/* <div className="border-b border-[#13131326] "></div> */}
        {/* <p>{category}</p> */}
        {/* <div className="border-b border-[#13131326] "></div> */}

        <p className="flex gap-1 items-center">
          <span className="font-bold">Tag </span>
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            #{tags[0]}
          </span>
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            #{tags[1]}
          </span>
          <span>Year of Publishing: {yearOfPublishing}</span>
        </p>
        <p className="flex gap-5">
          <span>Publisher: {publisher}</span>
          <span>Pages: {totalPages}</span>
        </p>
        <div className="border-b border-[#13131326]"></div>
        <div className="card-actions">
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            Category: {category}
          </span>
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            Rating: {rating}
          </span>
          <span className=" py-2 px-3 rounded-full text-white bg-[#23BE0A]">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;

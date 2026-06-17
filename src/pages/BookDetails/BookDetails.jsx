import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const id = useParams();
  const books = useLoaderData();
  const singleBook = books.find((book) => book.bookId === +id.bookId);
  const {
    image,
    bookName,
    author,
    review,
    tags,
    category,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="card card-side gap-5 flex-col items-center md:flex-row">
      <figure className="bg-base-300 rounded-2xl">
        <div className="p-10 ">
          <img className="max-h-100" src={image} alt="Movie" />
        </div>
      </figure>
      <div className="card-body max-w-xl p-3 md:p-0">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="text-[#131313B0]">By: {author}</p>
        <div className="border-b border-[#13131326] "></div>
        <p>{category}</p>
        <div className="border-b border-[#13131326] "></div>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <p className="flex gap-5 items-center">
          <span className="font-bold">Tag </span>
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            #{tags[0]}
          </span>
          <span className=" py-2 px-3 rounded-full text-[#23BE0A] bg-[#23BE0A0A]">
            #{tags[1]}
          </span>
        </p>
        <div className="border-b border-[#13131326] "></div>
        <div className="flex items-center gap-10">
          <div className="text-[#131313B0]">
            <p>Number of Pages: </p>
            <p className="my-2">Publisher: </p>
            <p>Year Of Publishing: </p>
            <p className="my-2">Rating: </p>
          </div>
          <div className="font-bold">
            <p>{totalPages}</p>
            <p className="my-2">{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p className="my-2">{rating}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-white border border-[#1313134D]">
            Read
          </button>
          <button className="btn bg-[#50B1C9] border border-[#50B1C9] text-white">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

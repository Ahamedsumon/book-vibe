import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";
const Book = ({ book }) => {
  console.log(book);
  const { bookName, bookId, image, author, tags, category, rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm ">
        <figure className="px-4 pt-4 ">
          <div className="bg-[#F3F3F3] p-3">
            <img
              src={image}
              alt={`image of ${bookName}`}
              className="rounded-sm h-41.5"
            />
          </div>
        </figure>
        <div className="card-body  ">
          <div className="flex text-[#23BE0A] w-[70%]">
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-[#131313CC]">By : {author}</p>
          <div className="flex justify-between items-center text-[#131313CC]">
            <p>{category}</p>
            <p className=" flex items-center justify-end gap-2">
              <span className="">{rating}</span>
              <span>
                <IoIosStarOutline />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

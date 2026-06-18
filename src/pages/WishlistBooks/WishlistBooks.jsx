import { useEffect, useState } from "react";
import { getStoredBooksIdFromLS } from "../../utilities/wishlistUtilities";
import WishlistBook from "../WishlistBook/WishlistBook";

const WishlistBooks = () => {
  const [books, setBooks] = useState([]);
  const getStoredBookIds = getStoredBooksIdFromLS();

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((bookDatas) => setBooks(bookDatas));
  }, []);
  const getBookDatasById = books.filter((book) =>
    getStoredBookIds.includes(book.bookId),
  );
  console.log(getBookDatasById);
  return (
    <div>
      <div className="mt-10">
        {getBookDatasById.map((book) => (
          <WishlistBook key={book.bookId} book={book}></WishlistBook>
        ))}
      </div>
    </div>
  );
};

export default WishlistBooks;

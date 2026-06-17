import Book from "../Book/Book";

const Books = ({ booksData }) => {
  return (
    <div>
      <h3 className="text-center text-3xl font-bold mt-10 mb-5">Books</h3>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 md:mx-2 lg:0">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

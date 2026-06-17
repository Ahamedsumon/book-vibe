import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/utilities";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const booksData = useLoaderData();
    const getStoredId = getStoredBook();
    
    const books = booksData.filter(book => getStoredId.includes(book.bookId));

    
    return (
        <div>
           <h1>This is Read books section</h1> 
           {
            books.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
           }
        </div>
    );
};

export default ReadBooks;
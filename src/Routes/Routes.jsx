import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadBooks from "../pages/ReadBooks/ReadBooks";
import WishlistBooks from "../pages/WishlistBooks/WishlistBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: (
      <span className="loading loading-dots loading-md"></span>
    ),
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
        children: [
          // {
          //   index: true,
          //   path: "listed-books",
          //   Component: ReadBooks
          // },
          {
            path: "read-books",
            loader: () => fetch("/booksData.json"),
            Component: ReadBooks
          },
          {
            path: "wishlist-books",
            Component: WishlistBooks
          }
        ]
      },
      {
        path: "pages-to-read",
        Component: PagesToRead,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

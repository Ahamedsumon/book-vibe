import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/booksData.json'),
                Component: Home
            },
            {
                path: "listed-books",
                Component: ListedBooks
            },
            {
                path: "pages-to-read",
                Component: PagesToRead
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])
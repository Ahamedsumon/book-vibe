import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router";
import "./ListedBooks.css";
const ListedBooks = () => {
  const handleSort = (type) => {
    console.log(type);
  };
  return (
    <div className="min-h-screen">
      <h2 className="py-3 bg-[#1313130D] text-center text-3xl font-bold rounded-md">
        Books
      </h2>
      <div className="text-center">
        <div className="dropdown dropdown-bottom mt-5">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Sort By{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("pages")}>
              <a>Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 listedBooks mt-10">
        <NavLink to="/listed-books/read-books" className="">
          Read Books
        </NavLink>
        <NavLink to="/listed-books/wishlist-books" className="">
          Wishlist Books
        </NavLink>
      </div>
      <div className="border-b border-[#13131326]"></div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;

// border border-b-0 p-1 rounded-t-md

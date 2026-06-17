import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {
  return (
    <div>
      <h2 className="py-3 bg-[#1313130D] text-center text-3xl font-bold rounded-md">
        Books
      </h2>
      <div className="text-center">
        {/* <a className="btn bg-[#23BE0A] text-white mt-5">Sort By</a> */}

        <div className="dropdown dropdown-bottom mt-5">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Click{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Author</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

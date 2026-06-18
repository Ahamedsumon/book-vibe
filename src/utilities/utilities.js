import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const getStoredBook = () => {
  const getBook = localStorage.getItem("readList");
  if (getBook) {
    const storedBookData = JSON.parse(getBook);
    return storedBookData;
  }
  return [];
};

const addToLocalStorage = (id) => {
  const storedBook = getStoredBook();
  if (storedBook.includes(id)) {
    alert("Already exists");
    return;
  }
  MySwal.fire({
    title: "Good job!",
    text: "Books added to the read books section",
    icon: "success",
  });
  const addNewBook = [...storedBook, id];
  const convertToStringify = JSON.stringify(addNewBook);

  localStorage.setItem("readList", convertToStringify);
};

export { getStoredBook, addToLocalStorage, MySwal };

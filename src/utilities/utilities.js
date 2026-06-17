const getStoredBook = () => {
    const getBook = localStorage.getItem("readList");
    if(getBook){
        const storedBookData = JSON.parse(getBook);
        return storedBookData;
    }
    return []
}



const addToLocalStorage = (id) =>{
    const storedBook = getStoredBook();
    const addNewBook = [...storedBook, id];
    const convertToStringify = JSON.stringify(addNewBook)
    localStorage.setItem("readList" ,convertToStringify)
}


export {getStoredBook,addToLocalStorage}
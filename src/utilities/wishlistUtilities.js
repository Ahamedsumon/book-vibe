const getStoredBooksIdFromLS = () => {
  const wishlistBookIds = localStorage.getItem("wishlist");
  if (wishlistBookIds) {
    const wishlistIdsParse = JSON.parse(wishlistBookIds);
    return wishlistIdsParse;
  }
  return [];
};

const addBooksToWishlist = (id) => {
  const getStoredBookIds = getStoredBooksIdFromLS();
  if (getStoredBookIds.includes(id)) {
    alert("Already exists");
    return;
  }
  const addNewBookId = [...getStoredBookIds, id];
  const stringifyBookIds = JSON.stringify(addNewBookId);
  localStorage.setItem("wishlist", stringifyBookIds);
};

export { getStoredBooksIdFromLS, addBooksToWishlist };

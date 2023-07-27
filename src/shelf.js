function shelfBook(book, genreShelf) {
  if (genreShelf.length < 3) {
    genreShelf.unshift(book);
  }
}

function unshelfBook (bookTitle, genreShelf) {
  const indexToRemove = genreShelf.findIndex(book => book.title === bookTitle);
  // genreShelf.splice(indexToRemove, 1); -- This only works if bookTitle exists on genreShelf
  if (indexToRemove !== -1) {
    genreShelf.splice(indexToRemove, 1);
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
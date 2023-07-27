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

// Another way to write function with for loop
// function unshelfBook(bookTitle, genreShelf) {
//   for (var i = 0; i < genreShelf.length; i++) {
//     if (genreShelf[i].title == bookTitle) {
//       genreShelf.splice(i, 1);
      
//     }
//   }
// }

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
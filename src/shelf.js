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
//     if (genreShelf[i].title == bookTitle && i !== -1) {
//       genreShelf.splice(i, 1);
//     }
//   }
// }

function listTitles(genreShelf) {
  let titles = []
  for (var i = 0; i < genreShelf.length; i++) {
    //.push will add element to end of array
    titles.push(genreShelf[i].title);
  }
  return titles.join(', ')
}

// searchShelf works but should be refactored
function searchShelf(genreShelf, title) {
  let count = 0

  for (var i = 0; i < genreShelf.length; i++) {
    if (genreShelf[i].title == title) {
      count += 1;
    } 
  }

  if (count >= 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
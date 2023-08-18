function createLibrary(fname) {
  return {
    name: fname,
    shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [] 
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  const shelf = library.shelves[genre];
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, specificShelf) {
  if (specificShelf) {
    count = library.shelves[specificShelf].length;
    return  `There are a total of ${count} ${specificShelf} books at the ${library.name}.`;
  } else {
    totalCount = 0;
    for (let genre in library.shelves) {
      totalCount += library.shelves[genre].length;
    }
    return  `There are a total of ${totalCount} books at the ${library.name}.`;
  }
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
}
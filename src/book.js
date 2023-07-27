function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(fname, fage, fpronouns) {
  return {
    name: fname,
    age: fage,
    pronouns: fpronouns
  };
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function saveReview(review, array) {
  if (!array.includes(review)){
    array.push(review);
  }
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}


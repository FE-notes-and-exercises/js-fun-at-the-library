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

function calculatePageCount(booktitle) {
  return booktitle.length * 20
}

function saveReview(review, array) {
  if (!array.includes(review)){
    array.push(review)
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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}


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

function saveReview(review, array) {
  if (!array.includes(review)){
    array.push(review)
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}


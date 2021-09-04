let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.readBook = function() {
    return this.read;
  }
  this.info = function() {
    return this.title + " by " + this.author + ", pages " + this.pages;
  }
}

function addBookToLibrary(bookObject, library) {
  library.push(bookObject);
}

function displayBooks(library) {
  for (let book of library) {
    console.log()
  }
}

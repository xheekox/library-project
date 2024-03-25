const myLibrary = [];

const dialog_add_book = document.querySelector("dialog.book");
const dialog_button = document.querySelector("button.add-book");

function Book() {
    // the constructor...
}

dialog_button.addEventListener("click", () => {
    dialog_add_book.showModal();
});

function addBookToLibrary() {
    // do stuff here
}


// display books on the page by looping through an array.


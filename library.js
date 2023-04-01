const inputUser = document.querySelector('.input-user');
const createBookBtn = document.querySelector('.crt_book');
let inputBarOn = false;
let currBook = 0;
let myLibrary = [];

function displayInput(){
    inputBarOn = true;
    if(inputBarOn == true){
        inputUser.classList.toggle('show');
    }
    else {
        return 0;
    }
}

function book(name, author, pages){
    this.name = name
    this.author = author
    this.pages = pages
}

function createBook() {
    event.preventDefault(); // Prevent the form from submitting

    // get the values from the form inputs
    const nameInput = document.querySelector('#book_name');
    const authorInput = document.querySelector('#author_name');
    const pagesInput = document.querySelector('#num_pages');

    // create a new book object with the input values
    const newBook = new book(nameInput.value, authorInput.value, pagesInput.value);

    // add the new book to the library and display it
    addBookToLibrary(newBook);
    displayBooks();

    // reset the form inputs
    nameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    // hide the input form
    inputUser.classList.remove('show');

    // increment currBook variable so it display only the new book(s)
    currBook ++;
};

function addBookToLibrary(book){
    // Push current book to myLibrary array
    myLibrary.push(book);
}

function displayBooks(){
    const libraryContainer = document.querySelector('.book-grid');

    for(let i = currBook; i < myLibrary.length; i++){
        const book = myLibrary[i];

        //create a new book card
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.dataset.card = i; // add data attribute to the card with corresponding array value

        //add the book name, author, and the number of the pages to the card
        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = `${book.name}`;
        card.appendChild(name);

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `${book.author}`;
        card.appendChild(author)

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        // add buttons for "Read" and "Remove"
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        const readButton = document.createElement('button');
        readButton.classList.add('btn-read');
        readButton.textContent = 'Read';
        buttonGroup.appendChild(readButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-delete');
        deleteButton.setAttribute('onclick','deleteCard()');
        deleteButton.textContent = 'Remove';
        buttonGroup.appendChild(deleteButton);

        card.appendChild(buttonGroup);

        // add the card to the library container
        libraryContainer.appendChild(card);
    }
}

function deleteCard() {
    const deleteBtn = event.target; //Refer to the specific delete button that was clicked
    const card = deleteBtn.closest('.book-card');
    const index = card.dataset.card;

    console.log(myLibrary);
  
    // remove the book from the myLibrary array
    myLibrary.splice(index, 1);

  
    // remove the card from the DOM
    card.remove();

     // update the dataset values for the remaining cards
     const cards = document.querySelectorAll('.book-card');
     for (let i = index; i < cards.length; i++) {
         const card = cards[i];
         card.dataset.card = i;
     }
    
    // update currBook to reflect the new number of books displayed
    currBook = myLibrary.length;

    console.log(myLibrary);
  }
let myLibrary = [];

function book(name, author, pages){
    this.name = name
    this.author = author
    this.pages = pages
}

const book1 = new book('steve', 'X', '156');
const book2 = new book('jose', 'Z', '123')

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    const libraryContainer = document.querySelector('.book-grid');
    // clear existing content
    libraryContainer.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        //create a new book card
        const card = document.createElement('div');
        card.classList.add('book-card');

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
        deleteButton.textContent = 'Remove';
        buttonGroup.appendChild(deleteButton);

        card.appendChild(buttonGroup);

        // add the card to the library container
        libraryContainer.appendChild(card);
    }
}

addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();
console.log(myLibrary)
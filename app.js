// UI and LS object
const ui = new UI()
const ls = new LS()

// elements
const form = document.querySelector('#add-book');

// events
form.addEventListener('submit', addBook);


function addBook(event) {
    // get form input value

    const titleInput = document.querySelector(`#title`)
    const authorInput = document.querySelector(`#author`)
    const isbnInput = document.querySelector(`#isbn`)

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn)
    // add book value to visual by UI object
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)



    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
    event.preventDefault();
}


    //add task value to localStorage
    //addBookToLS(book)

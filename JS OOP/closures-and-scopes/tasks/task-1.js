/* Task Description */
/*
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
function solve() {
    let library = (function() {
        let books = [],
            categories = [];

        function validateStringLength(string, stringName) {
            if (string.length < 2 || string.length > 100) {
                throw new Error(stringName + ' must be between 2 and 100 characters');
            }
        }

        function validateAuthor(author) {
            if (author === '') {
                throw new Error('author must be an non-empty string');
            }
        }

        function validateISBN(isbn) {
            if (isbn.length !== 10 && isbn.length !== 13) {
                throw new Error('ISBN must be 10 or 13 digits');
            }
        }

        function isBookInList(book) {
            if (books.some(item => {return item.title === book.title || item.isbn === book.isbn;})) {
                throw new Error('A book with the same title or ISBN already exists!');
            }
        }

        function addCategory(newCategory) {
            if (categories.every(category => {return category !== newCategory;})) {
                categories.push(newCategory);
            }
        }

        function addBook(book) {
            validateStringLength(book.title, 'title');
            validateStringLength(book.category, 'category');
            validateAuthor(book.author);
            validateISBN(book.isbn);
            isBookInList(book);

            book.ID = books.length + 1;
            books.push(book);
            addCategory(book.category);
            return book;
        }

        function listBooks(by) {
            var sortedBooks = [];

            if (!by || !Object.keys(by).length) { //if 'by' is undefined or is an empty object
                sortedBooks = books;
            } else if (by.hasOwnProperty('category') || by.hasOwnProperty('author')) {
                sortedBooks = books.filter(book => {
                    return book.category === by.category || book.author === by.author;
                });
            }

            return sortedBooks;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}
module.exports = solve;

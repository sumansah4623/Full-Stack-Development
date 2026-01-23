// BookList is a React functional component
// It receives two props:
// books → an array of book objects
// onSelect → function to handle clicking a book

/*
    Looping through books
    {books.map(book => (
    map() loops through each book in the books array
    Returns JSX for each book


    Rendering BookCard
    <BookCard
      key={book.id}
      book={book}
      onSelect={onSelect}
    />

Explanation:
key={book.id}
Helps React identify each card uniquely
Improves performance
book={book}
Sends individual book data to BookCard
onSelect={onSelect}
Passes click handler to BookCard
When clicked → selected book is set
    
*/


import BookCard from "./BookCard";

function BookList ({ books, onSelect}) {
    return (
        <div className="row g-4">
            {books.map(book => (
                <BookCard
                  key = {book.id}
                  book= {book}
                  onSelect={onSelect}
                />  
            ))}
        </div>
    );
}

export default BookList;
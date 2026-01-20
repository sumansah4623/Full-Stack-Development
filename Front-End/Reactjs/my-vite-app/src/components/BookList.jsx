import BookCard from "./BookCard";


function BookList ({ books, onSelect}) {
    return (
        <div className="row">
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

export default BookList
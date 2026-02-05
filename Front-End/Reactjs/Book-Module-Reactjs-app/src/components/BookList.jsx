"use client";

import BookCard from "./BookCard";

function BookList({ books, onSelect }) {
  return (
    <div className="row g-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default BookList;

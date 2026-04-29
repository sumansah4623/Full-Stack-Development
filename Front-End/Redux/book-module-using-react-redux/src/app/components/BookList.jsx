"use client";

import { useSelector } from "react-redux";
import BookCard from "./BookCard";

export default function BookList() {
  const books = useSelector((state) => state.list); 

  if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-md-3 mb-4" key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

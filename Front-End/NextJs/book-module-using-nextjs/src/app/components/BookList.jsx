"use client";
import BookCard from "./BookCard";
import styles from "./style/BookPage.module.css";

function BookList({ books, onSelect }) {
  return (
    <div className={styles.bookGrid}>
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

import { useState } from "react";
import books from "../data/books";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import Navbar from "../components/Navbar";


function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">Book Collection</h2>

        {selectedBook ? (
          <BookDetails
            book={selectedBook}
            onBack={() => setSelectedBook(null)}
          />
        ) : (
          <BookList books={books} onSelect={setSelectedBook} />
        )}
      </div>
    </>
  );
}

export default BooksPage;

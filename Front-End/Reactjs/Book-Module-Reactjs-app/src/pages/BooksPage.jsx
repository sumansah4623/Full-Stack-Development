import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/AddBook";
import "./BooksPage.css";


function BooksPage() {

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });


  const [view, setView] = useState("list"); 
  const [activeBook, setActiveBook] = useState(null);


  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);


  const handleAddBook = (book) => {
    setBooks((prev) => [...prev, book]);
    setView("list");
  };

  
  const handleUpdateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
    setView("list");
  };

  
  const handleDeleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    setView("list");
  };


  if (view === "add" || view === "edit") {
    return (
      <AddBook
        initialData={view === "edit" ? activeBook : null}
        onAddBook={view === "edit" ? handleUpdateBook : handleAddBook}
        onCancel={() => setView("list")}
      />
    );
  }

  
  if (view === "details") {
    return (
      <BookDetails
        book={activeBook}
        onBack={() => setView("list")}
        onDelete={handleDeleteBook}
        onEdit={(book) => {
          setActiveBook(book);
          setView("edit");
        }}
      />
    );
  }


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Book Collection</h2>

        <button
          className="btn btn-primary add-book-btn"
          onClick={() => setView("add")}
        >
          + Add New Book
        </button>
      </div>

      <BookList
        books={books}
        onSelect={(book) => {
          setActiveBook(book);
          setView("details");
        }}
      />
    </div>
  );
}

export default BooksPage;

import { useState } from "react";
import BooksPage from "./pages/BooksPage";
import AddBook from "./components/AddBook";

function App() {
  const [currentPage, setCurrentPage] = useState("books");

  return (
    <>
      {currentPage === "books" && (
        <BooksPage onAddBookClick={() => setCurrentPage("add-book")} />
      )}

      {currentPage === "add-book" && (
        <AddBook onBack={() => setCurrentPage("books")} />
      )}
    </>
  );
}

export default App;


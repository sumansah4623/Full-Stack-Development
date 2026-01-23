// It is the main page of your books app
// It decides what to show:
// Book list OR
// Book details



/* useState is a React Hook
   It helps us store data that can change (state).
   Which book is selected? → This can change → so we use useState. 

   books is usually an array of objects
   These are own components
   BookList → shows all books
   BookDetails → shows details of one book


   useState 
   const [selectedBook, setSelectedBook] = useState(null);
   selectedBook → stores the currently selected book
   setSelectedBook → function to change selectedBook
   null → initially no book is selected
   <> </> is called a Fragment
   It allows multiple elements without extra HTML

   <div className="container mt-4">
   Bootstrap classes:
   container → center layout
   mt-4 → margin top


   useState → React Hook used to store and update data (state)
   books → Dummy book data (array of book objects)
   BookList → Component that shows all books
   BookDetails → Component that shows details of one selected book

   BooksPage Component
   function BooksPage() {
   selectedBook is a state variable
   This is a functional component.
   It controls which screen to show:
   Book list OR
   Book details


   IF a book is selected → show book details
   ELSE → show the list of books

   book={selectedBook}
   Meaning:
   book → prop name
   selectedBook → value (state)


   This line is importing a React Hook called useState.
   import { useState } from "react";

   useState helps you:
   store values (like numbers, strings, objects)
   change the UI when those values change


   const [selectedBook, setSelectedBook] = useState(null);
   What this line does
   It creates a state variable to store the currently selected book.

*/




import { useState } from "react";
import books from "../data/books";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/AddBook";


function BooksPage() {

  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddBook, setShowAddBook] = useState(false);


  if(showAddBook) {
    return <AddBook onCancel = {() => setShowAddBook(false)} />
  }


  if (selectedBook) {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Book Collection</h2>

        <BookDetails
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
        />
      </div>
    );
  } else {
    return (
      <div className="container mt-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
           <h2>Book Collection</h2>
          
          <div>
           <button 
              className="btn btn-primary px-4"
              onClick={() => setShowAddBook(true)}>
                + Add New Book
           </button>  
          </div>
        </div>   

        <BookList
          books={books}
          onSelect={setSelectedBook}
        />
      </div>
    );
  }
}


export default BooksPage;
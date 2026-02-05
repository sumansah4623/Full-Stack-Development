"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BookList from "./components/BookList";

export default function Home() {
  const router = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);   
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-between align-items-center mb-4">

        <h2 className="col-10">Book Collection</h2>

        <button
          className="btn btn-primary addBookBtn col-2 1"
          onClick={() => router.push("/add-book")}
        >
          + Add New Book
        </button>
      </div>

      <BookList
        books={books}
        onSelect={(book) =>
          router.push(`/book-details/${book.id}`)
        }
      />
    </div>
  );
}

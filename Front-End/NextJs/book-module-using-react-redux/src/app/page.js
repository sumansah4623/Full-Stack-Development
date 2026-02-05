"use client";

import { useRouter } from "next/navigation";
import BookList from "./components/BookList";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mt-4">
      <div className="row justify-content-between align-items-center mb-4">
        <h2 className="col-10">Book Collection</h2>

        <button
          className="btn btn-primary col-2"
          onClick={() => router.push("/add-book")}
        >
          + Add New Book
        </button>
      </div>

      <BookList />
    </div>
  );
}

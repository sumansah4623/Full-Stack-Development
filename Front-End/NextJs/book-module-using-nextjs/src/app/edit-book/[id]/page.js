"use client";

import { useParams } from "next/navigation";
import AddBook from "@/app/components/AddBook";

export default function EditBookPage() {
  const { id } = useParams();

  const books = JSON.parse(localStorage.getItem("books")) || [];
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return <p className="text-center mt-5">Book not found</p>;
  }

  return <AddBook initialData={book} />;
}

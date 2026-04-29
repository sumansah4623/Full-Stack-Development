"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import BookDetails from "@/app/components/BookDetails";

export default function BookDetailsPage() {
  const { id } = useParams();

  const bookList = useSelector((state) => state.list);

  if (!bookList) {
    return <p>Loading...</p>;
  }

  const book = bookList.find(
    (b) => String(b.id) === String(id)
  );

  if (!book) {
    return <p>Book not found</p>;
  }

  return <BookDetails book={book} />;
}

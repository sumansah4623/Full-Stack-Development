"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BookDetails from "@/app/components/BookDetails";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const foundBook = books.find((b) => String(b.id) === String(id));
    setBook(foundBook);
  }, [id]);

  return <BookDetails book={book} />;
}

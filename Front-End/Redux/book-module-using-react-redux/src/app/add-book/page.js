"use client";

import { useRouter } from "next/navigation";
import AddBook from "../components/AddBook";


export default function AddBookPage() {
  const router = useRouter();

  return (
    <AddBook
      onCancel={() => router.push("/")}
      onAddBook={() => router.push("/")}
    />
  );
}

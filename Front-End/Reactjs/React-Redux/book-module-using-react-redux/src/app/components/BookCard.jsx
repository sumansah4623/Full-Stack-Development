"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./style/BookCard.module.css";

export default function BookCard({ book }) {
  const router = useRouter();

  const handleClick = () => {
    if (!book?.id) {
      console.error("Book ID missing:", book);
      return;
    }

    router.push(`/book-details/${book.id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={book.CoverImageUrl}
          alt={book.Title}
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{book.Title}</h4>
        <p className={styles.author}>{book.Author}</p>
        <p className={styles.genre}>{book.Genre}</p>

        <div className={styles.rating}>⭐ {book.Rating}</div>
      </div>
    </div>
  );
}

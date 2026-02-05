"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./style/BookCard.module.css";

export default function BookCard({ book }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/book-details/${book.id}`)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={book.CoverImageUrl}
          alt={book.Title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{book.Title}</h4>
        <p className={styles.author}>{book.Author}</p>
        <p className={styles.genre}>{book.Genre}</p>

        <div className={styles.rating}>
          ⭐ {book.Rating}
        </div>
      </div>
    </div>
  );
}

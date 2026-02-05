"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";

function BookDetails({ book }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  if (!book) {
    return <p className="text-center mt-5">Loading book details...</p>;
  }

  const handleDeleteConfirm = () => {
    dispatch({ type: "DELETE_BOOK", payload: book.id });
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-link mb-3" onClick={() => router.push("/")}>
        ← Back to Books
      </button>

      <div className="card shadow-sm p-4">
        <div className="row g-4">
          <div className="col-md-4">
            <Image
              src={
                book?.CoverImageUrl && book.CoverImageUrl.trim() !== ""
                  ? book.CoverImageUrl
                  : "/placeholder.png"
              }
              width={300}
              height={400}
              alt={book?.Title || "Book Cover"}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>{book.Title}</h2>
            <p className="text-muted">by {book.Author}</p>

            <div className="mb-3 text-muted">
              ⭐ {book.Rating || "N/A"} | <TfiBag /> {book.PublishedYear || "N/A"} |{" "}
              <CgNotes /> {book.Pages || "N/A"} pages | {book.Genre || "N/A"}
            </div>

            <h5>Description</h5>
            <p>{book.Description || "No description available."}</p>

            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary">Add to Reading List</button>

              <button
                className="btn btn-outline-danger"
                onClick={() => setShowModal(true)}
              >
                <MdDelete /> Delete
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => router.push(`/edit-book/${book.id}`)}
              >
                <TiEdit /> Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Confirm Delete</h5>
                  <button className="btn-close" onClick={() => setShowModal(false)} />
                </div>

                <div className="modal-body">
                  Are you sure you want to delete this book?
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-danger" onClick={handleDeleteConfirm}>
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export default BookDetails;

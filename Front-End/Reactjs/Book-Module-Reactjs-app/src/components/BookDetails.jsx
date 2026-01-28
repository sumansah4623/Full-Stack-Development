import { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";



function BookDetails({ book, onBack, onDelete, onEdit }) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteConfirm = () => {
    onDelete(book.id);
    setShowModal(false);
    onBack();
  };

  return (
    <div className="container mt-4">

      
      <button className="btn btn-link mb-3" onClick={onBack}>
        ← Back to Books
      </button>


     
      <div className="card shadow-sm p-4">
        <div className="row g-4">

          
          <div className="col-md-4">
            <img
              src={book.CoverImageUrl || "https://via.placeholder.com/300x400"}
              alt={book.Title}
              className="img-fluid rounded"
            />
          </div>


          
          <div className="col-md-8">
            <h2>{book.Title}</h2>
            <p className="text-muted">by {book.Author}</p>

            <div className="mb-3 text-muted">
              ⭐ {book.Rating}/5 &nbsp; | &nbsp;
              <TfiBag /> Published: {book.PublishedYear} &nbsp; | &nbsp;
              <CgNotes /> {book.Pages} pages &nbsp; | &nbsp;
              {book.Genre}
            </div>

            <h5>Description</h5>
            <p>{book.Description}</p>

            
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary px-4">
                Add to Reading List
              </button>

              <button
                className="btn btn-outline-danger px-4"
                onClick={() => setShowModal(true)}
              >
                <MdDelete /> Delete
              </button>

              <button
                className="btn btn-outline-primary px-4"
                onClick={() => onEdit(book)}
              >
                <TiEdit /> Edit
              </button>
            </div>
          </div>

        </div>
      </div>

      

      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>Are you sure you want to delete this book?</p>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDeleteConfirm}
                  >
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


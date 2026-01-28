function BookCard({ book, onSelect }) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div
        className="card h-100 shadow-sm"
        onClick={() => onSelect(book)}
        style={{ cursor: "pointer" }}>
            
   
        <img
          src={book.CoverImageUrl}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
          alt={book.Title}
        />

        <div className="card-body position-relative p-3">
          <h6 className="fw-bold mb-1">{book.Title}</h6>

          <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
            {book.Author}
          </p>

          <small className="text-secondary">{book.Genre}</small>

          <div className="position-absolute bottom-0 end-0 m-3 text-warning fw-semibold">
            ⭐ {book.Rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

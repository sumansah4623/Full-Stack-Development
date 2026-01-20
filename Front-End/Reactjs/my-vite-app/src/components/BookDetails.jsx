function BookDetails({ book, onBack}) {
    return (
        <div className="card p-4">
            <img
              src={book.image}
              alt={book.title}
              className="img-fluid mb-3"
            />

            <h2>{book.title}</h2>
            <p className="text-muted">{book.author}</p>
            <p>Category: {book.category}</p>
            <p>⭐ Rating: {book.rating}</p>


            <button className="btn btn-secondary mt-3" onClick={onBack}>
            Back to List
            </button>
        </div>
    );
}

export default BookDetails;
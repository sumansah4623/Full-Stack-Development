function BookCard({ book, onSelect }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className = "card h-100 shadow-sm" onClick={() => onSelect(book)}>
                <img
                   src = {book.image}
                   className="card-img-top"
                   style={{height : "220px", objectFit : "cover"}}
                   alt = {book.title}
                />
                <div className="card-body">
                    <h6 className="fw-bold">{book.title}</h6>
                    <p className="text-muted mb-1">{book.author}</p>
                    <small>{book.catagory}</small>
                    <div className="mt-2 text-warning">
                       ⭐ {book.rating}
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default BookCard;
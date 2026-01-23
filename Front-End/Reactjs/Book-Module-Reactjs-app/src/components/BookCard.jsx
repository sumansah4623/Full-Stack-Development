// BookCard is a React functional component
// It receives two props:
// book → contains book details (title, author, image, rating, etc.)
// onSelect → a function that runs when the card is clicked





function BookCard({ book, onSelect }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div 
                className = "card h-100 shadow-sm" 
                onClick={() => onSelect(book)}
            >
                <img
                   src = {book.image}                                  
                   className="card-img-top"                            
                   style={{height : "220px", objectFit : "cover"}}     
                   alt = {book.title}                                  
                />

                <div className="card-body position-relative pd-5">
                   <h6 className="fw-bold mb-1">{book.title}</h6>

                    <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
                      {book.author}
                    </p>

                    <small className="text-secondary">{book.category}</small>

                    <div className="position-absolute bottom-0 end-0 m-3 text-warning fw-semibold">
                      ⭐ {book.rating}
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default BookCard;
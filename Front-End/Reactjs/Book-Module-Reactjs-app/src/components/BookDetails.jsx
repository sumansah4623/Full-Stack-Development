// BookDetails is a React functional component
// It receives two props:
// book → contains details of the selected book
// onBack → function to go back to the book list


/* 
   book.image → contains the image URL/path
   src={book.image} → tells the browser which image to show

   onClick={onBack}
   Runs the onBack function when button is clicked
   onBack is passed as a prop from parent component

*/



import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";


function BookDetails({book, onBack}) {

    return (

        <div className="container mt-4">

            <button className="btn btn-link mb-3" onClick={onBack}>
                ← Back to Books
            </button>


            <div className="card shadow-sm p-4">
                <div className="row g-4">


                    <div className="col-md-4">
                        <img 
                           src = {book.image}
                           alt = {book.title}
                           className="img-fluid rounded"></img>
                    </div>


                    <div className="col-md-8">
                        <h2>{book.title}</h2>
                        <p className="text-muted">by {book.author}</p>


                        <div className="mb-3 text-muted">
                            {book.rating}/5, 
                            <TfiBag />Published: {book.year}, 
                            <CgNotes />{book.pages}, 
                            {book.genre}
                        </div>


                        <h5>Descriptions</h5>
                        <p>{book.description}</p>



                        <div className="d-flex gap-3 mt-4">
                            <button className="btn btn-primary px-4">
                                Add to Reading List
                            </button>

                            <button className="btn btn-outline-primary px-4">
                              <MdDelete />Delete
                            </button>

                            <button className="btn btn-outline-primary px-4">
                               <TiEdit /> Edit
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}


export default BookDetails;
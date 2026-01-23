// What is a Controlled Component?
// In React, a form element is controlled when:
// Its value comes from React state
// Changes are handled using onChange


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";


function AddBook() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Title : "",
        Author : "",
        Description : "",
        Genre : "",
        PublishedYear : "",
        Pages : "",
        Rating : "",
        CoverImageUrl : ""

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book Data:", formData);
        alert("Book Added Successfully!");
        navigate("/books");
    };


    return (
        <div className="add-book-container">
            <div className="add-book-card">

                <button 
                    type="button"
                    className="btn btn-link mb-3" 
                    onClick={() => navigate("/book")}>
                    ← Back to Books
                </button>


                <h2>Add New Book</h2>

                <form onSubmit={handleSubmit}>

                    <label>Title*</label>
                    <input
                       type="text"
                       name="Title"
                       placeholder="Enter book Title"
                       value={formData.Title}
                       onChange={handleChange}
                       required
                    />

                    <label>Author*</label>
                    <input
                       type="text"
                       name="Author"
                       className="form-control"
                       placeholder="Enter Author Name"
                       value={formData.Author}
                       onChange={handleChange}
                    />


                    <label>Description</label>
                    <input 
                        type="text"
                        name="Description"
                        placeholder="Enter Description of Book"
                        value={formData.Description}
                        onChange={handleChange}
                    />

                    <div className="row">
                        <div>
                    <label>Genre</label>
                    <input
                        type="text"
                        name="Genre"
                        placeholder="Enter Genre"
                        value={formData.Genre}
                        onChange={handleChange}
                    />
                    </div>
                    


                    <div>
                    <label>Published Year</label>
                    <input
                        type="text"
                        name="PublishedYear"
                        placeholder="Enter Published Year"
                        value={formData.PublishedYear}
                        onChange={handleChange}
                    />
                    </div>
                    </div>

  
                    <div className="row">
                        <div>
                    <label>Pages</label>
                    <input
                       type="text"
                       name="Pages"
                       placeholder="Enter Pages "
                       value={formData.Pages}
                       onChange={handleChange}
                    />
                    </div>


                    <div>
                    <label>Rating</label>
                    <input
                        type="text"
                        step="0.1"
                        name="Rating"
                        placeholder="Enter Rating of Book" 
                        value={formData.Rating}
                        onChange={handleChange}
                    />
                    </div>
                    </div>


                    <label>Cover Image Url</label>
                    <input
                        type="text"
                        name="CoverImageUrl"
                        placeholder="Enter Cover Image Url"
                        value={formData.CoverImageUrl}
                        onChange={handleChange}
                    />



                    <div className="button">
                        <button 
                            type="submit" 
                            className="btn-primary">
                            Add Book
                        </button> 

                        <button 
                           type="button" 
                           className="btn-secondary"
                           onClick = {() => navigate("/books")}>
                            Cancel
                        </button>  
                    </div>

                    </form>

                    
            </div>
        </div>
    );
}


export default AddBook;
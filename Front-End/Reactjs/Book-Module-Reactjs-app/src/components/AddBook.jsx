import { useState } from "react";
import "./AddBook.css";
import { PiPrinter } from "react-icons/pi";



function AddBook({ onAddBook, onCancel, initialData }) {

  const [formData, setFormData] = useState(() => ({
    Title: initialData?.Title || "",
    Author: initialData?.Author || "",
    Description: initialData?.Description || "",
    Genre: initialData?.Genre || "",
    PublishedYear: initialData?.PublishedYear || "",
    Pages: initialData?.Pages || "",
    Rating: initialData?.Rating || "",
    CoverImageUrl: initialData?.CoverImageUrl || ""
  }));

  const [errors, setErrors] = useState({});


  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));


    
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        CoverImageUrl: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.Title.trim()) {
      newErrors.Title = "Title is required";
    }

    if (!formData.Author.trim()) {
      newErrors.Author = "Author is required";
    }

    if (!formData.Description.trim()) {
      newErrors.Description = "Description is required";
    }

    if (!formData.Genre.trim()) {
      newErrors.Genre = "Genre is required";
    }

    if (!formData.Pages.trim()) {
      newErrors.Pages = "Pages is required";
    }

    if (!formData.PublishedYear.trim()) {
      newErrors.PublishedYear = "PublishedYear is required";
    }

    if (!formData.Rating.trim()) {
      newErrors.Rating = "Rating is required";
    }

    if (!formData.CoverImageUrl.trim()) {
      newErrors.CoverImageUrl = "Image is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onAddBook({
      ...formData,
      id: initialData?.id || Date.now()
    });

    onCancel();
  };

  return (
    <div className="add-book-container">
      <div className="add-book-card">

        <button
          type="button"
          className="btn btn-link mb-3"
          onClick={onCancel}
        >
          ← Back to Books
        </button>

        <h2>{initialData ? "Edit Book" : "Add New Book"}</h2>

        <form onSubmit={handleSubmit}>

          
          <label>Title*</label>
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            className={errors.Title ? "input-error" : ""}
          />
          {errors.Title && <small className="error-text">{errors.Title}</small>}

          
          <label>Author*</label>
          <input
            type="text"
            name="Author"
            value={formData.Author}
            onChange={handleChange}
            className={errors.Author ? "input-error" : ""}
          />
          {errors.Author && <small className="error-text">{errors.Author}</small>}

          <label>Description*</label>
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className={errors.Description ? "input-error" : ""}
          />
          {errors.Description && <small className="error-text">{errors.Description}</small>}

          <div className="row">
            <div>
              <label>Genre*</label>
              <input
                type="text"
                name="Genre"
                value={formData.Genre}
                onChange={handleChange}
                className={errors.Genre ? "input-error" : ""}
              />
              {errors.Genre && <small className="error-text">{errors.Genre}</small>}
            </div>

            <div>
              <label>Published Year*</label>
              <input
                type="text"
                name="PublishedYear"
                value={formData.PublishedYear}
                onChange={handleChange}
                className={errors.PublishedYear ? "input-error" : ""}
              />
              {errors.PublishedYear && <small className="error-text">{errors.PublishedYear}</small>}
            </div>
          </div>

          <div className="row">
            <div>
              <label>Pages*</label>
              <input
                type="number"
                name="Pages"
                value={formData.Pages}
                onChange={handleChange}
                className={errors.Pages ? "input-error" : ""}
              />
              {errors.Pages && <small className="error-text">{errors.Pages}</small>}
            </div>

            <div>
              <label>Rating*</label>
              <input
                type="number"
                name="Rating"
                min="1"
                max="5"
                value={formData.Rating}
                onChange={handleChange}
                className={errors.Rating ? "input-error" : ""}
              />
              {errors.Rating && <small className="error-text">{errors.Rating}</small>}
            </div>
          </div>

          <div className="form-group">
            <label>Cover Image*</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={errors.CoverImageUrl ? "input-error" : ""}
            />
            {errors.CoverImageUrl && <small className="error-text">{errors.CoverImageUrl}</small>}
          </div>

          {formData.CoverImageUrl && (
            <img
              src={formData.CoverImageUrl}
              alt="Cover Preview"
              className="image-preview"
            />
          )}

          <div className="button-group">
            <button type="submit" className="btn-primary">
              <PiPrinter /> {initialData ? "Update Book" : "Add Book"}
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddBook;

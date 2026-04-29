"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PiPrinter } from "react-icons/pi";
import styles from "./style/AddBook.module.css";
import { useDispatch } from "react-redux";

function AddBook({ initialData }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Title: initialData?.Title || "",
    Author: initialData?.Author || "",
    Description: initialData?.Description || "",
    Genre: initialData?.Genre || "",
    PublishedYear: initialData?.PublishedYear || "",
    Pages: initialData?.Pages || "",
    Rating: initialData?.Rating || "",
    CoverImageUrl: initialData?.CoverImageUrl || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        CoverImageUrl: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.Title.trim()) newErrors.Title = "Title is required";
    if (!formData.Author.trim()) newErrors.Author = "Author is required";
    if (!formData.Description.trim()) newErrors.Description = "Description is required";
    if (!formData.Genre.trim()) newErrors.Genre = "Genre is required";
    if (!formData.Pages) newErrors.Pages = "Pages is required";
    if (!formData.PublishedYear) newErrors.PublishedYear = "Published year is required";
    if (!formData.Rating) newErrors.Rating = "Rating is required";
    if (!formData.CoverImageUrl) newErrors.CoverImageUrl = "Image is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const bookData = {
      ...formData,
      id: initialData?.id || Date.now().toString(),
    };

    dispatch({
      type: initialData ? "UPDATE_BOOK" : "ADD_BOOK",
      payload: bookData,
    });

    router.push("/");
  };

  return (
    <div className={styles.addBookContainer}>
      <div className={styles.addBookCard}>
        <button
          type="button"
          className="btn btn-link mb-3"
          onClick={() => router.push("/")}
        >
          ← Back to Books
        </button>

        <h2>{initialData ? "Edit Book" : "Add New Book"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Title*</label>
          <input name="Title" value={formData.Title} onChange={handleChange} />
          {errors.Title && <small className="error-text">{errors.Title}</small>}

          <label>Author*</label>
          <input name="Author" value={formData.Author} onChange={handleChange} />
          {errors.Author && <small className="error-text">{errors.Author}</small>}

          <label>Description*</label>
          <input
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
          {errors.Description && (
            <small className="error-text">{errors.Description}</small>
          )}

          <label>Genre*</label>
          <input name="Genre" value={formData.Genre} onChange={handleChange} />
          {errors.Genre && <small className="error-text">{errors.Genre}</small>}

          <label>Published Year*</label>
          <input
            name="PublishedYear"
            value={formData.PublishedYear}
            onChange={handleChange}
          />
          {errors.PublishedYear && (
            <small className="error-text">{errors.PublishedYear}</small>
          )}

          <label>Pages*</label>
          <input
            type="number"
            name="Pages"
            value={formData.Pages}
            onChange={handleChange}
          />
          {errors.Pages && <small className="error-text">{errors.Pages}</small>}

          <label>Rating*</label>
          <input
            type="number"
            name="Rating"
            min="1"
            max="5"
            value={formData.Rating}
            onChange={handleChange}
          />
          {errors.Rating && <small className="error-text">{errors.Rating}</small>}

          <label>Cover Image*</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {errors.CoverImageUrl && (
            <small className="error-text">{errors.CoverImageUrl}</small>
          )}

          
          {formData.CoverImageUrl && (
            <img
              src={formData.CoverImageUrl}
              alt="Preview"
              className={styles.imagePreview}
            />
          )}

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.btnPrimary}>
              <PiPrinter /> {initialData ? "Update Book" : "Add Book"}
            </button>

            <button
              type="button"
              className={styles.btnSecondary}
              onClick={() => router.push("/")}
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

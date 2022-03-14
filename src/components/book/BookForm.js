import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "./BookProvider.js";
import "./book.css"

export const BookForm = () => {
  const navigate = useNavigate();
  const { createBook } = useContext(BookContext);
  const [currentBook, setCurrentBook] = useState({
    title: "",
    author: "",
  });

 
  const changeBookTitleState = (event) => {
    const newBookState = { ...currentBook };
    newBookState.title = event.target.value;
    setCurrentBook(newBookState);
  };

  const changeBookAuthorState = (event) => {
    const newBookState = { ...currentBook };
    newBookState.author = event.target.value;
    setCurrentBook(newBookState);
  };


  return (
    <form className="bookForm">
      <h2 className="bookForm__title">Register New Book</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentBook.title}
            onChange={changeBookTitleState}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Description">Author: </label>
          <input
            type="text"
            name="author"
            required
            autoFocus
            className="form-control"
            value={currentBook.author}
            onChange={changeBookAuthorState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const book = {
            title: currentBook.title,
            author: currentBook.author,
          };

          // Send POST request to your API
          createBook(book).then(() => navigate("/books"));
        }}
        className="btn btn-primary"
      >
        Add Book
      </button>
    </form>
  );
};

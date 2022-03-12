import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "./BookProvider.js";

export const BookForm = () => {
  const history = useHistory();
  const { createBook } = useContext(BookContext);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
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
    newBookState.maker = event.target.value;
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
            author: currenBook.author,
          };

          // Send POST request to your API
          createBook(book).then(() => history.push("/books"));
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
};
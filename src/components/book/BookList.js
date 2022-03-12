import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "./BookProvider.js";


export const BookList = (props) => {
  const { books, getBooks } = useContext(BookContext);
  const history = useHistory();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <article className="books">
      {books.map((book) => {
        return (
          <section key={`book--${book.id}`} className="book">
            <div className="book__title">
              {book.title} by {book.author}
            </div>
          </section>
        );
      })}
      <button
  className="btn btn-2 btn-sep icon-create"
  onClick={() => {
    history.push({ pathname: "/books/new" });
  }}
>
  Register New Book
</button>
    </article>
  );
};

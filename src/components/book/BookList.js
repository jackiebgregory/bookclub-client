import React, { useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { BookContext } from "./BookProvider.js";
import "./book.css"


export const BookList = (props) => {
  const { books, getBooks } = useContext(BookContext);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <article className="books">
      <button
  className="btn btn-2 btn-sep icon-create"
  onClick={() => {
    navigate({ pathname: "/books/new" });
  }}
>
  Register New Book
</button>

      {books.map((book) => {
        return (
          <section key={`book--${book.id}`} className="book">
            <div className="book__title">
              {book.title} by {book.author}
            </div>
          </section>
        );
      })}
    </article>
  );
};

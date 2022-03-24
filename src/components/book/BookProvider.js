import React, { useState } from "react";


export const BookContext = React.createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);

  const createBook = (book) => {
    return fetch("http://localhost:8000/books", {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(book)
    })
    .then((response) => response.json())
    .then(getBooks);
  };

  const getBooks = () => {
    return fetch("http://localhost:8000/books", {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setBooks);
  };

  const getBookById = (id) => {
    return fetch(`http://localhost:8000/books/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
  };

  const updateBook = (id, book) => {
    return fetch(`http://localhost:8000/books/${id}`, {
      
    headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(book)
    })
    .then(getBooks);
  };

  const deleteBook = (bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then(getBooks);
  };

  return (
    <BookContext.Provider value={{ books, getBooks, createBook, getBookById, updateBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

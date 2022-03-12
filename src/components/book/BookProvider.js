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
      body: JSON.stringify(game)
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

  return (
    <BookContext.Provider value={{ books, getBooks, createBook, }}>
      {props.children}
    </BookContext.Provider>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookProvider } from "./book/BookProvider.js";
import { BookList } from "./book/BookList.js";
import { BookForm } from "./book/BookForm.js";
import { MeetingProvider } from "./meeting/MeetingProvider.js";
import { MeetingList } from "./meeting/MeetingList.js";
import { MeetingForm } from "./meeting/MeetingForm.js";


export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >


    <BookProvider>
      <MeetingProvider >

        <Routes>
            <Route path="/meetings" element={<MeetingList />}></Route>
            <Route path="/meetings/new" element={<MeetingForm />}></Route>
        </Routes>
        
        <Routes>
            <Route path="/books" element={<BookList />}></Route>
            <Route path="/books/new" element={<BookForm />}></Route>
        </Routes>
        
      </MeetingProvider>
    </BookProvider>

      </main>
    </>
  );
};

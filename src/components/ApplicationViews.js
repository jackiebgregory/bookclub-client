import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { MeetingProvider } from "./meeting/MeetingProvider.js";
import { MeetingList } from "./meeting/MeetingList.js";
import { MeetingForm } from "./meeting/MeetingForm.js"

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >

    <BrowserRouter>
    <Routes>
        <Route path="/meetings" element={<MeetingList />}></Route>
        <Route path="/meetings/new" element={<MeetingForm />}></Route>
    </Routes>
    </BrowserRouter>
      </main>
    </>
  );
};

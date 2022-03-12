import React from "react";
import { Route, Routes } from "react-router-dom";
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

  <MeetingProvider >
    <Routes>
        <Route path="/meetings" element={<MeetingList />}></Route>
        <Route path="/meetings/new" element={<MeetingForm />}></Route>
    </Routes>
  </MeetingProvider>
      </main>
    </>
  );
};

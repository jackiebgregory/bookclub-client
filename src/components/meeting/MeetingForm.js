import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MeetingContext } from "./MeetingProvider.js";


export const MeetingForm = () => {
  const navigate = useNavigate();
  const { createMeeting, getMeetings } = useContext(MeetingContext);
 


  const [currentMeeting, setCurrentMeeting] = useState({
    title: "",
    author: "",
    location: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Get all existing meetings from API
    getMeetings();
  }, []);

  const changeMeetingState = (e) => {
    const key = e.target.name
    const newMeetingState = { ...currentMeeting };
    newMeetingState[key] = e.target.value;
    setCurrentMeeting(newMeetingState);
  };
  

  return (
    <form className="bookForm">
      <h2 className="bookForm__title">Schedule New Book Club Meeting</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="bookId">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentMeeting.title}
            onChange={changeMeetingState}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            required
            autoFocus
            className="form-control"
            value={currentMeeting.author}
            onChange={changeMeetingState}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            required
            autoFocus
            className="form-control"
            value={currentMeeting.location}
            onChange={changeMeetingState}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Description">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentMeeting.date}
            onChange={changeMeetingState}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentMeeting.time}
            onChange={changeMeetingState}
          />
        </div>
      </fieldset>


      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the meeting
          const meeting = {
            title: currentMeeting.title,
            author: currentMeeting.author,
            location: currentMeeting.location,
            date: currentMeeting.date,
            time: currentMeeting.time,
          };

          // Send POST request to API
          createMeeting(meeting).then(() => navigate("/meetings"));
          // Once meeting is created, redirect user to meetings list
        }}
        className="btn btn-primary"
      >
        Create Book Club Meeting
      </button>
    </form>
  );
};

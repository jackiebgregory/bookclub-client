import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MeetingContext } from "./MeetingProvider.js";
import "./meeting.css"


export const MeetingList = () => {
  const { meetings, getMeetings, joinMeeting, leaveMeeting } = useContext(MeetingContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMeetings();
  }, []);
  

  return (
    <article className="meetings">
      <header className="meetings__header">
        <h2>Join a Club</h2>
      </header>
      
      <button
  className="btn btn-2 btn-sep icon-create"
  onClick={() => {
    navigate({ pathname: "/meetings/new" });
  }}
>
  Create New Book Club
</button>

      {meetings.map((meeting) => {
              return (
                <section key={meeting.id} className="registration">
                  <div>The {meeting.clubname}</div>
                  <div>is reading {meeting.book.title}</div>
                  <div>and meeting at {meeting.location}</div>
                  <div>on {meeting.date} @ {meeting.time}</div>
                  {meeting.joined ? (
                    <button
                      className="btn btn-3"
                      onClick={() => leaveMeeting(meeting.id)}>
                      Leave
                    </button>
                  ) : (
                    <button className="btn btn-2" 
                      onClick={() => joinMeeting(meeting.id)}>
                      Join
                    </button>
              )}
                  
                </section>
              );
            })}

    </article>
  );
};

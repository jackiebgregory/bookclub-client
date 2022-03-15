import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MeetingContext } from "./MeetingProvider.js";


export const MeetingList = () => {
  const { meetings, getMeetings, joinMeeting } = useContext(MeetingContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMeetings();
  }, []);
  

  return (
    <article className="meetings">
      <header className="meetings__header">
        <h1>Book Club Meetings</h1>
      </header>
      {/* {meetings.map((meeting) => {
        return (
          <section key={meeting.id} className="registration">
            <div>{meeting.clubname}</div>
            <div className="registration__book">{meeting.book.title}</div>
            <div>{meeting.location}</div>
            <div>
              {new Date(meeting.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              @ {meeting.time}
            </div>
          </section>
        );
      })} */}
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
                  <div>{meeting.clubname}</div>
                  <div className="registration__book">{meeting.book.title}</div>
                  <div>{meeting.location}</div>
                  <div>
                    {meeting.date} @ {meeting.time}
                  </div>
                  <button className="btn btn-2" onClick={() => joinMeeting(meeting.id)}>
                    Join
                  </button>
                </section>
              );
            })}

    </article>
    
  );
};

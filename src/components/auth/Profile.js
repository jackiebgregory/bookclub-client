import React, { useEffect, useContext } from "react";
import { MeetingContext } from "../meeting/MeetingProvider.js";
import { ProfileContext } from "./ProfileProvider.js";
import { BookContext } from "../book/BookProvider";
import { Navigate, useNavigate } from "react-router-dom";
// import "./Profile.css";

export const Profile = () => {
  const { profile, getProfile } = useContext(ProfileContext);
  const { deleteMeeting, updateMeeting, leaveMeeting } = useContext(MeetingContext);
  const { updateBook, deleteBook } = useContext(BookContext);
  const navigate = useNavigate;
  

  useEffect(() => {
    getProfile();
  }, []);


  return (
    <article className="profile">
      <header>
        <h2>Your Profile</h2>
      </header>

      <section className="profile__info">
        <header className="profile__header">
          <h3>Your Info</h3>
        </header>
        <div className="profile__name">
          Welcome: {profile.reader && profile.reader.user.first_name}{" "}
          {profile.reader && profile.reader.user.last_name}
        </div>
        <div className="profile__username">
          Username: {profile.reader && profile.reader.user.username}
        </div>
        <div className="profile__bio">
          About you: {profile.reader && profile.reader.bio}
        </div>
      </section>

      <header className=" ">
          <h3>Your books</h3>
        </header>

      <h2>Books You Have Added</h2>

      <div>
      {profile.reader && profile.mybooks.map((book) => {
        return (
          <section key={book.id} className="book">
            <div className="book__title">
              {book.title} by {book.author}
              <div>
                <div>
                  <button className="update_button" 
                        onClick={() => updateBook(book.id).then(() => navigate(`/books/${book.id}`))}>
                        Edit Book
                  </button>
                </div>
                  <button className="delete_button" 
                          onClick={() => deleteBook(book.id).then(() => getProfile())}>
                          Delete Book
                  </button>
              </div>
            </div>
          </section>
        );
      })}
      </div>

      <section className="profile__registrations">
        <header className="registrations__header">
          <h3>Your Meetings</h3>
        </header>
        
        <h2>Meetings you are Attending</h2>

        <div>
          {profile.reader && profile.reader.attending.map((meeting) => {
            return (
              <div key={`attending--${meeting.id}`} className="registration">
                <div>The {meeting.clubname}</div>
                <div>is reading {meeting.book.title}</div>
                <div>and meeting at {meeting.location}</div>
                <div>on {meeting.date} @ {meeting.time}</div>
                <div>
                  <button className="delete_button" 
                      onClick={() => leaveMeeting(meeting.id).then(() => getProfile())}>
                      Leave
                    </button>
                </div>
              </div>
            );
          })}
        </div>

        <h2>Meetings you are Organizing</h2>
       
        <div className="organized">
          {profile.reader && profile.mymeetings.map((meeting) => {
            return (
              <div key={`organized--${meeting.id}`} className="registration">
                <div>The {meeting.clubname}</div>
                <div>is reading {meeting.book.title}</div>
                <div>and meeting at {meeting.location}</div>
                <div>on {meeting.date} @ {meeting.time}</div>
              <div>
                  <button className="update_button" 
                      onClick={() => updateMeeting(meeting.id).then(() => navigate(`/meeting/${meeting.id}`))}>
                      Update Details
                    </button>
                </div>
                <div>
                  <button className="delete_button" 
                      onClick={() => deleteMeeting(meeting.id).then(() => getProfile())}>
                      Cancel Meeting
                    </button>
                </div>
              </div>
           )})}
        </div>
          
      </section>
          
    </article>
  );
};

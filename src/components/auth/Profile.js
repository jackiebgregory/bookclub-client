import React, { useEffect, useContext } from "react";
import { MeetingContext } from "../meeting/MeetingProvider.js";
import { ProfileContext } from "./ProfileProvider.js";
import { BookContext } from "../book/BookProvider";
// import "./Profile.css";

export const Profile = () => {
  const { profile, getProfile } = useContext(ProfileContext);
  const { deleteMeeting, updateMeeting, leaveMeeting } = useContext(MeetingContext);
  const { books, deleteBook } = useContext(BookContext);
  

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
      {books.map((book) => {
        return (
          <section key={`book--${book.id}`} className="book">
            <div className="book__title">
              {book.title} by {book.author}
              <div>
              <button className="delete_button" 
                      onClick={() => deleteBook(book.id).then(() => getProfile())}>
                      Delete Book
                    </button></div>
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
              <div key={meeting.id} className="registration">
                <div>{meeting.clubname}</div>
                <div>{meeting.book.title}</div>
                <div>{meeting.location}</div>
                <div>{meeting.date} @ {meeting.time}</div>
                <div><button className="delete_button" 
                      onClick={() => leaveMeeting(meeting.id).then(() => getProfile())}>
                      Leave
                    </button></div>
              </div>
            );
          })}
        </div>

        <h2>Meetings you are Organizing</h2>
       
        <div className="organized">
          {profile.reader && profile.mymeetings.map((meeting) => {
            return (
              <div key={meeting.id} className="registration">
                <div>{meeting.clubname}</div>
                <div>{meeting.book.title}</div>
                <div>{meeting.location}</div>
                <div>{meeting.date} @ {meeting.time}</div>
                <div><button className="update_button" 
                      onClick={() => updateMeeting(meeting.id)}>
                      Update
                    </button></div>
                <div><button className="delete_button" 
                      onClick={() => deleteMeeting(meeting.id).then(() => getProfile())}>
                      Cancel
                    </button></div>
              </div>
           )})}
        </div>
          
      </section>
          
    </article>
  );
};

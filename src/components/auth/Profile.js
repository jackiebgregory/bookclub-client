import React, { useEffect, useContext } from "react";
import { ProfileContext } from "./ProfileProvider.js";
// import "./Profile.css";

export const Profile = () => {
  const { profile, getProfile } = useContext(ProfileContext);

  useEffect(() => {
    getProfile();
  }, []);


  return (
    <article className="profile">
      <header>
        <h1>Your Profile</h1>
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

      <section className="profile__registrations">
        <header className="registrations__header">
          <h3>Your Meetings</h3>
        </header>
        <h2>Meetings you are Attending</h2>
        <div className="attending">
          {profile.reader.attending.map((meeting) => {
            return (
              <div key={meeting.id} className="registration">
                <div className="registration__meeting">{meeting.book.title}</div>
                <div>{meeting.location}</div>
                <div>
                  {meeting.date} @ {meeting.time}
                </div>
              </div>
            );
          })}
        </div>
        <h2>Meetings you are Organizing</h2>
        <div className="organized">
          {profile.mymeetings.map((meeting) => {
            return (
              <div key={meeting.id} className="registration">
                <div className="registration__meeting">{meeting.book.title}</div>
                <div>{meeting.location}</div>
                <div>
                  {meeting.date} @ {meeting.time}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

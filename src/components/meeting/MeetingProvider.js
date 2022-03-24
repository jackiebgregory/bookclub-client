import React, { useState } from "react";


export const MeetingContext = React.createContext();

export const MeetingProvider = (props) => {
  const [meetings, setMeetings] = useState([]);

  const createMeeting = (meeting) => {
    return fetch("http://localhost:8000/meetings", {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
        'Content-Type': 'application/json'
      },  
      method: "POST",
      body: JSON.stringify(meeting)
    })
      .then((response) => response.json())
      .then(getMeetings);
  };

  const getMeetings = () => {
    return fetch("http://localhost:8000/meetings", {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setMeetings);
  };


  const leaveMeeting = (meetingId) => {
    return fetch(`http://localhost:8000/meetings/${meetingId}/join`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then(getMeetings);
  };
  
  const joinMeeting = (meetingId) => {
    return fetch(`http://localhost:8000/meetings/${meetingId}/join`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
      .then(getMeetings);
  };

  const getMeetingById = (id) => {
    return fetch(`http://localhost:8000/meetings/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
  };

  const updateMeeting = (id, meeting) => {
    return fetch(`http://localhost:8000/meetings/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(meeting)
    })
    .then(getMeetings);
  };

  const deleteMeeting = (meetingId) => {
    return fetch(`http://localhost:8000/meetings/${meetingId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then(getMeetings);
  };

  return (
    <MeetingContext.Provider value={{ meetings, getMeetings, createMeeting, joinMeeting, leaveMeeting, getMeetingById, updateMeeting, deleteMeeting }}>
      {props.children}
    </MeetingContext.Provider>
  );
};

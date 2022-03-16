import React, { useState } from "react";

export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {
  /*
        Must profile a default value for the `meetings` property
        so that React doesn't throw an error when you try to
        iterate the meetings array in the view.
    */
  const [profile, setProfile] = useState({ meetings: [] });

  const getProfile = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        Authorization: `Token ${localStorage.getItem("bc_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, getProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

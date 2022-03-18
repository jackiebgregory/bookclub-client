import React from "react";
import "./home.css"


export const Home = () => {
  return (
    
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <h2 className="page-title">Welcome</h2>
      
      <div className="flex-container">
        <div className="flex-left">
        Want to invite others to join your book club? Click Create a Club. Looking for a community of readers? Click Join a Club. Need to check when your next book club meeting is? Click My Clubs.  
        </div>
        <div className="flex-right">
        <img src="https://www.parnassusbooks.net/sites/parnassusbooks.net/files/santa_rosa/book%20clubs%20graphic.jpg"></img></div>
      </div>

      </main>
    </>
  );
};

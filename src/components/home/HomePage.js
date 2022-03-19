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
        Hello, Reader! Interested in connecting with others who also enjoy reading? You are in the right place! If you run a book club and want to invite others to join - Click Create a Club. Looking for a new community of readers? Click Join a Club. Need to check when your next scheduled book club meeting is? Click My Clubs. We're glad you're here!  
        </div>
        <div className="flex-right">
        <img src="https://www.parnassusbooks.net/sites/parnassusbooks.net/files/santa_rosa/book%20clubs%20graphic.jpg" alt=" text"></img></div>
      </div>

      </main>
    </>
  );
};

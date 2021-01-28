import React from "react";
import "../styles/GetStarted.css";
import WorkIllustration from "../images/illustration-working.svg";

function GetStarted() {
  return (
    <div className="getStarted">
      <div className="getStarted-left-side">
        <div className="getStarted-title">
          <h1>More than just shorter links</h1>
        </div>
        <div className="getStarted-desc">
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <button id="button" class="get-started hover-effective">
          Sign Up
        </button>
      </div>
      <div className="getStarted-right-side">
        <img src={WorkIllustration} alt="illustration" />
      </div>
    </div>
  );
}

export default GetStarted;

import React from "react";
import "../styles/Statistics.css";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-top-text">
        <div className="statistics-title">
          <h1>Advanced Statistics</h1>
        </div>
        <div className="statistics-desc">
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="statistics-cards">
        <div className="statistics-card">
          <div className="statistics-card-img">
            <img src={BrandRecognition} alt="" />
          </div>
          <div className="statistics-card-title">
            <strong>Brand Recognition</strong>
          </div>
          <div className="statistics-card-desc">
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="statistics-card">
          <div className="statistics-card-img">
            <img src={DetailedRecords} alt="" />
          </div>
          <div className="statistics-card-title">
            <strong>Detailed Records</strong>
          </div>
          <div className="statistics-card-desc">
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="statistics-card">
          <div className="statistics-card-img">
            <img src={FullyCustomizable} alt="" />
          </div>
          <div className="statistics-card-title">
            <strong>Fully Customizable</strong>
          </div>
          <div className="statistics-card-desc">
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

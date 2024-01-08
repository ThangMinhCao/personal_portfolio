import React from "react";
import "./ReleaseCard.css";

const ReleaseCard = ({ img, name, link, releaseDate, black = false }) => {
  return (
    <div className="release-card">
      <img className="release-card-image" src={img} alt={name} />
      <a
        style={{ width: "100%" }}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <button className={`listen-button ${black ? "black" : "white"}`}>
          Listen
        </button>
      </a>
    </div>
  );
};

export default ReleaseCard;

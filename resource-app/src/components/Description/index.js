import React from "react";
import "./Description.css"

export function Description() {
  return (
    <div className="desc-container">
      <img className="soc_logo"
        src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="School of Code logo"
      />
      <p className="desc-text">A collection of resources for School of Code bootcampers</p>
    </div>
  );
}

import React, { useState } from "react";
import "./Input.css";

export function Input({ handleSubmit }) {
  const [typedText, setTypedText] = useState("");

  function setSearchValue(e) {
    e.preventDefault();
    handleSubmit(typedText);
  }

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setTypedText(e.target.value)}
        value={typedText}
        className="resource-input"
        placeholder="Search for topics"
      />
      <button
        className="submit-btn"
        type="submit"
        onClick={(e) => setSearchValue(e)}
      >
        Search
      </button>
    </form>
  );
}

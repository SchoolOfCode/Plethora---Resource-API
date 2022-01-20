import React from "react";
import './Input.css'

export function Input() {
  return (
    <form>
      <input className="resource-input" placeholder="Search for topics"/>
      <button className="submit-btn" type="submit">Search</button>
    </form>
  );
}

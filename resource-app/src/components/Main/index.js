import React, { useState } from "react";
import "./Main.css";
import { Description } from "../Description";
import { Input } from "../Input";
import { SearchResults } from "../SearchResults";

const API_URL = "https://w9project.herokuapp.com";

export function Main() {
  const [results, setResults] = useState([]);

  async function getResults(text) {
    if (text === "") {
      alert("Please do something productive with me!");
      return;
    }
    const response = await fetch(`${API_URL}/resources?title=${text}`);
    const data = await response.json();

    console.log(data);

    setResults(data.payload);

  }

  return (
    <main>
      <h1 className="title">Resource API</h1>
      <Description />
      <Input handleSubmit={getResults} />
      <SearchResults results={results} />
    </main>
  );
}

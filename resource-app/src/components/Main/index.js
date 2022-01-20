import React, { useEffect, useState } from "react";
import "./Main.css";
import { Description } from "../Description";
import { Input } from "../Input";
import { SearchResults } from "../SearchResults";

const API_URL = "https://w9project.herokuapp.com/resources";

export function Main() {
   const [results, setResults] = useState([]);
   const [userInput, setUserInput] = useState("");

   useEffect(() => {
      async function getResults() {
         if (userInput === "") {
            alert("Please do something productive with me!");
            return;
         }
         const response = await fetch(`${API_URL}?title=${userInput}`);
         const data = await response.json();

         console.log(data);

         setResults(data);
      }
      getResults();
   }, [userInput]);

   return (
      <main>
         <h1 className="title">Resource API</h1>
         <Description />
         <Input />
         <SearchResults />
      </main>
   );
}

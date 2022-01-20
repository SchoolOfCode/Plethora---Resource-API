import React from "react";
import './Main.css'
import { Description } from "../Description";
import { Input } from "../Input";
import { SearchResults } from "../SearchResults";

export function Main() {
  return (
    <main>
      <h1 className="title">Resource API</h1>
      <Description />
      <Input />
      <SearchResults />
    </main>
  );
}

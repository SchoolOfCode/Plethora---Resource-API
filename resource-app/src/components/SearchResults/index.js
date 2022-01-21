import React from "react";
import "./SearchResults.css"

export function SearchResults({ results }) {
  return (
    <div className="results-container">
      {results.map(function (result) {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            href={result.url}
            key={result.resourceid}
          >
            <div className="card">
              <img className="card-img"
                src={result.thumbnail}
                alt={`${result.resource_type} thumbnail`}
              ></img>
              <h3 className="card-title">{result.title}</h3>
            </div>
          </a>
        );
      })}
    </div>
  );
}

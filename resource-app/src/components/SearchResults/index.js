import React from "react";

export function SearchResults({ results }) {
  return (
    <div>
      {/* <li>Test</li> */}
      {results.map(function (result) {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            href={result.url}
            key={result.resourceid}
          >
            <div className="card">
              <img
                src={result.thumbnail}
                alt={`${result.resource_type} thumbnail`}
              ></img>
              <h3>{result.title}</h3>
            </div>
          </a>
        );
      })}
    </div>
  );
}

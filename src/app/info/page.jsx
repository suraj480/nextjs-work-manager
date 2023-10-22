"use client";
import React from "react";
export default function Info() {
  console.log("Here is the component");

  const clickMe = () => {};
  return (
    <div>
      <h1>This is info component</h1>

      <button
        className="px-3 py-2 rounded bg-orange-100"
        onClick={() => clickMe()}
      >
        Click here
      </button>
    </div>
  );
}

"use client";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-orange-200 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1>Footer of work manager</h1>
          <p>lorem ispum of work manager</p>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li>
              <a>Tweteer</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

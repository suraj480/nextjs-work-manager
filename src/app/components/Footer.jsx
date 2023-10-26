"use client";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-orange-200 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1>Footer of work manager</h1>
          <p>Yor personalized work manager</p>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href="https://twitter.com/surajmaurya991" target="_blank">Tweteer</a>
            </li>
            <li>
              <a href="https://github.com/suraj480" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/suraj-maurya/" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

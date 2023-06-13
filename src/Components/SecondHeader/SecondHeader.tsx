import React, { useState } from "react";
import "./SecondHeader.css";

export function SecondHeader(): JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeBtn = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={toggleSidebar}>≡All</button>
        <a className="left" href="todays">
          Todays Deals
        </a>
        <a className="left" href="todays">
          Customer Service
        </a>
        <a className="left" href="todays">
          Registry
        </a>
        <a className="left" href="todays">
          Gift Cards
        </a>
        <a className="left" href="/page3">
          Sell
        </a>
        <a className="right" href="todays">
          Shop deals in Electronics
        </a>
      </nav>
      {isSidebarOpen && (
        <div className="sidenav">
          {closeBtn && (
            <>
              <a href="/category1" className="hello">
                <h2>☻ Hello, sign in</h2>
              </a>
              <button className="closebtn" onClick={closeBtn}>
                X
              </button>
              <a href="/category1">
                <h3>Digital Content & Devices </h3>
              </a>
              <a href="/category2">Amazon Music &gt;</a>
              <a href="/category3">Kindle E-readers & Books &gt;</a>
              <a href="/category3">Amazon Appstore &gt;</a>
              <hr />
              <a href="/category1">
                <h3>Help & Settings </h3>
              </a>
              <a href="/category2">Your Account</a>
              <a href="/category3">◍ English</a>
              <a href="/category3">🏳️‍⚧️ United States</a>
              <a href="/category3">Customer Service</a>
              <a href="/category3">Sign in</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

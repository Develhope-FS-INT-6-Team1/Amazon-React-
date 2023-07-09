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
              <a href="/signin" className="hello">
                <h2>Hello, sign in</h2>
              </a>
              <button className="closebtn" onClick={closeBtn}>
                X
              </button>
              <a href="/products">
                <h3>Shop Amazon Products</h3>
              </a>
              <a href="/products">All categories &gt;</a>
              <a href="/products">Kindle E-readers & Books &gt;</a>
              <a href="/products">Amazon Appstore &gt;</a>
              <hr />
              <a href="/category1">
                <h3>Help & Settings </h3>
              </a>
              <a href="/account">Your Account</a>
              <a href="/account">Language and Preferences</a>
              <a href="/orders">Orders</a>
              <a>Customer Service</a>
              <a href="/signin">Sign in</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

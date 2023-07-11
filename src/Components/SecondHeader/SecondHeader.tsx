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
        <a className="sec-links">
          Todays Deals
        </a>
        <a className="sec-links">
          Customer Service
        </a>
        <a className="register" href="/signup">
          Registry
        </a>
        <a className="sec-links">
          Gift Cards
        </a>
        <a className="sec-links">
          Sell
        </a>
        <a className="shop" href="/products">
          Shop deals in Electronics
        </a>
      </nav>
      {isSidebarOpen && (
        <div className="sidenav">
          {closeBtn && (
            <>
              <button className="closebtn" onClick={closeBtn}>
                X
              </button>
              <a className="hello" id="hello">Hello</a>
              <button className="closebtn" onClick={closeBtn}>
                X
              </button>
              <a href="/products">
                <h4>Shop Amazon Products</h4>
              </a>
              <a href="/products">All categories &gt;</a>
              <a href="/products">Kindle E-readers & Books &gt;</a>
              <a href="/products">Amazon Appstore &gt;</a>
              <hr />
              <a href="/category1">
                <h4>Help & Settings </h4>
              </a>
              <a href="/account">Your Account</a>
              <a href="/account">Language and Preferences</a>
              <a href="/orders">Orders</a>
              <a href="/address">Your Adresses</a>
              <a>Live Support</a>
              <a href="/signin">Sign in</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

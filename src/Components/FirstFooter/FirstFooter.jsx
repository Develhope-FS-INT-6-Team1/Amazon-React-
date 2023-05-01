import React from "react";
import "../FirstFooter/FirstFooter.css";
import FooterLogo from '../../Assets/Images/logo.png'

export default function FirstFooter() {
  return (
    <div className="footer-wrapper">
      <button className="footer-btn">Back to top</button>
      <div className="footer-one-container">
        <div className="footer-one-links">
          <h1>Get to Know Us</h1>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h1>Make Money With Us</h1>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>

            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise your products</a>
            </li>
            <li>
              <a href="#">Self-publish with us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h1>Amazon Payment Products</h1>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h1>Let us Help You</h1>
          <ul>
            <li>
              <a href="#">Amazon and Covid-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Amazon Assistant</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{color: 'white'}} />
        <div className="footer-settings">
        <img src={FooterLogo} alt="Footer Logo" />
          <div className="select-language">
            <i className="fa fa-globe"></i>
            <div className="select-language__label">
              {" "}
              <i className="fas fa-heart"></i>English
            </div>
            <div className="select-language__icon"></div>
            <div className="select-language__list">
              <div className="select-language__item">English</div>
              <div className="select-language__item">Spanish</div>
              <div className="select-language__item">French</div>
              <div className="select-language__item">German</div>
              <div className="select-language__item">Italian</div>
            </div>
          </div>
          <button className="btn-1">USD - U.S. Dollar</button>
          <button className="btn-2">United States</button>
        </div>
      <hr/>
    </div>
  );
}

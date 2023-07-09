import React from "react";
import "../FirstFooter/FirstFooter.css";
import FooterLogo from '../../Assets/Images/logo.png'

export default function FirstFooter(): JSX.Element {
  return (
    <div className="footer-wrapper">
      <a href="#" className="footer-btn">Back to top</a>
      <div className="footer-one-container">
        <div className="footer-one-links">
          <h4>Get to Know Us</h4>
          <ul>
            <li>
              <a href="#Main">Careers</a>
            </li>
            <li>
              <a href="#Main">Blog</a>
            </li>
            <li>
              <a href="#Main">About Amazon</a>
            </li>
            <li>
              <a href="#Main">Investor Relations</a>
            </li>
            <li>
              <a href="#Main">Amazon Devices</a>
            </li>
            <li>
              <a href="#Main">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h4>Make Money With Us</h4>
          <ul>
            <li>
              <a href="#Main">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#Main">Sell on Amazon Business</a>
            </li>

            <li>
              <a href="#Main">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#Main">Become an Affiliate</a>
            </li>
            <li>
              <a href="#Main">Advertise your products</a>
            </li>
            <li>
              <a href="#Main">Self-publish with us</a>
            </li>
            <li>
              <a href="#Main">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#Main">See More Make Money with Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>
              <a href="#Main">Amazon Business Card</a>
            </li>
            <li>
              <a href="#Main">Shop with Points</a>
            </li>
            <li>
              <a href="#Main">Reload Your Balance</a>
            </li>
            <li>
              <a href="#Main">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className="footer-one-links">
          <h4>Let us Help You</h4>
          <ul>
            <li>
              <a href="#Main">Amazon and Covid-19</a>
            </li>
            <li>
              <a href="/account">Your Account</a>
            </li>
            <li>
              <a href="/orders">Your Orders</a>
            </li>
            <li>
              <a href="#Main">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="/orders">Returns & Replacements</a>
            </li>
            <li>
              <a href="#Main">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#Main">Amazon Assistant</a>
            </li>
            <li>
              <a href="#Main">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ color: 'white' }} />
      <div className="footer-settings">
        <img src={FooterLogo} alt="Footer Logo" width='75px' />
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
    </div>
  );
}

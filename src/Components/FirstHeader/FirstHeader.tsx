import React, { useState, useEffect } from "react";
import "../FirstHeader/FirstHeader.css";
import MainLogo from "../../Assets/logo.png";
import LocationIcon from "../../Assets/location.png";
import SearchIcon from "../../Assets/search-260.png";
import LangFlag from "../../Assets/flag.jpg";
import LangFlagTr from "../../Assets/flagtr.png";
import CartIcon from "../../Assets/cart.png";
import userJson from '../../Users.json';

export default function FirstHeader(): JSX.Element {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [preferedLanguage, setPreferedLanguage] = useState('');
  const [preferedCurrency, setPreferedCurrency] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const value = await localStorage.getItem('userId');
        const value1 = await localStorage.getItem('username');
        const value2 = await localStorage.getItem('preferedLanguage');
        const value3 = await localStorage.getItem('preferedCurrency');
        let boolValue = false;
        if (value !== null) {
          boolValue = true;
          console.log(value);
          setUserId(value);
        }


        if (boolValue) {
          console.log('User has logged in');
          if(value1 != null)
            setUserName(value1);
          if(value2 != null)
            setPreferedLanguage(value2);
          if(value3 != null)
            setPreferedCurrency(value3);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleSignOut = (): void => {
    localStorage.removeItem('userId');
    setUserId('');
    setUserName('');
    setPreferedLanguage('');
    setPreferedCurrency('');
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
  }, []);

  return (
    <div className="nav-header">
      <div className="nav-left">
        <a href="/" className="nav-logo header-links">
          <img src={MainLogo} alt="" width="100px" />
        </a>
        <div className="deliver-location">
          <a href="/purchase" className="location  header-links">
            <img
              src={LocationIcon}
              id="location-icon"
              alt=""
              width="15px"
              height="18px"
            />
            <div>
              <p id="row1" className="header-p">
                Hello
              </p>
              <p className="header-p">Select your address</p>
            </div>
          </a>
        </div>
      </div>

      <div className="nav-fill">
        <select name="departments" id="select-deps">
          <option value="all">All</option>
          <option value="arts">Arts & Crafts</option>
          <option value="automotive">Automotive</option>
          <option value="baby">Baby</option>
          <option value="beauty">Beauty & Personal Care</option>
          <option value="books">Books</option>
          <option value="boys-fashion">Boy's Fashion</option>
          <option value="computers">Computers</option>
          <option value="deals">Deals</option>
          <option value="digital-music">Digital Music</option>
          <option value="electronics">Electronics</option>
          <option value="girls-fashion">Girl's Fashion</option>
          <option value="health">Health & Household</option>
          <option value="home">Home & Kitchen</option>
          <option value="industrial">Industrial & Scientific</option>
          <option value="kindle-store">Kindle Store</option>
          <option value="luggage">Luggage</option>
          <option value="mens-fashion">Men's Fashion</option>
          <option value="music-tv">Music & TV</option>
          <option value="cds">Music, CDs & Vinyl</option>
          <option value="pet">Pet Supplies</option>
          <option value="prime">Prime Videos</option>
          <option value="software">Software</option>
          <option value="sports">Sports & Outdoor</option>
          <option value="tools">Tools & Home Improvements</option>
          <option value="toys">Toys & Games</option>
        </select>
        <input
          type="text"
          className="nav-input"
          name="field-keywords"
          autoComplete="off"
          placeholder="Search Amazon"
        />
        <div className="search-button">
          <img src={SearchIcon} alt="" width="25px" id="search-icon" />
        </div>
      </div>

      <div className="nav-right">
        <div className="lang-part">
          {userName ? (
            <a href="#Main" className="lang  header-links">
              <img src={LangFlagTr} alt="" width="17px" height="13" />
              <p className="text-lang header-p">{preferedLanguage}</p>
            </a>
          ) : (
            <a href="#Main" className="lang  header-links">
              <img src={LangFlag} alt="" width="17px" height="13" />
              <p className="text-lang header-p">EN</p>
            </a>
          )}
        </div>

        <div className="hidden-lang">
          <p className="in-line">Change language</p>
          <a href="/" className="in-line header-links">
            Learn more
          </a>
          <div className="selected-lang">
            <input type="radio" id="en" name="fav_language" value="en" />
            <label htmlFor="en">English - EN</label>
            <br />
          </div>
          <hr />
          <input type="radio" id="es" name="fav_language" value="es" />
          <label htmlFor="es">Español - ES</label>
          <br />
          <input type="radio" id="ar" name="fav_language" value="ar" />
          <label htmlFor="ar">العربية - AR</label>
          <br />
          <input type="radio" id="de" name="fav_language" value="de" />
          <label htmlFor="de">Deutsch - DE</label>
          <br />
          <input type="radio" id="he" name="fav_language" value="he" />
          <label htmlFor="he">HE - תרגום</label>
          <br />
          <input type="radio" id="ko" name="fav_language" value="ko" />
          <label htmlFor="ko">한국어 - KO</label>
          <br />
          <input type="radio" id="pt" name="fav_language" value="pt" />
          <label htmlFor="pt">português - PT</label>
          <br />
          <input type="radio" id="zh" name="fav_language" value="zh" />
          <label htmlFor="zh">中文 (简体) - ZH </label>
          <br />
          <hr />
          <div>
            <p className="in-line">Change currency</p>
            <a href="/" className="in-line header-links">
              Learn more
            </a>
          </div>
          <div>
            <p className="in-line">{preferedCurrency}</p>
            <a href="/" className="in-line header-links">
              Change
            </a>
          </div>
          <hr />
          <div className="flag">
            <img src={LangFlag} alt="" width="17px" height="13" />
            <p>You are shopping on <br /> Amazon.com</p>
          </div>
          <a href="/" id="change-country">
            Change country/region.
          </a>
        </div>

        <div className="accounts">    
          {userName ? (
            <a href="/signin" className="account header-links">
              <p id="row1" className="header-p">
                Hello, {userName}
              </p>
              <p className="header-p">Accounts & Lists</p>
            </a>
          ) : (
            <a href="/signin" className="account header-links">
              <p id="row1" className="header-p">
                Hello, sign in
              </p>
              <p className="header-p">Accounts & Lists</p>
            </a>
          )}
        </div>

        {userName ? (
          <div className="hidden-account">
            <div id="account1">
              <button
                className="account-button"
                onClick={handleSignOut}
              >
                <a href="/">Sign Out</a>
              </button>
            </div>
            <div id="account2">
              <h3>Your Lists</h3>
              <a href="/">Create a List</a>
              <a href="/">Find a List or Registry</a>
            </div>
            <div id="account3">
              <h3>Your Account</h3>
              <a href="/account">Account</a>
              <a href="/">Orders</a>
              <a href="/">Recommendations</a>
              <a href="/">Browsing History</a>
              <a href="/">Watchlist</a>
              <a href="/">Video Purchases & Rentals</a>
              <a href="/">Kindle Unlimited</a>
              <a href="/">Content & Devices</a>
              <a href="/">Subscribe & Save Items</a>
              <a href="/">Memberships & Subscriptions</a>
              <a href="/">Music Library</a>
            </div>
          </div>
        ) : (
          <div className="hidden-account">
            <div id="account1">
              <button className="account-button">
                <a href="/signin">Sign in</a>
              </button>
              <div className="inline-link">
                <p>New customer?</p>
                <a href="/" id="start-here">
                  Start here.
                </a>
              </div>
            </div>
            <div id="account2">
              <h3>Your Lists</h3>
              <a href="/">Create a List</a>
              <a href="/">Find a List or Registry</a>
            </div>
            <div id="account3">
              <h3>Your Account</h3>
              <a href="/account">Account</a>
              <a href="/">Orders</a>
              <a href="/">Recommendations</a>
              <a href="/">Browsing History</a>
              <a href="/">Watchlist</a>
              <a href="/">Video Purchases & Rentals</a>
              <a href="/">Kindle Unlimited</a>
              <a href="/">Content & Devices</a>
              <a href="/">Subscribe & Save Items</a>
              <a href="/">Memberships & Subscriptions</a>
              <a href="/">Music Library</a>
            </div>
          </div>
        )}

        <a href="/account" className="text header-links">
          <p id="row1" className="header-p">Returns</p>
          <p className="header-p ">& Orders</p>
        </a>
        <a href="/cart" className="cart header-links">
          <div className="cart-icon">
            <p className="items-in-cart header-p">{cartItems.length}</p>
            <img src={CartIcon} alt="" width="40px"/>
          </div>
          <p className="header-p">Cart</p>
        </a>
      </div>
    </div>
  );
}

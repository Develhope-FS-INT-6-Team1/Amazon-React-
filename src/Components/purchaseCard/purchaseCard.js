import React from 'react';
import "../purchaseCard/purchaseCard.js";

export default function purchaseCard() {
  return (
     <header className="nav-header">
    <div className="nav-left">
      <a href="#Main" className="nav-logo">
        <img src="assets/logo.png" alt="" width="100px">
      </a>
      <a href="#Main" className="location">
        <img src="assets/location.png" id="location-icon" alt="" width="15px" height="18px">
        <div>
          <p id="row1">Hello</p>
          <p>Select your address</p>
        </div>
      </a>
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
      <input type="text" className="nav-input" name="field-keywords" autocomplete="off" placeholder="Search Amazon">
      <div className="search-button">
        <img src="assets/search-260.png" alt="" width="25px" id="search-icon">
      </div>
    </div>

    <div className="nav-right">
      <a href="#Main" className="lang">
        <img src="assets/flag.jpg" alt="" width="17px" height="13">
        <p className="text-lang">EN</p>
      </a>

      <div className="hidden-lang">
        <p className="in-line">Change language</p>
        <a href="/" className="in-line">Learn more</a>
        <div className="selected-lang">
          <input type="radio" id="en" name="fav_language" value="en">
          <label for="en">English - EN</label><br>
        </div>
        <hr>
        <input type="radio" id="es" name="fav_language" value="es">
        <label for="es">Español - ES</label><br>
        <input type="radio" id="ar" name="fav_language" value="ar">
        <label for="ar">العربية - AR</label><br>
        <input type="radio" id="de" name="fav_language" value="de">
        <label for="de">Deutsch - DE</label><br>
        <input type="radio" id="he" name="fav_language" value="he">
        <label for="he">HE - תרגום</label><br>
        <input type="radio" id="ko" name="fav_language" value="ko">
        <label for="ko">한국어 - KO</label><br>
        <input type="radio" id="pt" name="fav_language" value="pt">
        <label for="pt">português - PT</label><br>
        <input type="radio" id="zh" name="fav_language" value="zh">
        <label for="zh">中文 (简体) - ZH </label><br>
        <hr>
        <div>
          <p className="in-line">Change currency</p>
          <a href="/" className="in-line">Learn more</a>
        </div>
        <div>
          <p className="in-line">$ - USD - US Dollar</p>
          <a href="/" className="in-line">Change</a>
        </div>
        <hr>
        <div className="flag">
          <img src="assets/flag.jpg" alt="" width="17px" height="13">
          <p>You are shopping on <br> Amazon.com</p>
        </div>
        <a href="/" id="change-country">Change country/region.</a>
      </div>
      <div className="overlay"></div>

      <a href="#Main" className="account">
        <p id="row1">Hello, sign in</p>
        <p>Accounts & Lists</p>
      </a>

      <div className="hidden-account">
        <div id="account1">
          <button className="account-button">Sign in</button>
          <div className="inline-link">
            <p>New customer?</p>
            <a href="/" id="start-here">Start here.</a>
          </div>
        </div>
        <div id="account2">
          <h3>Your Lists</h3>
          <a href="/">Create a List</a>
          <a href="/">Find a List or Registry</a>
        </div>
        <div id="account3">
          <h3>Your Account</h3>
          <a href="/">Account</a>
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

      <a href="#Main" className="text">
        <p id="row1">Returns</p>
        <p>& Orders</p>
      </a>
      <a href="#Main" className="cart">
        <div className="cart-icon">
          <p className="items-in-cart">0</p>
          <img src="assets/cart.png" alt="" width="40px">
        </div>
        <p>Cart</p>
      </a>
    </div>
  </header>
  
  <nav className="nav">
    <div className="leftnav"></div>
    <span onclick="openNav()">&#9776; ALL</span>
    <a href="www.Today's deals.com">Today's deals</a>
    <a href="Customer Service.com">Customer Service</a>
    <a href="www.Registry.com">Registry</a>
    <a href="www.Gift Cards.com">Gift Cards</a>
    <a href="www.Sell.com">Sell</a>
    <a className="rightnav" href="www.Shop great deals now.com">Shop great deals now</a>
  </nav>

  <div className="ALLNAV" id="sideNav">
    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
    <div className="first" id="first">
      <div className="ff">
        <h1>Hello, sign in</h1>
      </div>
      <ul className="ALLUL">
        <li>
          <h3>Digital Content & Devices</h3>
        </li>
        <li>
          <button id="AmazonMusic">Amazon Music</button>
        </li>
        <li>
          <button id="Kindle">Kindle E-readers &amp; Books</button>
        </li>
        <li>

          <button id="aapp">Amazon Appstore</button>
        </li>
        <div className="HS">
          <li>
            <h3>Help &amp; Settings</h3>
          </li>
          <li>
            <button id="YA">Your Account</button>
          </li>
          <li>

            <button id="Eng">English</button>
          </li>
          <li>
            <button id="US">United States</button>
          </li>
          <li>
            <button id="CS">Customer Service</button>
          </li>
          <li>
            <button id="SI">Sign In</button>
          </li>
      </ul>
    </div>
    <ul className="hmenu hmenu-visible hmenu-translateX" data-menu-id="2" data-parent-menu-id="1">
      <div id="amusiclist">
        <li>
          <a href="/" className="hmenu-item hmenu-back-button" aria-label="Back to main menu"
            data-ref-tag="nav_em_1_2_BT_0_main_menu">
            <div style="align-items: center">
              <i className="nav-sprite hmenu-arrow-prev"></i>main menu
            </div>
          </a>
        </li>
        <li>
          <div className="hmenu-item hmenu-title">
            <h2>stream music</h2>
          </div>
        </li>
        <li>
          <a href="https://music.amazon.com/unlimited?ref_=nav_em__dm_hf_0_2_2_2" className="hmenu-item">Amazon Music
            Unlimited</a>
        </li>
        <li>
          <a href="/music/free?ref_=nav_em__dm_nav_nw_0_2_2_3" className="hmenu-item">Free Streaming Music</a>
        </li>
        <li>
          <a href="/music/lp/podcasts?ref_=nav_em__dm_nav_rh_0_2_2_4" className="hmenu-item">Podcasts</a>
        </li>
        <li>
          <a href="https://music.amazon.com?ref_=nav_em_dm_webplayer_0_2_2_5" className="hmenu-item">Open Web Player</a>
        </li>
        <li>
          <a href="https://music.amazon.com?ref_=nav_em_dm_webplayer_0_2_2_6" className="hmenu-item">Open Web Player</a>
        </li>
        <li>
          <a href="/gp/browse.html?node=23653176011&amp;ref_=nav_em__dm_store_ms_0_2_2_7" className="hmenu-item">Download
            the app</a>
        </li>
        <li className="hmenu-separator"></li>
      </div>
    </ul>
  </div>
  </div>
  

    <section className="mainpage-content">
      <div className="smallimages">
        <button id="firstimg"><img src="assets/Capture.PNG" alt="img" width="50" height="50" /></button>
        <button id="secondimg"><img src="assets/Capture1.PNG" alt="" width="50" height="50" /></button>
      </div>
      <div className="bigimages">
        <img id="firstBimg" src="assets/watch.jpg" width="277" height="460" alt="" />
        <img id="secondBimg" src="assets/watch1.jpg" width="277" height="460" alt="" />
      </div>
      <div className="middlepart">
        <div className="Fmiddlepart">
        <i className="text" style="color: rgba(0,113,133,255);">Visit the Invicta Store</i>
        <h2 className="text">Invicta Men's Pro Diver Collection Coin-Edge Automatic Watch</h2>
        <div className="inline" ><i><i id="star">&#9733&#9733&#9733&#9733&#9734</i><a id="link" href="#Main"> &nbsp;38,523 ratings | 836 answered questions</a><details><summary></summary><img id="cpt4" src="Capture4.PNG" height="250" width="250" alt=""></details></i></div></div>
        <hr>
      <div className="Smiddlepart">
        <p>24% <b>$89.90</b></p>
        <i>List Price:<del> $119.00</del></i> 

      </div>
      <div className="card-body">
      <p className="card-text">$95.56 Shipping & Import Fees Deposit to Turkey Details<br>
        Available at a lower price from <a href="#Main" className="link"> other sellers</a> that may not offer free Prime shipping.</p>
    <hr>
    <div className="card-section">
      <h2 className="card-section-title">Color:Steel</h2>
      <div className="card-images">
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41fV82MnGmL._SS64_.jpg" alt="Image 1">
          <label className="card-image-text">$86.99</label>
        </div>
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41130oLic9L._SS64_.jpg" alt="Image 2">
          <label className="card-image-text">$54.33</label>
        </div>
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41lBnxQjoHS._SS64_.jpg" alt="Image 3">
          <label className="card-image-text">$62.35</label>
        </div>
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41CXrYg2ifS._SS64_.jpg" alt="Image 4">
          <label className="card-image-text">$86.99</label>
        </div>
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41ZUpidZuBS._SS64_.jpg" alt="Image 5">
          <label className="card-image-text">$95.00</label>
        </div>
        <div className="card-image">
          <img src="https://m.media-amazon.com/images/I/41GU-3NckRS._SS64_.jpg" alt="Image 6">
          <label className="card-image-text">72.11</label>
        </div>
        <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41ojeOLorDL._SS64_.jpg" alt="Image 7">
            <label className="card-image-text">$91.20</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/51jWp4N1HYL._SS64_.jpg" alt="Image 8">
            <label className="card-image-text">$48.63</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/4192EhbjDqS._SS64_.jpg" alt="Image 9">
            <label className="card-image-text">$38.99</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41ncrs38FTS._SS64_.jpg" alt="Image 10">
            <label className="card-image-text">$85.99</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/418pJ0cdRFS._SS64_.jpg" alt="Image 11">
            <label className="card-image-text">$59.33</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41IP1GnVcHS._SS64_.jpg" alt="Image 12">
            <label className="card-image-text">$78.00</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41-PL5AU1xL._SS64_.jpg" alt="Image 13">
            <label className="card-image-text">$68.10</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41NO7Bcw1-L._SS64_.jpg" alt="Image 14">
            <label className="card-image-text">$32.51</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41ALwAZqK3S._SS64_.jpg" alt="Image 15">
            <label className="card-image-text">$73.99</label>
          </div>
          <div className="card-image">
            <img src="	https://m.media-amazon.com/images/I/513P-nzs7xL._SS64_.jpg " alt="Image 16">
            <label className="card-image-text">$99.99</label>
          </div>
          <div className="card-image">
            <img src="	https://m.media-amazon.com/images/I/41g4bhZNBvS._SS64_.jpg" alt="Image 17">
            <label className="card-image-text">$86.99</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41waqQRBPWS._SS64_.jpg " alt="Image 18">
            <label className="card-image-text">$91.35</label>
          </div>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/41PRNxoInjS._SS64_.jpg" alt="Image 19">
            <label className="card-image-text">$40.51</label>
          </div>
          <div className="card-image">
            <img src="	https://m.media-amazon.com/images/I/41dzolTJcRS._SS64_.jpg" alt="Image 20">
            <label className="card-image-text">$100.05</label>
          </div>
      </div>
      <a href="#Main" className="clink">See all 22 options &rarr;</a>
    </div>
    <hr>
    <div className="card-section">
      <ul className="card-list">
        <li>&#8226;&nbsp;&nbsp;Imported</li>
        <li>&#8226;&nbsp;&nbsp;Stainless steel case 40mm diameter x 14.1mm thick; Exhibition case 
          &nbsp;&nbsp;&nbsp;back; Black dial; Luminous hands.Band Length: 205mm</li>
        <li>&#8226;&nbsp;&nbsp;NH35A Japanese Automatic movement, 24 jewel; Assembled in Malaysia;&nbsp;&nbsp; Watch weight 155 grams
        </li>
        <li>&#8226;&nbsp;&nbsp;Includes gift box, instructions and 3 year limited manufacturer warranty;
          &nbsp;&nbsp;&nbsp;Invicta Customer Service can be reached at 1-800-327-7682 for 
          &nbsp;&nbsp;&nbsp;questions (re: Additional links, band replacement, band adjustment, 
          &nbsp;&nbsp; warranty questions, etc.)</li>
      </ul>
      <hr>
      <a href="#Main" className="card-link">See product specifications &rarr;</a>
    </div>
      </div>

    </div>
      </div>
      <div className="card">
        <div className="price">$89.90      </div>
        <div className="description">
          <p>
            $95.56  Shipping & Import Fees <br />Deposit to Turkey
            <a href="#Main" className="more-info"
              >Details&#x25BC;<i className="fas fa-angle-down"></i></a
            ><br />$14.51 delivery
          </p>
        </div>
        <div className="location">
          <a className="secure">&#x1F4CD;Deliver to Turkey</a>
        </div>
        <div className="stock">In Stock</div>
        <div className="quantity">
          <button className="dropdown-toggle">
            Qty: 1 &#x25BC;<i className="fas fa-angle-down"></i>
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item">1</button>
            <button className="dropdown-item">2</button>
            <button className="dropdown-item">3</button>
            <button className="dropdown-item">4</button>
            <button className="dropdown-item">5</button>
          </div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
        <a href="#Main" className="secure">&#128274; Secure transaction </a>
        <p>
          ships from &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Amazon</b>
        </p>
        <p>
          Sold
          by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
            href="#Main"
            className="watch"
            >Watchsavings</a
          >
        </p>
        <p>
          Return policy:
          <a href="#Main" className="secure"
            >Eligible for <br />Return, Refund or Replacement<br />within 30 days
            of receipt</a
          >&#x25BC;
        </p>
        <label>
          <input type="checkbox" name="checkbox1" value="checkbox1" /> Add a gift
          receipt for easy <br />returns
        </label>
        <hr />
        <a href="https://example.com/add-to-list" className="add-to-list-button"
          >Add to list</a
        >
      </div>
    </section>
 

  <div className="footer-wrapper footer-position">
    <button className="footer-btn">Back to top</button>
    <div className='footer-one-container'>
      <div className="footer-one-links">
        <h1>Get to Know Us</h1>
        <ul>
          <li><a href="#Main">Careers</a></li>
          <li><a href="#Main">Blog</a></li>
          <li><a href="#Main">About Amazon</a></li>
          <li><a href="#Main">Investor Relations</a></li>
          <li><a href="#Main">Amazon Devices</a></li>
          <li><a href="#Main">Amazon Science</a></li>
        </ul>
      </div>
      <div className="footer-one-links">
        <h1>Make Money With Us</h1>
        <ul>
          <li><a href="#Main">Sell products on Amazon</a></li>
          <li><a href="#Main">Sell on Amazon Business</a></li>
          <li><a href="#Main">Sell apps on Amazon</a></li>
          <li><a href="#Main">Become an Affiliate</a></li>
          <li><a href="#Main">Advertise your products</a></li>
          <li><a href="#Main">Self-publish with us</a></li>
          <li><a href="#Main">Host an Amazon Hub</a></li>
          <li><a href="#Main">See More Make Money with Us</a></li>
        </ul>
      </div>
      <div className="footer-one-links">
        <h1>Amazon Payment Products</h1>
        <ul>

          <li><a href="#Main">Amazon Business Card</a></li>
          <li><a href="#Main">Shop with Points</a></li>
          <li><a href="#Main">Reload Your Balance</a></li>
          <li><a href="#Main">Amazon Currency Converter</a></li>
        </ul>
      </div>
      <div className="footer-one-links">
        <h1>Let us Help You</h1>
        <ul>

          <li><a href="#Main">Amazon and Covid-19</a></li>
          <li><a href="#Main">Your Account</a></li>
          <li><a href="#Main">Your Orders</a></li>
          <li><a href="#Main">Shipping Rates & Policies</a></li>
          <li><a href="#Main">Returns & Replacements</a></li>
          <li><a href="#Main">Manage Your Content and Devices</a></li>
          <li><a href="#Main">Amazon Assistant</a></li>
          <li><a href="#Main">Help</a>
          </li>
        </ul>
      </div>
    </div>
    <hr style="color: white;">
    <div className="footer-settings">
      <img src="assets/amazon logo.PNG" />

      <div className="select-language">
        <i className="fa fa-globe"></i>
        <div className="select-language__label"> <i className="fas fa-heart"></i>English</div>
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

    </hr>
  </div> 
  
  <footer className="footer-position">
    <div className="footer-container">
      <div className="footer-section">
        <h3>Amazon Music</h3>
        <ul>
          <li><a href="#Main">Stream millions <br>of songs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Amazon Advertising</h3>
        <ul>
          <li><a href="#Main">Find, attract,<br>and<br>engage<br>customers</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>6pm</h3>
        <ul>
          <li><a href="#Main">Score deals <br>on fashion <br>brands</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>AbeBooks</h3>
        <ul>
          <li><a href="#Main">Books, art <br>& collectibles</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>ACX</h3>
        <ul>
          <li><a href="#Main">Audionbook <br>publishing <br>Made Easy</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Sell on Amazon</h3>
        <ul>
          <li><a href="#Main">Start a Selling <br>Account</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Amazon Business</h3>
        <ul>
          <li><a href="#Main">Everything For <br>Your Business</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>AmazonGlobal</h3>
        <ul>
          <li><a href="#Main">Ship Orders <br>Internationally</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Home Services</h3>
        <ul>
          <li><a href="#Main">Experienced <br>Pros <br>Happiness <br>Guarantee</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Amazon Ignite</h3>
        <ul>
          <li><a href="#Main">Sell your <br>original <br>Digital <br>Educational <br>Resources</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Amazon Web Services</h3>
        <ul>
          <li><a href="#Main">Scalable Cloud <br>Computing Services</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Audible</h3>
        <ul>
          <li><a href="#Main">Listen to Books & <br>Original <br>Audio <br>Performances</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Book Depository</h3>
        <ul>
          <li><a href="#Main">Books With Free <br>Delivery <br>Worldwide</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Box Office Mojo</h3>
        <ul>
          <li><a href="#Main">Find Movie <br>Box Office Data</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>ComiXology</h3>
        <ul>
          <li><a href="#Main">Thousands of <br>Digital Comics</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>DPReview</h3>
        <ul>
          <li><a href="#Main">Digital <br>Photography</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Fabric</h3>
        <ul>
          <li><a href="#Main">Sewing,<br>Quiting<br>& Knitting</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Goodreads</h3>
        <ul>
          <li><a href="#Main">Book reviews <br>& recommendations</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>IMDb</h3>
        <ul>
          <li><a href="#Main">Movies, TV<br>& Celebrities</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>IMDb Pro</h3>
        <ul>
          <li><a href="#Main">Get info <br>Entertainment <br>Professionals <br>Need</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Kindle Direct Publishing</h3>
        <ul>
          <li><a href="#Main">Indie Digital & <br>Print Publishing <br>Made Easy</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Prime Video Direct</h3>
        <ul>
          <li><a href="#Main">Video<br>Distribution <br>Made Easy</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Shopbop</h3>
        <ul>
          <li><a href="#Main">Designer<br>Fashion Brands</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Woot!</h3>
        <ul>
          <li><a href="#Main">Deals and <br>Shenanigans</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Zappos</h3>
        <ul>
          <li><a href="#Main">Shoes & <br>Clothing</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Ring</h3>
        <ul>
          <li><a href="#Main">Smart Home <br>Security Systems</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>eero WiFi</h3>
        <ul>
          <li><a href="#Main">Stream 4k Video <br>in Every Room</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Blink</h3>
        <ul>
          <li><a href="#Main">Smart Security <br>for Every Home</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Neighbors App</h3>
        <ul>
          <li><a href="#Main">Real-Time <br>Crime <br>& Saftey <br>Alerts</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Amazon Subscription Boxes</h3>
        <ul>
          <li><a href="#Main">Top subscription Boxes-<br>right to your door</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>PillPack</h3>
        <ul>
          <li><a href="#Main">Pharmacy <br>Simplified</a></li>

        </ul>
      </div>
    </div>
  
  </footer>
  <div className="copyRightArea">
    <div className="container1">
      <a className="container2" href="#Main">Conditions of Use</a>
      <a className="container2" href="#Main">Privacy Notice</a>
      <a className="container2" href="#Main">Your ads Privacy Choices</a>
    </div>
    <p className="copyright">
      © 1996-2023, Amazon.com, Inc. or its affiliates
    </p>
  </div>

    );
}

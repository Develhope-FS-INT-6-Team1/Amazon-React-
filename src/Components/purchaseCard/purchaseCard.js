import React from 'react';
import "../purchaseCard/purchaseCard.js";

const Navigation = () => {
  const goToSignIn = () => {
    window.location.href = "SignInPage.html";
  }
  const goToCart = () => {
    window.location.href = "CartPAge.html";
  }
  const goToHome = () => {
    window.location.href = "HomePage.html"
  }
  const openNav = () => {
    const click = document.getElementById("sideNav");
    click.style.width = "25vw";
  }
  const closeNav = () => {
    const click = document.getElementById("sideNav");
    click.style.width = "0px";
  }
  const showAmazonMusicList = () => {
    const first = document.getElementById("first");
    const amusiclist = document.getElementById("amusiclist");
    first.style.display = "none";
    amusiclist.style.display = "flex";
  }
  const dropdownToggle = () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
  }
  const selectDropdownItem = (item) => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownToggle.innerText = `Qty ${item.innerText} `;
    dropdownMenu.classList.remove('show');
  }
  const scrollToTop = () => {
    const scroll = document.getElementsByClassName('bigimages')
    var scrollTo = 100;
    scroll.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });
  }
  const goToCartFromDetails = () => {
    window.location.href = "CartPAge.html";
  }

  return (
    <nav>
      <ul>
        <li><a className="account" onClick={goToSignIn}>Sign In</a></li>
        <li><a className="cart" onClick={goToCart}>Cart</a></li>
        <li><a className="nav-logo" onClick={goToHome}>Logo</a></li>
        <li><button id="ALLB" onClick={openNav}>Open Nav</button></li>
      </ul>
      <div id="sideNav">
        <ul>
          <li><a id="AmazonMusic" onClick={showAmazonMusicList}>Amazon Music</a></li>
          <li className="dropdown">
            <button className="dropdown-toggle" onClick={dropdownToggle}>Qty 1</button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => selectDropdownItem(document.querySelector('.dropdown-item:nth-child(1)'))}>Qty 1</li>
              <li className="dropdown-item" onClick={() => selectDropdownItem(document.querySelector('.dropdown-item:nth-child(2)'))}>Qty 2</li>
              <li className="dropdown-item" onClick={() => selectDropdownItem(document.querySelector('.dropdown-item:nth-child(3)'))}>Qty 3</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bigimages">
        <img id="firstBimg" src="first-big-image.jpg" alt="" />
        <img id="secondBimg" src="second-big-image.jpg" alt="" onClick={scrollToTop} />
      </div>
      <div className="details">
        <img id="firstimg" src="first-image.jpg" alt="" />
        <img id="secondimg" src="second-image.jpg" alt="" />
        <div className="buttons">
          <button className="add-to-cart" onClick={goToCartFromDetails}>Add to Cart</button>
          <button className="buy-now" onClick={goToBuyNow}>Buy Now</button>

          </div>
      </div>
    </nav>
  );
}
function goToCartFromDetails() {
window.location.href = "CartPAge.html";
}

function goToBuyNow() {
window.location.href = "BuyNowPage.html";
}

export default App;


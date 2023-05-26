import React from "react";
import "./purchaseCard.css";

export default function PurchaseCard({ item }) {
  const [cartItems, setCartItems] = React.useState([]);
  const handleAddToCart = () => {
    setCartItems([...cartItems, item]);
  };
  

  console.log(item);
  return (
    <section className="mainpage-content">
      <div className="smallimages">
        <button id="firstimg">
          <img src={item.image} alt="img" width="50" height="50" />
        </button>
        <button id="secondimg">
          <img src={item.image} alt="" width="50" height="50" />
        </button>
      </div>
      <div className="bigimages">
        <img id="firstBimg" src={item.image} width="277" height="460" alt="" />
        <img id="secondBimg" src={item.image} width="277" height="460" alt="" />
      </div>
      <div className="middlepart">
        <div className="Fmiddlepart">
          <i className="text" style={{ color: "rgba(0,113,133,255)" }}>
            Visit the Invicta Store
          </i>
          <h2 className="text">
            {/* Invicta Men's Pro Diver Collection Coin-Edge Automatic Watch */}
            {item.name}
          </h2>
          <div className="inline">
            <i>
              <i id="star">&#9733;&#9733;&#9733;&#9733;&#9734;</i>
              <a id="link" href="#Main">
                &nbsp;38,523 ratings | 836 answered questions
              </a>
              <details>
                <summary></summary>
                <img
                  id="cpt4"
                  src="Capture4.PNG"
                  height="250"
                  width="250"
                  alt=""
                />
              </details>
            </i>
          </div>
        </div>
        <hr />
        <div className="Smiddlepart">
          <p>
            24% <b>{item.price}</b>
          </p>
          <i>
            List Price:<del> $119.00</del>
          </i>
        </div>
        <div className="card-body">
          <p className="card-text">
            $95.56 Shipping & Import Fees Deposit to Turkey Details
            <br />
            Available at a lower price from{" "}
            <a href="#Main" className="link">
              {" "}
              other sellers
            </a>{" "}
            that may not offer free Prime shipping.
          </p>
          <hr />
          <div className="card-section">
            <h2 className="card-section-title">Color:{item.color}</h2>
            <div className="card-images">
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 1"
                />
                <label className="card-image-text">$86.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 2"
                />
                <label className="card-image-text">$54.33</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 3"
                />
                <label className="card-image-text">$62.35</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 4"
                />
                <label className="card-image-text">$86.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 5"
                />
                <label className="card-image-text">$95.00</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 6"
                />
                <label className="card-image-text">72.11</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 7"
                />
                <label className="card-image-text">$91.20</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 8"
                />
                <label className="card-image-text">$48.63</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 9"
                />
                <label className="card-image-text">$38.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 10"
                />
                <label className="card-image-text">$85.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 11"
                />
                <label className="card-image-text">$59.33</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 12"
                />
                <label className="card-image-text">$78.00</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 13"
                />
                <label className="card-image-text">$68.10</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 14"
                />
                <label className="card-image-text">$32.51</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 15"
                />
                <label className="card-image-text">$73.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 16"
                />
                <label className="card-image-text">$99.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 17"
                />
                <label className="card-image-text">$86.99</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 18"
                />
                <label className="card-image-text">$91.35</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 19"
                />
                <label className="card-image-text">$40.51</label>
              </div>
              <div className="card-image">
                <img
                  src={item.image}
                  alt="Image 20"
                />
                <label className="card-image-text">$100.05</label>
              </div>
            </div>
            <a href="#Main" className="clink">
              See all 22 options &rarr;
            </a>
          </div>
          <hr />
          <div className="card-section">
            <ul className="card-list">
              <li>&#8226;&nbsp;&nbsp;Imported</li>
              <li>
                {item.About[0].first}
              </li>
              <li>
               { item.About[0].second}
              </li>
              <li>
              { item.About[0].third}
              </li>
              <li>
              { item.About[0].fourth}
              </li>
              <li>
              { item.About[0].fifth}
              </li>
              <li>
              { item.About[0].sixth}
              </li>
            </ul>
            <hr />
            <a href="#Main" className="card-link">
              See product specifications &rarr;
            </a>
          </div>
        </div>
      </div>
      <div />
      <div className="card">
        <div className="price">$89.90 </div>
        <div className="description">
          <p>
            $95.56 Shipping & Import Fees <br />
            Deposit to Turkey
            <a href="#Main" className="more-info">
              Details&#x25BC;<i className="fas fa-angle-down"></i>
            </a>
            <br />
            $14.51 delivery
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
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buy-now">Buy Now</button>
        <a href="#Main" className="secure">
          &#128274; Secure transaction{" "}
        </a>
        <p>
          ships from &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Amazon</b>
        </p>
        <p>
          Sold
          by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#Main" className="watch">
            Watchsavings
          </a>
        </p>
        <p>
          Return policy:
          <a href="#Main" className="secure">
            Eligible for <br />
            Return, Refund or Replacement
            <br />
            within 30 days of receipt
          </a>
          &#x25BC;
        </p>
        <label>
          <input type="checkbox" name="checkbox1" value="checkbox1" /> Add a
          gift receipt for easy <br />
          returns
        </label>
        <hr />
        <a
          href="https://example.com/add-to-list"
          className="add-to-list-button"
        >
          Add to list
        </a>
      </div>  
    </section>
  );
}

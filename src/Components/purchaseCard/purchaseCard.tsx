import React, { useState,useEffect } from "react";
import "./PurchaseCard.css";

interface Item {
  image: string;
  productname: string;
  price: string;
  aboutthisitem: string;
  productid:number;
}

interface PurchaseCardProps {
  item: Item;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(()=>{
    console.log(item);

  },[])
  const handleChangeQuantity = (event) => {
    const { value } = event.target;
    setQuantity(Number(value));
  };

  const calculateSubtotal = () => {
    return item.price * quantity;
  };

  const handleAddToCart = () => {
    const itemToAdd: Item = { ...item };
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push(itemToAdd);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <section className="mainpage-content">
      <div className="smallimages">
        <button id="firstimg">
          <img src={item.image} alt="img" width="50" height="50" />
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
          <h2 className="text" id="h2itemname">
            {item.productname}
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
          <i className="list-price">
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
            <h2 className="card-section-title">Color: red</h2>
            <div className="card-images">
              <div className="card-image">
                <img src={item.image} alt="Image 1" />
                <label className="card-image-text">$86.99</label>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Image 2" />
                <label className="card-image-text">$54.33</label>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Image 3" />

                <label className="card-image-text">$62.35</label>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Image 4" />
                <label className="card-image-text">$86.99</label>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Image 5" />
                <label className="card-image-text">$95.00</label>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Image 6" />
                <label className="card-image-text">72.11</label>
              </div>
            </div>
            <a href="#Main" className="clink">
              See all options &rarr;
            </a>
          </div>
          <hr />
          <div className="card-section">
            <ul className="card-list">
              <li>&#8226;&nbsp;&nbsp;Imported</li>
              <li>{item.aboutthisitem}</li>

            </ul>
            <hr />
            <a href="#Main" className="card-link">
              See product specifications &rarr;
            </a>
          </div>
        </div>
      </div>
      <div />
      <div className="left-card">
        <div className="price">${calculateSubtotal()} </div>
        <div className="description">
          <p>
            Shipping & Import Fees <br />
            Deposit to Turkey
            <a href="#Main" className="more-info">
              Details&#x25BC;<i className="fas fa-angle-down"></i>
            </a>
            <br />
          </p>
        </div>
        <div className="location">
          <a className="secure">&#x1F4CD;Deliver to Turkey</a>
        </div>
        <div className="stock">In Stock</div>
        {/* <div className="quantity">
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
        </div> */}
        <div className="quantity">
          <select
            name="quantity"
            tabIndex="0"
            className="quantity-dropdown-menu dropdown-toggle"
            type="number"
            min="1"
            value={quantity}
            onChange={handleChangeQuantity}
          >
            Qty:
            <option value="0">0 (Delete)</option>
            <option value="1" selected="">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </select>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button className="buy-now">
          <a href="/cart" id="button-link">
            Buy Now
          </a>
        </button>
        <a href="#Main" className="secure">
          &#128274; Secure transaction{" "}
        </a>
        <p>
          ships from &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Amazon</b>
        </p>
        <p>
          Sold by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&
          nbsp;&nbsp;&nbsp;&nbsp;
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
};

export default PurchaseCard;

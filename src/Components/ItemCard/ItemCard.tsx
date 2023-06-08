import React, { useState } from "react";
import "../ItemCard/ItemCard.css";

interface CartItem {
  image: string;
  description: string;
  price: number;
  quantity: number;
}

const CartItem = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    const item: CartItem = {
      image: "https://m.media-amazon.com/images/I/61bBZe-hCrL._AC_UX675_.jpg",
      description: "Skechers Women's D'Lites Fresh Start Fashion Sneaker",
      price: 49.99,
      quantity: quantity,
    };
    setCartItems([...cartItems, item]);
  };

  const handleChangeQuantity = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const calculateSubtotal = () => {
    return price * quantity;
  };

  const { image, description, price } = {
    image: "https://m.media-amazon.com/images/I/61bBZe-hCrL._AC_UX675_.jpg",
    description: "Skechers Women's D'Lites Fresh Start Fashion Sneaker",
    price: 49.99,
  };

  return (
    <div className="item-wrap">
      <div className="item-and-checkout">
        <div className="cart-item">
          <div className="-row">
            <div className="title">Shopping Cart</div>
            <div className="price">Price</div>
          </div>
          <hr></hr>
          <div className="-row">
            <img src={image} alt="" className="item-image" />
            <div className="item-details">
              <div className="item-description">
              <p>{description}</p>
              <p>In Stock</p>
              <p className="body-text">
                <label className="body-text">
                  <input type="checkbox" name="" value="" className="body-text" />
                  <span className="body-text">
                    This is a gift
                    <span className="body-text">
                      <a href="#">&nbsp;Learn more</a>
                    </span>
                  </span>
                </label>
              </p>
              </div>
              
              <div className="quantity">
                <select
                  name="quantity"
                  tabindex="0"
                  className="quantity-dropdown-menu"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleChangeQuantity}
                >
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
            </div>
            <div className="item-price">{price}</div>
          </div>
          <div className="-row-rem">
            <div className="subtotal">Subtotal ({quantity} Items): <span className="subtotal-amount"> {calculateSubtotal()}</span>
            </div>
          </div>
          <hr />
        </div>

        <div className="policy">
          <div className="checkout">
            <div className="subtotal">Subtotal ({quantity} Items):
              <span className="subtotal-amount">
                {calculateSubtotal()}
              </span>
            </div>
            <div>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">This order contains a gift</label>
            </div>
            <button id="checkout-button">Proceed to checkout</button>
          </div>
        </div>

      </div>
      <div style={{height:'60px',width:'73%', background:'white', marginTop:'20px', marginBottom:'40px'}}>
      </div>
        <p className="bottom-paragraph">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. <a href="/">Learn more</a>
          <br /> Do you have a gift card or promotional code? We'll ask you to
          enter your claim code when it's time to pay.
        </p>
        
    </div>
    
  );
};

export default CartItem;

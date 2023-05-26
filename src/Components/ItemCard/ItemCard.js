import React, { useState } from "react";
import "../ItemCard/ItemCard.css";
import FirstFooter from '../FirstFooter/FirstFooter'


const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const calculateSubtotal = () => {
    return price * quantity;
  };

  const image =
    "https://m.media-amazon.com/images/I/61I8BjnzubL.__AC_SX300_SY300_QL70_FMwebp_.jpg";
  const description =
    "UHURU Wireless Gaming Mouse Up to 10000 DPI, Rechargeable USB Wireless Mouse with 6 Buttons 7 Changeable LED Color...";
  const price = 9.99;

  return (
    <div className="item-wrap">
{/* <FirstHeader/> */}
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
              <div className="item-description">{description}</div>

              <div>
              <p>In Stock</p>
              <p class="body-text">
                <label class="body-text">
                  <input type="checkbox" name="" value="" class="body-text" />
                  <span class="body-text">
                    This is a gift
                    <span class="body-text">
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
          <div className="-row" style={{marginLeft:"35rem"}}>
            <div className="subtotal">Subtotal ({quantity} Items): <span className="subtotal-amount"> {calculateSubtotal()}</span></div>
          </div>
          <hr />
        </div>

        <div class="policy">
          <div class="checkout">
            <p>
              Subtotal (1 item): <b>$89.90</b>
            </p>
            <input type="checkbox" id="gift" />
            <label for="gift">This order contains a gift</label>
            <input
              type="button"
              id="checkout-button"
              value="Proceed to checkout"
            />
          </div>
        </div>

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

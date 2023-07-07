import React, { useState } from "react";
import "../App.css";
import FirstHeader from "../Components/FirstHeader/FirstHeader.tsx";
import CartItemCard from "../Components/ItemCard/ItemCard.tsx";
import FirstFooter from "../Components/FirstFooter/FirstFooter.tsx";
import EndFooter from "../Components/EndFooter/EndFooter.tsx";
import { SecondHeader } from "../Components/SecondHeader/SecondHeader.tsx";
import "../Components/ItemCard/ItemCard.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number; // Added quantity property
}

interface CartPageProps {
  CartItems: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({
  CartItems, // Corrected the destructured prop name
}: CartPageProps): JSX.Element => {
  // const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  const handleRemoveItem = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleChangeQuantity = (itemId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  };

  return (
    <div id="Main" className="App">
      <FirstHeader />
      <SecondHeader />
      <div className="item-wrap">
        <div className="-row"></div>
        <div className="item-and-checkout">
          <div className="cart-item">
            <div className="-row">
              <div className="title">Shopping Cart</div>
              {/* <div className="price">Price</div> */}
            </div>
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
            {cartItems.length === 0 ? (
              <div>No Items</div>
            ) : (
              cartItems.map((item: CartItem, index: number) => (
                <CartItemCard
                  key={index}
                  item={item}
                  onRemoveItem={handleRemoveItem}
                />
              ))
            )}
          </div>
          <div className="policy">
            <div className="checkout">
              <div className="subtotal">
                Subtotal ({cartItems.length} Items):{" "}
                <span className="subtotal-amount">{calculateSubtotal()}</span>
              </div>
              <div>
                <input type="checkbox" id="gift" />
                <label htmlFor="gift">This order contains a gift</label>
              </div>
              <button id="checkout-button">Proceed to checkout</button>
            </div>
          </div>
          <div
            style={{
              height: '60px',
              width: '73%',
              background: 'white',
              marginTop: '20px',
              marginBottom: '40px',
            }}
          ></div>
          <p className="bottom-paragraph">
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price.{" "}
            <a href="/">Learn more</a>
            <br /> Do you have a gift card or promotional code? We'll ask you to
            enter your claim code when it's time to pay.
          </p>
        </div>
      </div>
      <FirstFooter />
      <EndFooter />
    </div>
  );
};

export default CartPage;

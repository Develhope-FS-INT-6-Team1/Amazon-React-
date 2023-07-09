import React, { useEffect, useState } from "react";
import "../ItemCard/ItemCard.css";

interface CartItem {
  image: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
  onRemoveItem: (itemId: number) => void;
  //onChangeQuantity: (quantity: number) => void; 
  cartItems: any;
  setCartItems:any;
  key:number;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ key,item, onRemoveItem,cartItems,setCartItems }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(()=>{
    console.log("BEFORE",cartItems);
 
    let newTempItems: any[] = [];
    for(let i = 0 ; i < cartItems.length;i++){
      let temp = cartItems[i];
      temp.quantity = 0;
      newTempItems.push(temp);
    }
    console.log("LATER",newTempItems);
    setCartItems(newTempItems);

  },[])

  const handleChangeQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setQuantity(Number(value));
    console.log("BEFORE",cartItems);
 
    let newTempItems: any[] = [];
    for(let i = 0 ; i < cartItems.length;i++){
      let temp = cartItems[i];
      console.log(item, temp, "HOLAAAA");
      if(temp.productid == item.productid){
        temp.quantity = Number(value);
      }
      newTempItems.push(temp);
    } 
    console.log("LATER",newTempItems);
    setCartItems(newTempItems);




  };

  const calculateSubtotal = () => {
    return item.price * quantity;
  };

  const handleRemoveItem = () => {
    onRemoveItem(item.productid);
  };

  return (
    <div className="cart-holder">
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
      <img src={item.image} alt="" className="item-image" />
      <div className="item-details">
        <div className="item-description">
          <p>{item.description}</p>
          <div className="item-price">{item.price}</div>
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
            <option value="0">0 </option>
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
            <option value="10">10</option>
          </select>

          <p className="cart-links">
            <a onClick={handleRemoveItem}>Delete</a> &nbsp; &nbsp; &nbsp;
            <span>|</span> &nbsp;
            <a href="#">Save for later</a> &nbsp; &nbsp; &nbsp;
            <span> | </span> &nbsp; 
            <a href="#">Compare with similar items</a> &nbsp; &nbsp; &nbsp;
            <span> | </span> &nbsp; 
            <a href="#">Share</a> &nbsp; &nbsp; &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

import React, {useState} from 'react';
import '../App.css';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import CartItemCard from '../Components/ItemCard/ItemCard.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartPageProps {
  CartItems: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ CartItems }: CartPageProps): JSX.Element => {
  // const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const [cartItems, setCartItems] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'));


  const handleRemoveItem = (itemId: number) => {
    // Remove the item from the cartItems array
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  
    // Update the cartItems in local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    // Update the state or perform any additional logic as needed
    // For example, if you are using state to manage the cartItems:
    setCartItems(updatedCartItems);
  };
  

  return (
    <div id="Main" className="App">
      <FirstHeader />
      <SecondHeader />
      {cartItems.length === 0 ? (
        <div>No Items</div>
      ) : (
        cartItems.map((item: CartItem, index: number) => (
          <CartItemCard key={index} item={item} onRemoveItem={handleRemoveItem}/>
        ))
      )}
      <FirstFooter />
      <EndFooter />
    </div>
  );
}

export default CartPage;

import '../App.css';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import CartItemCard from '../Components/ItemCard/ItemCard.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx'
import { SecondHeader } from '../Components/SecondHeader/SecondHeader';


function CartPage({CartItems}) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <SecondHeader/>
      {cartItems.length === 0 ? (
        <div>No Items</div>
      ) : (
        cartItems.map((item: any, index: number) => (
          <CartItemCard key={index} item={item} />
        ))
      )}
      <FirstFooter/>
      <EndFooter/>
    </div>
  );
}

export default CartPage;

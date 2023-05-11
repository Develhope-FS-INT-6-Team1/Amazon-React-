import '../App.css';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import CartItem from '../Components/ItemCard/ItemCard';


function CartPage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <CartItem/>
    </div>
  );
}

export default CartPage;

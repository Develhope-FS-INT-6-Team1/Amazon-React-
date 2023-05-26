import '../App.css';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import CartItem from '../Components/ItemCard/ItemCard';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import EndFooter from '../Components/endFooter/EndFooter'


function CartPage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <CartItem/>
      <FirstFooter/>
      <EndFooter/>
    </div>
  );
}

export default CartPage;

import '../App.css';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import CartItem from '../Components/ItemCard/ItemCard.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import EndFooter from '../Components/EndFooter/EndFooter'
import { SecondHeader } from '../Components/SecondHeader/SecondHeader';


function CartPage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <SecondHeader/>
      <CartItem/>
      <FirstFooter/>
      <EndFooter/>
    </div>
  );
}

export default CartPage;

import '../App.css';
import { FirstHeader } from '../Components/FirstHeader/FirstHeader';
import ItemCard from '../Components/ItemCard/ItemCard';


function PurchasePage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <ItemCard/>
    </div>
  );
}

export default PurchasePage;

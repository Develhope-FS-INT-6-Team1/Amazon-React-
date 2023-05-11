import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import EndFooter from '../Components/endFooter/EndFooter';
import PurchaseCard from '../Components/PurchaseCard/PurchaseCard';



function PurchasePage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <PurchaseCard/>
      <FirstFooter/>
      <EndFooter/>
    </div>
  );
}


export default PurchasePage;

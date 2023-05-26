import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import EndFooter from '../Components/EndFooter/EndFooter';
import PurchaseCard from '../Components/PurchaseCard/PurchaseCard';
import './PurchasePage.css'



function PurchasePage() {
  return (
    <div id="Main">
      <div className="wrapper-header1">
        <FirstHeader/>
        <div className="content-pcard">
          <PurchaseCard/>
        </div>
      </div>
      <div className="footer-container-pp">
        <FirstFooter/>
        <EndFooter/>
      </div>
    </div>
  );
}


export default PurchasePage;

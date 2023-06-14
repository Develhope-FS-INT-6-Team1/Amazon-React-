import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import PurchaseCard from '../Components/PurchaseCard/PurchaseCard';
import './PurchasePage.css'



function PurchasePage() {
  return (
    <div id="Main">
      <div className="wrapper-header1">
        <FirstHeader/>
      </div>
        <div className="content-pcard">
          <PurchaseCard/>
        </div>
      <div className="footer-container-pp">
        <FirstFooter/>
        <EndFooter/>
      </div>
    </div>
  );
}


export default PurchasePage;

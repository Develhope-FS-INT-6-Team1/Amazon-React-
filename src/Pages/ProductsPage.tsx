import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';
import Products from '../Components/Products/Products.tsx';

function ProductPage() {


    return (
        <div id="Main" className="App">
          <FirstHeader />
          <SecondHeader />
          <Products/>
          <FirstFooter />
          <EndFooter />
        </div>
      );
}

export default ProductPage;
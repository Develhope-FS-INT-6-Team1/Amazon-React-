import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import CartsMiddlePart from '../Components/CartsMiddlePart/CartsMiddlePart';
import EndFooter from '../Components/endFooter/EndFooter';

function HomePage() {
  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <CartsMiddlePart />
      <FirstFooter/>
      <EndFooter/>
      
    </div>
  );
}

export default HomePage;

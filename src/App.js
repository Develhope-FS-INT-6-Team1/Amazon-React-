import './App.css';
import FirstFooter from './Components/FirstFooter/FirstFooter';
import { FirstHeader } from './Components/FirstHeader/FirstHeader';
import CartsMiddlePart from './Components/CartsMiddlePart/CartsMiddlePart';

function App() {
  return (
    <div className="App">
      <FirstHeader/>
      <CartsMiddlePart />
      <FirstFooter/>
      
    </div>
  );
}

export default App;

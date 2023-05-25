import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import CartsMiddlePart from '../Components/CartsMiddlePart/CartsMiddlePart';
import EndFooter from '../Components/EndFooter/EndFooter';
import { useState } from 'react';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader';



function HomePage() {
  const [userid, setUserid] = useState('');

  return (
    <div id="Main" className="App">
      <FirstHeader/>
      <SecondHeader/>
      <CartsMiddlePart />
      <FirstFooter/>
      <EndFooter/>
      
    </div>
  );
}

export default HomePage;

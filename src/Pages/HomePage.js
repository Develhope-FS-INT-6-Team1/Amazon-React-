import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter';
import FirstHeader from '../Components/FirstHeader/FirstHeader';
import CartsMiddlePart from '../Components/CartsMiddlePart/CartsMiddlePart';
import EndFooter from '../Components/endFooter/EndFooter';
import { useEffect, useState } from 'react';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader';




function HomePage() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [preferedLanguage, setPreferedLanguage] = useState('');
  const [preferedCurrency, setPreferedCurrency] = useState('');


  useEffect(()=> {
    const fetchUserData = async () => {
      try {
        const response = await fetch('../Users.json');
        const userData = await response.json();

        const user = userData.find((user) => user.id === userId);

        if (user) {
          setUserName(user.userName);
          setPreferedLanguage(user.preferedLanguage);
          setPreferedCurrency(user.preferedCurrency);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  return (
    <div id="Main" className="App">
      <FirstHeader
        username={userName}
        preferredLanguage={preferedLanguage}
        preferredCurrency={preferedCurrency} />
      <SecondHeader/>
      <CartsMiddlePart />
      <FirstFooter/>
      <EndFooter/>
      
    </div>
  );
}

export default HomePage;

import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import CartsMiddlePart from '../Components/CartsMiddlePart/CartsMiddlePart.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { useEffect, useState } from 'react';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';
import userJson from '../Users.json';

interface User {
  userID: string;
  userName: string;
  preferedLanguage: string;
  preferedCurrency: string;
}

function HomePage() {
  const [userId, setUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [preferedLanguage, setPreferedLanguage] = useState<string>('');
  const [preferedCurrency, setPreferedCurrency] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const value = await localStorage.getItem('userId');
        const value1 = await localStorage.getItem('username');
        const value2 = await localStorage.getItem('preferedLanguage');
        const value3 = await localStorage.getItem('preferedCurrency');
        let boolValue = false;
        if (value !== null) {
          boolValue = true;
          console.log(value);
          setUserId(value);
        }


        if (boolValue) {
          console.log('User has logged in');
          if(value1 != null)
            setUserName(value1);
          if(value2 != null)
            setPreferedLanguage(value2);
          if(value3 != null)
            setPreferedCurrency(value3);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div id="Main" className="App">
      <FirstHeader />
      <SecondHeader />
      <CartsMiddlePart />
      <FirstFooter />
      <EndFooter />
    </div>
  );
}

export default HomePage;

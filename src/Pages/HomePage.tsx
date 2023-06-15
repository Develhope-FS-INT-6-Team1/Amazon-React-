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
        if (value !== null) {
          console.log(value);
          setUserId(value);
        }

        const user = userJson.find((user: User) => user.userID === userId);
        if (user) {
          console.log('User has logged in');
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
      <FirstHeader />
      <SecondHeader />
      <CartsMiddlePart />
      <FirstFooter />
      <EndFooter />
    </div>
  );
}

export default HomePage;

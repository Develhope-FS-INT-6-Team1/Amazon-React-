import React from 'react';
import '../App.css';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';
import AccountDetails from '../Components/Account/AccountDetails.tsx';

export default function AccountDetailsPage(){
  return (
    <div id="Main" className="App">

      <FirstHeader />
          <SecondHeader />
           <AccountDetails/>
          <FirstFooter />
          <EndFooter />
    </div>
  );
}

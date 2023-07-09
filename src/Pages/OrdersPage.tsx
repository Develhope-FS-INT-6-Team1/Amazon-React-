import React from 'react';
import '../App.css';
import { Account } from '../Components/Account/Account.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';
import { Orders } from '../Components/Orders/Orders.tsx';

export function OrdersPage(){
  return (
    <div id="Main" className="App">

      <FirstHeader />
          <SecondHeader />
           <Orders/>
          <FirstFooter />
          <EndFooter />
    </div>
  );
}


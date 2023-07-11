import React from 'react';
import '../App.css';
import { Address } from '../Components/Address/Address.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';

export function AddressPage(){
  return (
    <div id="Main" className="App">

      <FirstHeader />
          <SecondHeader />
           <Address/>
          <FirstFooter />
          <EndFooter />
    </div>
  );
}


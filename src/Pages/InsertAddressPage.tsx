import React from 'react';
import '../App.css';
import { Address } from '../Components/Address/Address.tsx';
import FirstFooter from '../Components/FirstFooter/FirstFooter.tsx';
import FirstHeader from '../Components/FirstHeader/FirstHeader.tsx';
import EndFooter from '../Components/EndFooter/EndFooter.tsx';
import { SecondHeader } from '../Components/SecondHeader/SecondHeader.tsx';
import { InsertAddress } from '../Components/Address/InsertAddress.tsx';

export function InsertAddressPage(){
  return (
    <div id="Main" className="App">

      <FirstHeader />
          <SecondHeader />
           <InsertAddress/>
          <FirstFooter />
          <EndFooter />
    </div>
  );
}


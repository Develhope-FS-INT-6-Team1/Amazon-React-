import './App.css';
import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.tsx';
import PurchasePage from './Pages/PurchasePage.tsx';
import { SignInPage } from './Pages/SignInPage.tsx';
import { SignUpPage } from './Pages/SignUpPage.tsx';
import CartPage from './Pages/CartPage.tsx';
import { SignInPage2 } from './Pages/SignInPage2.tsx';
import ProductPage from './Pages/ProductsPage.tsx';
import { AccountPage } from './Pages/AccountPage.tsx';
import {OrdersPage} from './Pages/OrdersPage.tsx'
import AccountDetailsPage from './Pages/AccountDetailsPage.tsx';
import { AddressPage } from './Pages/AddressPage.tsx';
import { InsertAddressPage } from './Pages/InsertAddressPage.tsx';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purchase/:id" element={<PurchasePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin2" element={<SignInPage2 />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/insertaddress" element={<InsertAddressPage />} />
          <Route path="/account-details" element={<AccountDetailsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<CartPage CartItems={[]}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

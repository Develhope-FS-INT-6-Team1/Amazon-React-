import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import { SignInPage } from './Pages/SignInPage';
import { SignUpPage } from './Pages/SignUpPage';
import CartPage from './Pages/CartPage';
import { SignInPage2 } from './Pages/SignInPage2';

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
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

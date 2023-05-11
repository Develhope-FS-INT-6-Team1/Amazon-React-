import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PurchasePage from './Pages/PurchasePage';
import { SignInPage } from './Pages/SignInPage';
import { SignUpPage } from './Pages/SignUpPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purchase" element={<PurchasePage />} />
<<<<<<< HEAD
=======
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
>>>>>>> c82438ed1fd672622bb34b84ecb41d2750a64f21
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PurchasePage from './Pages/PurchasePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purchase" element={<PurchasePage />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

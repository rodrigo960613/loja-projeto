import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductListingPage from './components/pages/ProductListingPage';
import ProductViewPage from './components/pages/ProductViewPage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/detalhes" element={<ProductViewPage />} />
      </Routes>
    </Router>
    
  );
};

export default App;

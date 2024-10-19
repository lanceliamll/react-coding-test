import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Me from './pages/Me';
import MyCoupons from './pages/MyCoupons';
import Navigation from './components/Navigation';
import './App.css'
import SeeAll from './pages/SeeAll';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/see-all" element={<SeeAll />} />
          <Route path="/my-coupons" element={<MyCoupons />} />
          <Route path="/me" element={<Me />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;

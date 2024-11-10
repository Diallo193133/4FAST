import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Food from './components/user_views/Food';
import Drink from './components/user_views/Drink';
import Dessert from './components/user_views/Dessert';

function App() {

  useEffect(()=>{
    console.log(import.meta.env.VITE_API_URL)
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/dessert" element={<Dessert />} /> 
      </Routes>
    </Router>
  );
}

export default App;

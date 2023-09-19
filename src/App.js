import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // Додайте Routes та Route

import Login from './components/Login';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>

      
    </Router>
    
  );
}

export default App;
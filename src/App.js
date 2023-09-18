import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // Додайте Routes та Route

import NavBar from './NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
  
        <NavBar /> {/* Викликаємо навігаційну панель */}
        <div><p className="text-center">Вітаю шановний користувач</p>
      <p>Це головна сторінка сайту пройдіть реєстрацію або залогінтесь</p>
    </div>



      <Routes>
      <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      
      <Switch>
         
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
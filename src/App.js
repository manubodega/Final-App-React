import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Router, NavLink } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import axios from 'axios';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {

  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <Router>
        <div>
          <div className="header">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link><small></small>
            {localStorage.getItem("isAuth" === "true" && (
              <li>
                <Link to="/dashboard">Pokedex</Link><small>(Acceso privado)</small>
              </li>
            ))}
            <Link to="/dashboard">Pokedex</Link><small>(Acceso privado)</small>
           
           
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              {/* <Route exct path='dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/> */}
              
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
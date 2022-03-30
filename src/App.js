import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Router, NavLink } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import axios from 'axios';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import UserList from './Components/UserList/UserList';
import LoginForm from './Components/LoginForm/LoginForm';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';


import { Provider } from 'react-redux';
import store from './store';
import ThemeContext, {themes} from './Utils/Context';


function App() {

  //Definimos el estado inicial de nuestro Theme
  const [theme, setTheme] = useState(themes.light);

  //Usamos setTheme para hacer el cambio del theme validando si el theme actual es dark o light y devolviendo el valor que corresponda a la validación.
  const handleChangeTheme = () => {
    // console.log(theme);
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

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

    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>

      <Provider store={store}>
        <Router>
          <div>
            <div className="header">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link><small></small>
              {localStorage.getItem("isAuth" === "true" && (
                <li>
                  {/* <Link to="/dashboard">Pokedex</Link><small>(Acceso privado)</small> */}
                  {/* <Link to="/userList">User List</Link><small>(Acceso privado)</small> */}
                </li>
              ))}
              <Link to="/dashboard">Pokedex</Link><small>(Acceso privado)</small>
              <Link to="/userList">Members</Link><small>(Acceso privado)</small>
              <Link to="/userForm">Register</Link>
            
            
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/userForm" element={<LoginForm/>} />
                {/* <Route path='dashboard' element={<PrivateRoute component={Dashboard}/>}/> */}
                
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/userList" element={<UserList/>} />
              </Routes>
            </div>
          </div>
        </Router>
        {/* <UserList /> */}
      </Provider>

    </ThemeContext.Provider>
    </div>
  );
}

export default App;
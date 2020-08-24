import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile'
import RoleSelection from './pages/RoleSelection';
import CreatorRegister from './pages/CreatorRegister';
import Register from './pages/Register';
import PasswordRetrieval from './pages/PasswordRetrieval';
import Footer from './components/Footer'
import UserProvider, {UserContext} from './providers/UserProvider'
import Application from './pages/Application'


function App() {
  const user = useContext(UserContext)
  //useEffect(console.log('<App /> mounted') ,[])

  return (
    <UserProvider>
      <Application />
    </UserProvider>

  );
}

export default App;

import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Main from './Main';
import About from './About';
import Login from './Login';
import Profile from './Profile'
import RoleSelection from './RoleSelection';
import CreatorRegister from './CreatorRegister';
import Register from './Register';
import PasswordRetrieval from './PasswordRetrieval';
import Footer from '../components/Footer'
import UserProvider, {UserContext} from '../providers/UserProvider'


function Application() {
  const user = useContext(UserContext)
  return (
      <BrowserRouter>
        <div className="Application">
          <NavigationBar/>
          <Route exact path='/' component = { Main }/>
          <Route exact path='/Profile' component = { Profile }/>
          <Route path='/About' component = { About }/>
          <Route path='/Login' component = { Login }/>
          <Route path='/RoleSelection' component = { RoleSelection }/>
          <Route path='/CreatorRegister' component = { CreatorRegister }/>
          <Route path='/PasswordRetrieval' component = { PasswordRetrieval }/>
          <Footer />
        </div>
      </BrowserRouter>

  );
}

export default Application;

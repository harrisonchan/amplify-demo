import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';
import RoleSelection from './pages/RoleSelection';
import CreatorRegister from './pages/CreatorRegister';
import Register from './pages/Register';
import PasswordRetrieval from './pages/PasswordRetrieval';
import Footer from './components/Footer'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Route exact path='/' component = { Main }/>
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

export default App;

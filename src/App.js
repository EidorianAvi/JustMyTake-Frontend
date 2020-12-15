import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/Home/HomePage';
import MyTakes from './components/MyTakes/MyTakes';
import Profile from './components/Profile/Profile';
import Footer from './components/Shared/Footer';
import LoginRoot from './components/Login/LoginRoot';

class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={HomePage}/>
          <Route path="/my-takes" component={MyTakes}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={LoginRoot} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

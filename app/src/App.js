import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import SubHeader from './SubHeader.js';
import MainBody from './MainBody.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <SubHeader/>
      <MainBody/>
      <Footer/>
      </div>
    );
  }
}

export default App;

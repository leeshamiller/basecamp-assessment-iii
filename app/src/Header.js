import React, { Component } from 'react';
import './App.css';
import './NavTab.js';
import NavTab from './NavTab.js';

class Header extends Component {
  render() {
    return (
      <header>
          <div>COMPANY</div>
          <NavTab/>
      </header>
    );
  }
}

export default Header;
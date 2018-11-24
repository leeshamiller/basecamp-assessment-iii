import React, { Component } from 'react';
import './App.css';

class OrangeSquare extends Component {
  render() {
    return (
        <div>{this.props.number}</div>
    );
  }
}

export default OrangeSquare;
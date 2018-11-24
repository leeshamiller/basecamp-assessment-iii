import React, { Component } from 'react';
import './App.css';

class GreenBox extends Component {
  render() {
    return (
        <div>{this.props.number}</div>
    );
  }
}

export default GreenBox;
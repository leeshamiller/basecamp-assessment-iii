import React, { Component } from 'react';
import './App.css';

class Pic extends Component {
  render() {
    return (
        <div className="pic">
        <img src="puppy.JPG" alt="Cutest Picture Ever!">
        </img>
        </div>
    );
  };
};

export default Pic;
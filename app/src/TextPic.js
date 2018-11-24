import React, { Component } from 'react';
import './App.css';
import Text from './Text.js';
import Pic from './Pic.js';

class TextPic extends Component {
  render() {
    return (
        <div className="text-pic flex-between">
        <Text/>
        <Pic/>
        </div>
    );
  }
}

export default TextPic;
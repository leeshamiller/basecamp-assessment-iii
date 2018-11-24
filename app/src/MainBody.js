import React, { Component } from 'react';
import GreenBox from './GreenBox.js';
import './App.css';
import OrangeSquare from './OrangeSquare.js';
import TextPic from './TextPic.js';

class MainBody extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            greenSquareNum: []
        }
        // this.addGreenSquare = this.addGreenSquare.bind(this);
    }
    // addGreenSquare() {
    //     var tempArray = this.state.greenSquareNum;
    //     var tempNum = this.state.number;
    //     tempNum++;
    //     this.setState({
    //         number: tempNum
    //     })
    //     tempArray.push(this.state.number);
    //     this.setState({
    //         greenSquareNum: tempArray
    //     })
    //     console.log(this.state)
    // }

  render() {
    return (
        <div className="main-body">
            <div className="green-boxes flex-between">
            <GreenBox/>
            <GreenBox/>
            <GreenBox/>
            </div>
            {/* <button onClick={this.addGreenSquare}>add 1</button> */}
            
            <div className="orange-squares flex-between">
            <OrangeSquare/>
            <OrangeSquare/>
            </div>
           
           <TextPic/>
            </div>
    );
  }
}

export default MainBody;
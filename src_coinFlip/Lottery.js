import React, { Component } from "react";
import Coin from "./Coin";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Let's Flip A Coin",
    numCoins: 1,
    maxNum: 2,
  };


  state = { nums: Array.from({ length: this.props.numCoins }),
            counts:null,
            head: 0,
            tail:0
          };
   
  
  generate = () => {
    this.setState ({
      nums:  this.state.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    });
  }

  counter = () => {
    this.setState({
      counts:  this.state.counts + 1
    });
  };



  
  handleClick = () =>  {
    this.generate();
    this.counter();
  }
  render() {
    // console.log(this.state.counts)
    // console.log(this.state.nums)
    
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Coin 
            side={n} 
            head={n === 1 ? this.state.head = this.state.head +1 : this.state.head}
            tail={n === 2 ? this.state.tail = this.state.tail +1 : this.state.tail}
            count={this.state.counts}

            /> 
           ))}
        </div>
        <button onClick={this.handleClick}>Flip Mig</button>
      </section>
    );
  }
}

export default Lottery;

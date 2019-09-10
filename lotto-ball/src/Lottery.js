import React, { Component } from 'react';
import './Lottery.css';
import LottoBall from './LottoBall';

class Lottery extends Component {
    static defaultProps = {
        title:'Lotto', 
        numBalls: 6, 
        maxValue: 40
    }
    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls}) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(
                n =>  Math.floor(Math.random() * this.props.maxValue) + 1
            )
        }));
       
    }
   handleClick() {
    this.generate();
   }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="LotteryBalls">
                {this.state.nums.map(n => 
                (<LottoBall num={n} />
                ))}
                </div>
                <button className="LotteryButton" onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;
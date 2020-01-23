import React, { Component } from 'react'
import './App.css'
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didWin: false,
      number: 0
    }
  }
  handleNumber = () => {
    let rand = Math.floor(Math.random() * 10) + 1;
    if(rand === 7) {
      this.setState({number: rand, didWin: true})
    }
    else {
      this.setState({number: rand})
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Number is {this.state.number}</h1>
        {this.state.didWin? <h3>You WIN!!!</h3> : <button onClick={this.handleNumber}>Random Number</button>}
        {/* <Rando maxNum={7}/>
          <Button />
          <BrokenClick /> */}
      </div>
    )
  }
}

export default App

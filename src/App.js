import React, { Component } from 'react'
import Rando from './Rando';

export class App extends Component {
  render() {
    return (
      <div>
          <Rando maxNum={7}/>
      </div>
    )
  }
}

export default App

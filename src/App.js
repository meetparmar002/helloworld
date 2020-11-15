import React, { Component } from 'react';
import './App.css'
import Output from './components/Output'
import ValidationComp from './components/ValidationComp'
import CharComponent from './components/CharComponent'

class App extends Component {
  state = {
    string: 'A'
  }
  ipChangeHandler = (event) => {
    this.setState({
      string: event.target.value
    })
  }
  deleteCharHandler = (index) => {
    const text = this.state.string.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({
      string: updatedText 
    })
  }

  render() {
    let listOfChars = null
    if (this.state.string.length !== 0) {

      listOfChars = (
        <div>
          {
            this.state.string.split("").map((s, index) =>
              <CharComponent char={s}
                clicked={this.deleteCharHandler.bind(this, index)}
                key={index} />)
          }
        </div>
      )
    }
    return (
      <div className='App'>
        <input placeholder='Type something...' type="text"
          value={this.state.string}
          onChange={this.ipChangeHandler} /> <p></p>
        <Output length={this.state.string.length}></Output>
        <ValidationComp length={this.state.string.length} />
        {listOfChars}
      </div>
    )
  }
}

export default App
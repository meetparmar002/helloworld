import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment() {
        this.setState((prevState) => ({
            count:prevState.count+1
        }),)
        console.log(this.state.count);
    }
    incrementByFive() {
        for (let i = 0; i < 5; i++){
            this.increment()
        }
    }
    
    render() {
        return (
            <div>
                <h1>count = {this.state.count}</h1>
                <button onClick={()=>this.incrementByFive()}>Increment</button>
            </div>
        )
    }
}

export default Count

import React, { Component } from 'react'

class ClassClicked extends Component {

    handleClick() {
        console.log('button was clicked from class component');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Clk class</button>
            </div>
        )
    }
}

export default ClassClicked

import React from 'react'
import ReactDOM from 'react-dom'

function FunctionClicked() {
    function clickHandler() {
        console.log('Button was clicked');
    }
    return (
        <div>
            <h1 id='h1'>Click the below button</h1>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClicked

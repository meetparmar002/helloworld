import React from 'react'

export default function CharComponent(props) {
    const mystyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={mystyle} onClick={props.clicked}>
            {props.char}
        </div>
    )
}

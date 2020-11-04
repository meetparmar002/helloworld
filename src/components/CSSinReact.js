import React, { Component } from 'react'
import './MyStyle.css'
export default class CSSinReact extends Component {
    render() {
        let className = 'editorial'
        let inlineStyle = {
            fontSize: '5em',
            color: 'yellowgreen',
            border: '5px red solid',
            marginBottom: '5px'
        }
        return (
            <div>   
                <h1 style={inlineStyle} >Hello</h1>
                <h2 className={`${className} font-size`}>From Me</h2>
            </div>
        )
    }
}

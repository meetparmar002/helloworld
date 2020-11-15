import React from 'react'

export default function ValidationComp(props) {
    if (props.length === 0) {
        return null
    } else if (props.length < 5) {
        return <h5>Too short text...</h5>
    } else
        return <h4>Text long enough...</h4>
}

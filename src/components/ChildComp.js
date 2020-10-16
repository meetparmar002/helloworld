import React from 'react'

export default function ChildComp(props) {
    let childName=prompt('Enter child name: ')
    return (
        <div>
            <button onClick={()=>props.greet(childName)}>GreetParent</button>
        </div>
    )
}

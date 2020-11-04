import React from 'react'

export default function Person({ person }) {
    return (
        <div>
            <h2>{person.id}. I am {person.name}. I am {person.age} years old. My superhero name is {person.alias} from {person.universe}</h2>
        </div>
    )
}

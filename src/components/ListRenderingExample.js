import React, { Component } from 'react'
import Person from './Person'

export default class ListRenderingExample extends Component {
    render() {
        // let names = ['bruce', 'tony', 'steve'];
        // return (
        //     <div>
        //         {
        //             names.map(name => <h2>{name}</h2>)
        //         }
        //     </div>
        // )
        let persons = [
            {
                id: 1,
                name: 'Bruce Wayne',
                age: 30,
                alias: 'Batman',
                universe:'DC'
            },
            {
                id: 2,
                name: 'Steve Rogers',
                age: 150,
                alias: 'Captain America',
                universe: 'Marvel',
            },
            {
                id: 3,
                name: 'Tony Stark',
                age: 35,
                alias: 'Ironman',
                universe: 'Marvel',
            }
        ]
        return (
            <div>
                {
                    persons.map(person => <Person key={person.id} person={person} />)
                }
            </div>    
        )
    }
}

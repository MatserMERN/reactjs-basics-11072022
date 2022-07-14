import React from 'react'
import Person from './Person'

function NameListSix() {
    const persons = [
        {
            id:1,
            name: "Scott",
            age: 46,
            skill: 'ReactJS'
        },
        {
            id:2,
            name: "Adam",
            age: 44,
            skill: 'Angular'
        },
        {
            id:3,
            name: "Tuan",
            age: 42,
            skill: 'NodeJS'
        },
        {
            id:4,
            name: "Uma",
            age: 40,
            skill: 'Javascript'
        },
    ]

    return(
        <>
            <h1>Person List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(person => <Person key={person.id} data={person}/>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default NameListSix
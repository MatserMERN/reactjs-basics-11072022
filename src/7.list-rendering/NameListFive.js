import React from 'react'

function NameListFive() {
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
        <div>
            {
                persons.map(person => (
                    <ul key={person.id}>
                        <li>{person.name}</li>
                        <li>{person.age}</li>
                        <li>{person.skill}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default NameListFive
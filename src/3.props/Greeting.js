import React from 'react'

const Greeting = (props) => {
    console.log(props)
const {id, name, skill, isAdmin, department, batch, address, getMessage, sayHello, getDisplay, subjects, children} = props
  return (
    <div>
        <h2>Id : {id}</h2>
        <h2>Name : {name}</h2>
        <h2>Skill : {skill}</h2>
        <h2>IsAdmin : {isAdmin?"True": "False"}</h2>
        <h2>Department : {department? department: "Department details are not available"}</h2>
        <h2>Batch : {batch? batch: "Batch details are not available"}</h2>
        <h2>City : {address.city}</h2>
        <h2>GetMessage : {getMessage()}</h2>
        <h2>SayHello : {sayHello()}</h2>
        <h2>GetDisplay : {getDisplay()}</h2>
        <h2>Subjects: {subjects[0]}</h2>
        <h2>Child : {children}</h2>
    </div>
  )
}

export default Greeting
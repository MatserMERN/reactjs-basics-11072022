import React, {useState} from 'react'

function PropDrillingOne() {
    const [name, setName] = useState("Scott Desatnick")
  return (
    <div className="container">
        <h1>{`Hello ${name}`}</h1>
        <Component1 name={name}/>
    </div>
  )
}

function Component1 (props){
    return (
        <>
            <h1>Component One</h1>
            <Component2 name={props.name}/>
        </>
    )
}
function Component2 (props){
    return (
        <>
            <h1>Component Two</h1>
            <Component3 name={props.name}/>
        </>
    )
}
function Component3 (props){
    return (
        <>
            <h1>Component Three</h1>
            <Component4 name={props.name}/>
        </>
    )
}
function Component4 (props){
    return (
        <>
            <h1>Component Four</h1>
            <h2>{`Hello ${props.name}`}</h2>
        </>
    )
}

export default PropDrillingOne
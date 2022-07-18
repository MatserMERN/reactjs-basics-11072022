import React, {useState, createContext, useContext} from 'react'

const UserContent = createContext()

function PropDrillingTwo() {
    const [name, setName] = useState("Scott Desatnick")
  return (
    <UserContent.Provider value={name}>
        <div className="container">
            <h1>{`Hello ${name}`}</h1>
            <Component1/>
        </div>
    </UserContent.Provider>

  )
}

function Component1 (){
    return (
        <>
            <h1>Component One</h1>
            <Component2 />
        </>
    )
}
function Component2 (){
    return (
        <>
            <h1>Component Two</h1>
            <Component3 />
        </>
    )
}
function Component3 (){
    return (
        <>
            <h1>Component Three</h1>
            <Component4 />
        </>
    )
}
function Component4 (){
    const name = useContext(UserContent)
    return (
        <>
            <h1>Component Four</h1>
            <h2>{`Hello ${name}`}</h2>
        </>
    )
}

export default PropDrillingTwo
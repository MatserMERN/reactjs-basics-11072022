import React , {useState} from 'react'

function HookUsingString() {
    const [name, setName] = useState("Scott Desatnick")
    
  return (
    <div className="container">
        <h1>Name: {name}</h1>
        <button className="btn btn-primary"
                onClick={() => setName("Great Scott")}
        >Set Name</button>
    </div>
  )
}

export default HookUsingString
import React, {useState} from 'react'

function FunctionCounter() {
    const [count, setCount] = useState(0)

    // function incrementCount(){
    //     setCount(count+1)
    // }
  return (
    // <div className="container">
    //     <h1>Count : {count}</h1>
    //     <button className="btn btn-primary" onClick={() => incrementCount()}>Add Count</button>
    // </div>
    <div className="container">
    <h1>Count : {count}</h1>
    <button className="btn btn-primary" onClick={() => setCount(count+1)}>Add Count</button>
</div>   
  )
}

export default FunctionCounter
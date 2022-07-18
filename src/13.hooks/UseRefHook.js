import React , { useRef }from 'react'

function UseRefHook() {
    const inputElement = useRef()
   
    const inputFocus = () => {
        inputElement.current.focus() 
    }
  return (
    <div className="container">
        <h1>Using useRef</h1>
        <input type="text" ref={inputElement} /> &ensp;
        <button className="btn btn-primary" onClick={inputFocus}>Focus</button>
    </div>
  )
}

export default UseRefHook
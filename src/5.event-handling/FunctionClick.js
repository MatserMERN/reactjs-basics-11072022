import React from 'react'

const FunctionClick = () => {

    function clickHandler(){
        console.log('button is clicked- function')
    }

  return (
    <div>
        <h1>Function Click</h1>
        <button className="btn btn-primary" onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
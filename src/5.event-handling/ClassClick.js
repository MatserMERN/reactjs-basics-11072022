import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('button is clicked - class')
    }
  render() {
    return (
      <div>
        <h1>Class Click</h1>
        <button className="btn btn-primary" onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick
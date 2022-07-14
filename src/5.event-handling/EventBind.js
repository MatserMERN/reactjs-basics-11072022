import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello"
        }

        //3rd way 
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     console.log(this)
    //     this.setState({
    //         message: "Thank you"
    //     })
    // }
    clickHandler = () =>{
        console.log(this)
        this.setState({
            message: "Thank you"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button> */}

        {/* 1st Way to fix  */}
        {/* <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Click Me</button> */}

        {/* 2nd Way to fix  */}
        {/* <button className="btn btn-primary" onClick={() =>this.clickHandler()}>Click Me</button>         */}

        {/* 3rd Way to fix  */}
        {/* <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button> */}

        {/* 4th Way to fix  */}
        <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
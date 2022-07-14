import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
              <h1>Welcome Scott</h1>
            </div>
          )
    } else {
        return (
            <div>
              <h1>Welcome Guest</h1>
            </div>
          )
    }
  }
}

export default UserGreeting
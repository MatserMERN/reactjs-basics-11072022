import React, { Component } from 'react'

class User extends Component {
    constructor(){
        super()

        this.state = {
            id: 1,
            name: "Scott",
            city: "Boston",
            isAdmin: true
        }
    }
  render() {
    const {id, name, city, isAdmin} = this.state
    return (
      <div>
        <h2>Id : {id}</h2>
        <h2>Name : {name}</h2>
        <h2>City : {city}</h2>
        <h2>IsAdmin : {isAdmin? "True": "False"}</h2>
      </div>
    )
  }
}

export default User
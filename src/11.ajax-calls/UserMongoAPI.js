import React, { Component } from 'react'
import Register from './Register'

export class UserMongoAPI extends Component {
    constructor(){
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount(){
      fetch("http://localhost:3001/api/users")
      .then(response => response.json())
      .then(data => this.setState({users: data}))
    }
  render() {
    return (
      <div  className="container">
        <h1>User List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserMongoAPI
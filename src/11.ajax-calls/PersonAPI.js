import React, { Component } from 'react'

export class PersonAPI extends Component {
    constructor(){
        super()

        this.state = {
            persons: []
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(response => this.setState({persons: response.data}))
    }

  render() {
    return (
      <div  className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                   this.state.persons.map(person => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.first_name}{person.last_name}</td>
                        <td>{person.email}</td>
                        <td>
                            <img src={person.avatar} alt={person.first_name} />
                        </td>
                    </tr>
                   )) 
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default PersonAPI
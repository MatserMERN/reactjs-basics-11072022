import React, { Component } from 'react'

export class StudentMongoAPI extends Component {
    constructor(){
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => this.setState({students: data}))
    }

    addStudent(){
        const postRequest = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }

        fetch("http://localhost:3001/api/students", postRequest)
        .then(response => response.json())
        .then(data => {
            this.clearFields()
            this.getStudents()
        })
    }

    clearFields(){
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    editStudent(student){
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city,
        })
    }

    updateStudent(){
        const putRequest = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }

        fetch(`http://localhost:3001/api/students/${this.state._id}`, putRequest)
        .then(() => {
            this.clearFields()
            this.getStudents()
        })
    }

    deleteStudent(studentId){

        fetch(`http://localhost:3001/api/students/${studentId}`, {method: "DELETE"})
        .then(() => this.getStudents())
    }

  render() {
    return (
      <div>
        <h1>Student List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input type="text" 
                               value={this.state.name} 
                               onChange={(event) => this.setState({name: event.target.value})} 
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.email} 
                               onChange={(event) => this.setState({email: event.target.value})} 
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.city} 
                               onChange={(event) => this.setState({city: event.target.value})} 
                        />
                    </th>
                    <th>
                        <button className="btn btn-primary"
                                onClick={() => this.addStudent()}
                        >Add</button>
                    </th>
                    <th>
                        <button className="btn btn-warning"
                                onClick={() => this.updateStudent()}
                        >Update</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                            <td>
                                <button className="btn btn-warning"
                                        onClick={() => this.editStudent(student)}
                                >Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                        onClick={() => this.deleteStudent(student._id)}
                                >Delete</button>
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

export default StudentMongoAPI
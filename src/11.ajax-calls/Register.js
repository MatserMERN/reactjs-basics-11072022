import React, { Component } from 'react'
import NavigateButton from '../12.routing/NavigationButton'
import { Navigate } from "react-router-dom"

export class Register extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: ''
        }

        
    }

    register() {

        const postRequest = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        }

        console.log(postRequest)
        fetch("http://localhost:3001/api/register", postRequest)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                if(data.isUserRegistered){
                    this.props.navigate("/success", {state: {message: data.message}})
                }
            })
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            className="form-control w-50"
                            value={this.state.username}
                            onChange={(event) => this.setState({username: event.target.value})}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email</label>
                        <input type="text"
                            className="form-control w-50"
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password</label>
                        <input type="password"
                            className="form-control w-50"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                        />
                    </div>
                    <br />

           
                    <div>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => this.register()}
                        >Register</button>
                        
                    </div> 
                </form>
            </div>
        )
    }
}

export default Register
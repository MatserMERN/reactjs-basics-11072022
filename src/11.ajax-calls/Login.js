import React, { Component } from 'react'
import NavigateButton from '../12.routing/NavigationButton'

export class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    login(){
        const postRequest = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }
        //console.log(postRequest)
        fetch("http://localhost:3001/api/login", postRequest)
        .then(response => response.json())
        .then(data => console.log(data))
    }
  render() {
    return (
      <div className="container">
            <div>
                <label>Username</label>
                <input type="text" 
                       className="form-control w-50" 
                       value={this.state.username}
                       onChange={(event) =>this.setState({username: event.target.value}) }
                />
            </div>
            <br />
            <div>
                <label>Password</label>
                <input type="password" 
                       className="form-control w-50" 
                       value={this.state.password}
                       onChange={(event) =>this.setState({password: event.target.value}) }
                />
            </div>  
            <br />
            <div>
                {/* <button type="button" className="btn btn-primary"
                        onClick={() => this.login()}
                >Login</button> */}
                <NavigateButton buttonTitle="Register" route="/user" isReplaced={true} />
            </div>         
      </div>
    )
  }
}

export default Login
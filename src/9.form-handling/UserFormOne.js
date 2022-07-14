import React, { Component } from 'react'

export class UserFormOne extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            comments: "",
            country: 0,
            gender: "",
            isAdmin: false
        }
    }

    getFormData() {
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }

    resetFields(){
        this.setState({
            username: "",
            comments: "",
            country: 0,
            gender: "",
            isAdmin: false
        })
    }

    render() {
        return (
            <div>
                <h1>User Form</h1>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            className="form-control w-50"
                            value={this.state.username}
                            onChange={(event) => this.setState({username: event.target.value })}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Comments</label>
                        <textarea className="form-control w-50"
                            value={this.state.comments}
                            onChange={(event) => this.setState({comments: event.target.value })}
                        ></textarea>
                    </div>
                    <br />
                    <div>
                        <label>Country</label>
                        <select className="form-select w-50"
                            value={this.state.country}
                            onChange={(event) => this.setState({country: event.target.value })}
                        >
                            <option value={0}>Select</option>
                            <option value={1}>Bharat</option>
                            <option value={2}>Japan</option>
                            <option value={3}>Australia</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Gender</label>&emsp;
                        <input type="radio"
                            className="form-check-input"
                            name="gender"
                            value={1}
                            onChange={(event) => this.setState({gender: event.target.value})}
                        />&ensp;Female&ensp;
                        <input type="radio"
                            className="form-check-input"
                            name="gender"
                            value={0}
                            onChange={(event) => this.setState({gender: event.target.value})}
                        />&ensp;Male&ensp;
                    </div>
                    <br />
                    <div>
                        <label>IsAdmin</label>&ensp;
                        <input type="checkbox" 
                               className="form-check-input"
                            onChange={() =>  this.setState({isAdmin: !this.state.isAdmin})}
                        />
                    </div>
                    <br />
                    <div>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => this.getFormData()}
                        >Get Data</button>
                        &ensp;&ensp;
                        <button type="reset" 
                                className="btn btn-warning"
                                onClick={() => this.resetFields()}
                        >Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserFormOne
import React, { useEffect, useState } from 'react'

function UserAPIUsingHook() {
    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/api/users")
      .then(response => response.json())
      .then(data => setUsers(data))
    },[])

  return (
    <div className="container">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserAPIUsingHook
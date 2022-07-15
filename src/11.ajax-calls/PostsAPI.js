import React, { Component } from 'react'

export class PostsAPI extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }

  render() {
    return (
      <div>
        {/* {
            this.state.posts.map(post => (
                <ul key={post.id}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            ))
        } */}
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default PostsAPI
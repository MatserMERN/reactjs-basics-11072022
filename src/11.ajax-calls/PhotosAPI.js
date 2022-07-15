import React, { Component } from 'react'

export class PhotosAPI extends Component {
    constructor(){
        super()

        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => this.setState({photos: data}))
    }
  render() {
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>ThumbnailUrl</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.photos.map(photo => (
                        <tr key={photo.id}>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <a href={photo.url} target="_blank">{photo.url}</a>
                            </td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
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

export default PhotosAPI
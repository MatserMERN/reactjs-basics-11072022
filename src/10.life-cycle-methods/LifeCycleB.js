import React, { Component } from 'react'

export class LifiCycleB extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log('Constructor of LifeCycle B')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifeCycle B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of LifeCycle B')
    }
  render() {
    console.log('render of LifeCycle B')
    return (
      <div>LifiCycleB</div>
    )
  }
}

export default LifiCycleB
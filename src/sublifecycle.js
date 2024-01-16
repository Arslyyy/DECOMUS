import React, { Component } from 'react'

export default class Sublifecycles extends Component {

    componentWillUnmount() {
        this.props.ubahmakanan("Nasi Goreng")
    }

  render() {
    return (
      <div>
        <h2>Component Sub Lifecycles</h2> 
      </div>
    )
  }
}

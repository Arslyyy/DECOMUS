import React, { Component } from 'react'
import Sublifecycles from './sublifecycle';

export default class Lifecycles extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      makanan : 'Bakso',
      data: {},
      tampilHalamanSub: false,
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
       this.setState({
        data : json
       })
      })
  }

  ubahmakanan(value) {
    this.setState({
      makanan : value
    })
  }


  render() {
    console.log("Data :", this.state.data)
    return (
      <div>

      <h2>{this.state.makanan}</h2>

      {this.state.tampilHalamanSub && <Sublifecycles ubahmakanan={(value) => this.ubahmakanan(value)}/>}

      <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>
      </div>
    )
  }
}

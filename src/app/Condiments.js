import React, { Component } from 'react'

class Condiments extends Component {
  state = {
    condiment: [],
  }

  componentDidMount() {
    this.getCondiment()
  }

  getCondiment = () => {
    fetch('http//localhost:3000/Condiment')
      .then((response) => response.json())
      .then((data) => this.setState({ condiment: data }))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Condiments

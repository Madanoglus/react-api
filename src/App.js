import React, { Component } from 'react'
import Categorylist from './app/Categorylist'
import Condiments from './app/Condiments'
import Navi from './app/Navi'
import Productlist from './app/Productlist'
import './App.css'

class App extends Component {
  state = {
    product: [],
  }
  componentDidMount() {
    this.getProduct()
  }

  getProduct = () => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => this.setState({ product: data }))
  }
  render() {
    return (
      <div className="App">
        <Navi />
        <div className="context">
          <div className="ürünler">
            <Categorylist madan="zaev" />
            <Condiments />
          </div>
          <div>
            <Productlist product={this.state.product} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

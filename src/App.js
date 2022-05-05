import React, { Component } from 'react'
import Categorylist from './app/Categorylist'
import Condiments from './app/Condiments'
import Navi from './app/Navi'
import Productlist from './app/Productlist'
import './App.css'

class App extends Component {
  state = {
    product: [],
    categoryList: '',
  }

  changeCategoery = (category) => {
    this.setState({ categoryList: category.categoryName })
    this.getProduct(category.id)
  }
  componentDidMount() {
    this.getProduct()
  }

  getProduct = (catogoryId) => {
    let url = 'http://localhost:3000/product'
    if (catogoryId) {
      url += '?catogoryId=' + catogoryId
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ product: data }))
  }

  render() {
    return (
      <div className="App">
        <Navi />
        <div className="context">
          <div className="ürünler">
            <Categorylist
              categoryList={this.state.categoryList}
              changeCategoery={this.changeCategoery}
              madan="zaev"
            />
            <Condiments />
          </div>
          <div>
            <Productlist
              categoryList={this.state.categoryList}
              product={this.state.product}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App

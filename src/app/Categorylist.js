import React, { Component } from 'react'

class Categorylist extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }

  

  render() {
    return (
      <div>
        <h2>Category List</h2>
        <div>
          {this.state.categories.map((category) => (
            <div
              onClick={() => this.props.changeCategoery(category)}
              className="categoriesItem"
              key={category.id}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <h3>{this.props.categoryList}</h3>
      </div>
    )
  }
}

export default Categorylist

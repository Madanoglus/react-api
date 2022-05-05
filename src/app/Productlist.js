import React, { Component } from 'react'

import '../App.css'

class Productlist extends Component {
  render() {
    return (
      <div>
        <h2>ProductList-{this.props.categoryList}</h2>
        <div>
          <div className="başlik">
            <th className="başlik-sec">S.No</th>
            <th className="başlik-first">ÜRÜN</th>
            <th className="başlik-sec">FİYAT</th>
            <th className="başlik-sec">ADET</th>
          </div>

          {this.props.product.map((product) => (
            <div key={product.id}>
              <tr className="başlik-list" >
                <th className="başlik-sec">{product.id}</th>
                <th className="first">{product.productName}</th>
                <th className="başlik-sec">{product.id}</th>
                <th className="başlik-sec">{product.id}</th>
              </tr>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Productlist

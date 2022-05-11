import React, { Component } from 'react'
import '../App.css'

class Navi extends Component {
  render() {
    return (
      <div className="navi">
        <h1>Navi Component</h1>
        <select className="navi-option" label="sepet">
          <optgroup className="optgroup" label="SEPET">
            <option value="">{this.props.cart.length}</option>
            
          </optgroup>
        </select>
      </div>
    )
  }
}

export default Navi

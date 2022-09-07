import React, { Component } from 'react'
import Search from './Search'
import Cart from './Cart'

 class Hider extends Component {
  render() {
    return (
      <div className="navbar   text-white">

      <div className="logo">
    <img src="img/Supreme.png" alt="logo" width="220" height="80" />
    </div>
        <Search />
        <Cart />

      </div>
    )
  }
}

export default Hider
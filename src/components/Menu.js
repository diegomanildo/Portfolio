import React, { Component } from 'react'
import Description from './Description';
import "./Menu.css"
import Proyects from './Proyects';

class Menu extends Component {
  render() {
    return (
      <div>
        <Description />
        <Proyects />
      </div>
    )
  }
}

export default Menu;
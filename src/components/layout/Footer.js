import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <footer className="text-white text-center py-4">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} Diego Manildo. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
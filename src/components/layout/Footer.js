import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="text-white text-center py-4">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} Diego Manildo. All rights reserved.</p>
          <div className="social-icons mt-3">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
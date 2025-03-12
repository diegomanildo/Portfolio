import React, { Component } from "react";
import logo from "../../assets/d.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      theme: localStorage.getItem("theme") || "dark-theme",
    };
  }

  toggleTheme = () => {
    const newTheme =
      this.state.theme === "dark-theme" ? "light-theme" : "dark-theme";
    this.setState({ theme: newTheme }, () => {
      localStorage.setItem("theme", newTheme);
      if (document.body) {
        document.body.classList.remove("dark-theme", "light-theme");
        document.body.classList.add(newTheme);
      }
    });
  };

  handleScroll = () => {
    this.setState({ isScrolled: window.scrollY > 50 });
  };
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (document.body) {
      document.body.classList.add(this.state.theme);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          this.state.isScrolled ?  this.state.theme === "dark-theme" ? "bg-dark shadow" : "bg-light shadow" : "bg-transparent scrolled"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img width={40} src={logo} alt="Website Logo" className="webLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 -2 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 -2 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-folder"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 -2 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-scale"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 20l10 0" />
                    <path d="M6 6l6 -1l6 1" />
                    <path d="M12 3l0 17" />
                    <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                    <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 -2 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:diegothiry26@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 -2 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail-share"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                    <path d="M3 7l9 6l9 -6" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home"
                  onClick={this.toggleTheme}
                >
                  {this.state.theme === "dark-theme" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 -2 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 -2 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                    </svg>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

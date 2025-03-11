import React, { Component } from "react";
import logo from "../../assets/d.png";
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
    const newTheme = this.state.theme === "dark-theme" ? "light-theme" : "dark-theme";
    this.setState({ theme: newTheme }, () => {
      localStorage.setItem("theme", newTheme);
      document.body.classList.remove("dark-theme", "light-theme");
      document.body.classList.add(newTheme);
    });
  };

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.body.classList.add(this.state.theme);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav className={`navbar ${this.state.isScrolled ? "scrolled" : ""}`}>
        <a href="#">
          <img className="webLogo" src={logo} alt="Website Logo"></img>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#">
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
          <li>
            <a href="#projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 -3 24 24"
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

          <li>
            <a href="#skills">
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
          
          <li>
            <a href="#aboutMe">
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

          <li>
            <a href="mailto:diegothiry26@gmail.com">
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

          <li>
            <a href="#" onClick={this.toggleTheme}>
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
      </nav>
    );
  }
}

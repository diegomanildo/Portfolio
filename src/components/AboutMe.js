import React, { Component } from "react";
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <section className="aboutMe" id="aboutMe">
        <h1 className="title glow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="2 2 24 24"
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
          About me
        </h1>

        <p className="text-center">
          My name is Diego Manildo. I started programming when I was 14 years old, building small cmd applications.
        </p>
      </section>
    );
  }
}

export default AboutMe;

import React, { Component } from "react";
import "./AboutMe.css";
import Study from "./layout/Study";

class AboutMe extends Component {
  render() {
    return (
      <section className="aboutMe" id="aboutMe">
        <h1 className="title glow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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

        <h1 className="subtitle left">Info</h1>

        <p className="left">
          My name is Diego Manildo. I started programming when I was 14 years old, building small command-line applications in C++. <br />
          As I grew older, I began learning C# and even attempted to create my own programming language called &quot;Rub&quot;. It was a disaster, but I learned a lot from the experience. <br />
          After that, I completed my secondary education and started taking courses that interested me.
        </p>

        <h1 className="subtitle left">Studies</h1>

        <p className="left">
          <ul>
            <li>
              <Study
                title="Foundational C# with Microsoft"
                institution="freeCodeCamp"
                src="https://www.freecodecamp.org/certification/fcc9f8200f1-5964-4ca6-871a-d57d0b03743c/foundational-c-sharp-with-microsoft"
                date="April 2024"
              />
            </li>
            <li>
              <Study
                title="Backend Development and API Creation"
                institution="Packt"
                src="https://www.coursera.org/account/accomplishments/verify/0C3I3GUNS9YU"
                date="March 2025"
              />
            </li>
            <li>
              <Study
                title="Frontend Development with React"
                institution="Packt"
                src="https://www.coursera.org/account/accomplishments/verify/9R3CZISRAMNQ"
                date="March 2025"
              />
            </li>
            <li>
              <Study
                title="MERN Stack Front To Back: Full Stack React, Redux & Node.js"
                institution="Packt"
                src="https://www.coursera.org/account/accomplishments/specialization/M0RCRCUOSLFX"
                date="March 2025"
              />
            </li>
          </ul>
        </p>
      </section>
    );
  }
}

export default AboutMe;

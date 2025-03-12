import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h1 className="title glow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
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
          Skills
        </h1>

        <div className="icons">
          <img alt="Python Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <img alt="C++ Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          <img alt="C# Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          <img alt="Java Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          <img alt="MySql Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
          
          <br />

          <img alt="Html Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <img alt="Css Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />          
          <img alt="JavaScript Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <img alt="React Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />            
          <img alt="NodeJs Logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        </div>
      </section>
    );
  }
}

export default Skills;

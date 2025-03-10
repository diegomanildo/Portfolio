import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  handleDownload() {
    const link = document.createElement("a");
    link.href = "https://drive.usercontent.google.com/u/0/uc?id=1I3qPWgUeiL2uqDuIB3vBETkwp51PUXBi&export=download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    return (
      <section className="description">
        <header>
          <a href="https://www.linkedin.com/in/diego-manildo-560b03239/" target="_blank" rel="noreferrer">
            <img
              src="https://avatars.githubusercontent.com/u/105059232?v=4"
              alt="Diego Manildo developer"
              className="logo"
            />
          </a>
        </header>
        <h1 className="title glow">Hi!, I&apos;m Diego Manildo</h1>
        <p>
          <b>Computer Technician</b> from Buenos Aires, Argentina 🇦🇷.
          <br />
          Specialized in creating web pages with unique designs.
        </p>

        <footer className="buttons">
          <a href="mailto:diegothiry26@gmail.com">
            <button className="custom-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="2 2 24 24"
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
              <b> Contact</b>
            </button>
          </a>

          <button className="custom-btn" onClick={this.handleDownload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="5 2 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-file-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M12 17v-6" />
              <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
            </svg>
            <b>CV</b>
          </button>
        </footer>
      </section>
    );
  }
}

export default Description;
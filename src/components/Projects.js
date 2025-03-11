import React, { Component } from "react";
import Card from "./layout/Card";
import "./Projects.css";

class Projects extends Component {
  getLink(from, number) {
    switch (from.toLowerCase()) {
      case "adel":
        return `https://github.com/diegomanildo/Adel-Curse/blob/master/docs/imgs/${number}.png?raw=true`;
      case "wordle":
        return `https://github.com/diegomanildo/Wordle/blob/master/docs/images/${number}.png?raw=true`;
      default:
        throw new Error(`'${from}' is not valid for 'getLink()' function.`);
    }
  }

  render() {
    const getImages = (arr, from, images) => {
      for (let i = 1; i <= images; i++) {
        arr.push(this.getLink(from, i));
      }
    };

    const adelsCurseImages = [];
    getImages(adelsCurseImages, "adel", 5);

    const wordleImages = [];
    getImages(wordleImages, "wordle", 1);

    return (
      <section className="projects" id="projects">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-folder"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
          </svg>
          Projects
        </h1>
        <div className="cards row">
          <Card
            className="card"
            code="https://github.com/diegomanildo/Adel-Curse"
            play="https://drive.google.com/file/d/1GJenYi_7_9FpGcx9PJ1d2nDGXJufDL22/view"
            title="Adel's Curse"
            images={adelsCurseImages}
          >
            A game developed with{" "}
            <a href="https://libgdx.com/" target="_blank" rel="noreferrer">
              Libgdx
            </a>{" "}
            in Java with the purpose of learning about online games and AI
            algorithms. It is inspired in{" "}
            <a
              href="https://store.steampowered.com/app/113200/The_Binding_of_Isaac/?l=spanish"
              target="_blank"
              rel="noreferrer"
            >
              The Binding Of Isaac
            </a>
            . <br />I learned about AI Movement algorithms, shooting and path
            finding.
            <br />
            <br />
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-copyright"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
            </svg>
            Developed with{" "}
            <a
              href="https://github.com/frntml"
              target="_blank"
              rel="noreferrer"
            >
              Francisco Tumulty
            </a>
            .
          </Card>

          <Card
            className="card"
            code="https://github.com/diegomanildo/Wordle"
            play="https://diegomanildo.github.io/Wordle/"
            title="Wordle"
            images={wordleImages}
          >
            My first website with the purpose of learning basic JavaScript
            programming and DOM management.
            <br />I use <a href="https://sweetalert2.github.io/">
              SweetAlert
            </a>{" "}
            for the messages displayed in the screen. <br />I understood how the
            DOM works and how to add elements changing its style, colors and
            font
          </Card>
        </div>
      </section>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Galery from "./Galery";
import "./Card.css";

class Card extends Component {
  render() {
    const { title, images } = this.props;

    return (
      <div className="card">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div>
            <h1 className="subtitle">
              <a href={this.props.link} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="2 2 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-link"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
              </a>
              {title}
            </h1>
          </div>

          <Galery images={images} alt={`${title} photo`} />
        </div>

        <div className="card-body text-center">
          <p className="card-text description">
            {this.props.children}
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired
};

export default Card;

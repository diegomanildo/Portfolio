import React, { Component } from "react";
import PropTypes from "prop-types";
import Gallery from "./Gallery";
import "./Card.css";

class Card extends Component {
  render() {
    const { title, code, play, images } = this.props;

    return (
      <div className="card">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div>
            <h1 className="subtitle">
              {title}
            </h1>
          </div>

          {images && <Gallery images={images} alt={`${title} photo`} />}
        </div>

        <div className="card-body text-center">
          <p className="card-text description">{this.props.children}</p>
        </div>

        {(play || code) && (
          <footer>
            {code && (
              <a href={code} target="_blank" rel="noreferrer">
                <button className="custom-btn notransform extend">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                  <b>Code</b>
                </button>
              </a>
            )}

            {play && (
              <a href={play} target="_blank" rel="noreferrer">
                <button className="custom-btn notransform extend">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <b>Play</b>
                </button>
              </a>
            )}
          </footer>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  play: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};

export default Card;

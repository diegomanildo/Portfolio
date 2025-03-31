import React, { Component } from "react";
import "./Study.css";
import PropTypes from "prop-types";

class Study extends Component {
  render() {
    const { title, src, institution, date } = this.props;
    return (
      <div className="study-card">
        <a href={src} target="_blank" rel="noopener noreferrer">
          <h4 className="card-subtitle text-decoration-underline">{title}</h4>
        </a>
        <h6 style={{ fontWeight: "normal" }}>{institution}</h6>
        <small>Completion date: {date}</small>
      </div>
    );
  }
}

Study.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default Study;

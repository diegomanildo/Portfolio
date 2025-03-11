import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { getRandomNumber } from "../data/utils";
import PropTypes from "prop-types";
import "./Galery.css"

class Galery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleSelect = (selectedIndex) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    if (!this.props.images || this.props.images.length === 0) {
      return <p>No images available</p>;
    }

    return (
      <div className>
        <Carousel
          activeIndex={this.state.index}
          onSelect={this.handleSelect}
          controls={true}
          indicators={true}
          interval={getRandomNumber(3000, 5000)}
        >
          {this.props.images.map((image, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${this.props.alt} n°${idx + 1}`}
                height={"250px"}
                style={{ borderRadius: "2%" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

Galery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
}

export default Galery;
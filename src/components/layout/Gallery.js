import React, { useId } from "react";
import PropTypes from "prop-types";
import "./Gallery.css"

const Gallery = ({ images, alt }) => {
  const id = useId();

  return (
    <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target={`#carousel-${id}`} 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""} 
            aria-current={index === 0 ? "true" : undefined} 
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={image} className="d-block w-100" alt={alt} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Gallery;

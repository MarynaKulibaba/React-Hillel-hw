import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./slider.module.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
    };
  }

  getSlideClass = (index) => {
    const { currentSlideIndex } = this.state;
    return cn("carousel-item", {
      active: index === currentSlideIndex,
    });
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        prevState.currentSlideIndex > 0
          ? prevState.currentSlideIndex - 1
          : this.props.images.length - 1,
    }));
  };
  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        prevState.currentSlideIndex < this.props.images.length - 1
          ? prevState.currentSlideIndex + 1
          : 0,
    }));
  };
  render() {
    const { images } = this.props;
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          {images.map((img, index) => (
            <div key={index} className={this.getSlideClass(index)}>
              <img
                src={img}
                className={styles.carouselInnerImg}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={this.prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={this.nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;

import React from "react";
import PropTypes from "prop-types";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
    };
  }

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
    const { images } = this.props; // Отримання зображень з пропсів
    const { currentSlideIndex } = this.state;
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={images[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex}`}
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

import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <>
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img alt="" className="d-block w-100" src="d" />
            </div>
            <div className="carousel-item">
              <img alt="" className="d-block w-100" src="/images/second.jpeg" />
            </div>
            <div className="carousel-item">
              <img alt="" className="d-block w-100" src="/images/third.jpeg" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#carousel"
            type="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#carousel"
            type="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Slider;

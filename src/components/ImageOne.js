import React from "react";
import { Parallax } from "react-parallax";

const ImageOne = ({width, setWidth}) => (
  <Parallax className="image" strength={800}>
    <div className="content">
      <span
        className="img-txt"
        data-text="Hello and welcome, I am an aspiring Fullstack Engineer."
      >
        Hello and welcome, I am an aspiring Fullstack Engineer.
      </span>
      <button
        to="/about"
        id="btn"
        onClick={() => {
            function handleResize() {
                setWidth(window.innerWidth)
            }
            handleResize()
            if (width <= 880) {
                window.scrollTo({ behavior: "smooth", top: 840, left: 0 });
            } else {
                window.scrollTo({ behavior: "smooth", top: 1000, left: 0 });
            }
        }}
      >
        Explore
      </button>
    </div>
  </Parallax>
);

export default ImageOne;

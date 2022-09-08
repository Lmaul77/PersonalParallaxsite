import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";

const ImageOne = () => (
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
          window.scrollTo({ behavior: "smooth", top: 1000, left: 0 });
        }}
      >
        Explore
      </button>
    </div>
  </Parallax>
);

export default ImageOne;

import { Parallax } from "react-parallax";
import React from "react";
import Tilt from "react-parallax-tilt";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 500;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const ImageFour = ({
  fitnessTrackerScale,
  setfitnessTrackerScale,
  userHubScale,
  setuserHubScale,
  qwirtyScale,
  setqwirtyScale,
}) => (
  <Parallax className="image" strength={800}>
    <div className="ProjectPageTwo">
      <div className="gap">
        <Tilt
        className="mobiletilt"
          scale={fitnessTrackerScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="fitnesstrackercard reveal"
            value={fitnessTrackerScale}
            onChange={(event) =>
              setfitnessTrackerScale(parseFloat(event.target.value))
            }
          >
            <div className="fitnesstrackercard-image"></div>
            <div className="fitnesstrackercard-text">
              <span className="fitnesstrackerdate">August 7, 2022</span>
              <h3>Fitness Tracker</h3>
              <p>
                Built a back-end API and front-end website that allows users or
                guests to experience different fitness activities or routines
                from others. A user has the ability to create seperate routines
                or activites and then combine activities to any routine they
                choose.
              </p>
              <a
                href="https://scintillating-griffin-e8365a.netlify.app"
                target="https://scintillating-griffin-e8365a.netlify.app"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="gap">
        <Tilt
        className="mobiletilt"
          scale={userHubScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="userhubcard reveal"
            value={userHubScale}
            onChange={(event) =>
              setuserHubScale(parseFloat(event.target.value))
            }
          >
            <div className="userhubcard-image"></div>
            <div className="userhubcard-text">
              <span className="userhubdate">July 5, 2022</span>
              <h3>User Hub</h3>
              <p>
                Basic project developed for the sole purpose of creating users
                with login/logout functionality and personal postings displayed.
              </p>
              <a
                href="https://spontaneous-cucurucho-360368.netlify.app"
                target="https://spontaneous-cucurucho-360368.netlify.app"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="gap">
        <Tilt
        className="mobiletilt"
          scale={qwirtyScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="qwirtycard reveal"
            value={qwirtyScale}
            onChange={(event) => setqwirtyScale(parseFloat(event.target.value))}
          >
            <div className="qwirtycard-image"></div>
            <div className="qwirtycard-text">
              <span className="qwirtydate">June 12, 2022</span>
              <h3>Qwirty</h3>
              <p>
                Built this website from an example website with the goal of
                coding a similar if not near perfect outcome to the original.
              </p>
              <a
                href="https://precious-melba-0ac241.netlify.app"
                target="https://precious-melba-0ac241.netlify.app"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  </Parallax>
);

export default ImageFour;

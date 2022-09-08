import { Parallax } from "react-parallax";
import React from "react";
import Tilt from "react-parallax-tilt";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const ImageThree = ({
  topSecretScale,
  setTopSecretScale,
  ticTacToeScale,
  setticTacToeScale,
  strangersThingsScale,
  setstrangersThingsScale,
}) => (
  <Parallax strength={800}>
    <div className="ProjectPage">

        <Tilt
        className="mobiletilt"
          scale={topSecretScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="topsecretcard reveal"
            value={topSecretScale}
            onChange={(event) =>
              setTopSecretScale(parseFloat(event.target.value))
            }
          >
            <div className="topsecretcard-image"></div>
            <div className="topsecretcard-text">
              <span className="topsecretdate">August 28, 2022</span>
              <h3>Top Secret E-commerce Website</h3>
              <p>
                A near fully functioning e-commerce website with user
                functionality and password security. The back to front end
                creation allows for any number of products to be added to the
                website. The team for this website also designed a startup admin
                panel with product and user control.
              </p>
              <a
                href="https://top-secret-shirts-la.herokuapp.com/"
                target="https://top-secret-shirts-la.herokuapp.com/"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>

        <Tilt
        className="mobiletilt"
          scale={ticTacToeScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="tictactoecard reveal"
            value={ticTacToeScale}
            onChange={(event) =>
              setticTacToeScale(parseFloat(event.target.value))
            }
          >
            <div className="tictactoecard-image"></div>
            <div className="tictactoecard-text">
              <span className="tictactoedate">June 22, 2022</span>
              <h3>TicTacToe Arcade Game</h3>
              <p>
                Developed an interactive tictactoe arcade game with single and
                multiplayer functionality. The game allows for players to input
                player names as well as a score counter to keep track of how
                many games each individual has won. The computer plays at random
                selecting any open space against a player.
              </p>
              <a
                href="https://legendary-lolly-795c0c.netlify.app"
                target="https://legendary-lolly-795c0c.netlify.app"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>

        <Tilt
        className="mobiletilt"
          scale={strangersThingsScale}
          transitionSpeed={2500}
          perspective={1000}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.25}
          glareBorderRadius="18px"
          glarePosition="bottom"
        >
          <div
            className="strangersthingscard reveal"
            value={strangersThingsScale}
            onChange={(event) =>
              setstrangersThingsScale(parseFloat(event.target.value))
            }
          >
            <div className="strangersthingscard-image"></div>
            <div className="strangersthingscard-text">
              <span className="strangersthingsdate">July 12, 2022</span>
              <h3>Stranger's Things</h3>
              <p>
                A beginning project created to learn how to work with back-end
                API's and user creation. This website functions like craigslist
                with a posting's page and user profile page. A user can send or
                recieve messages from others. The user can also post their own
                sales post to display to all visitors guests or users.
              </p>
              <a
                href="https://zingy-blini-083e54.netlify.app"
                target="https://zingy-blini-083e54.netlify.app"
              >
                <button className="websitebutton">Visit Website</button>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
  </Parallax>
);

export default ImageThree;

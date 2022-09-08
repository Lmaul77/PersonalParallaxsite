import React from "react";
import Contact from "./Contact";
import { Parallax } from "react-parallax";
import { RiMapPinLine } from "react-icons/ri"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Tilt from "react-parallax-tilt";

function reveal() {
    let reveals = document.querySelectorAll(".reveal")
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

window.addEventListener("scroll", reveal)

const ImageFive = () => (
  <Parallax className="image" strength={800}>
    <section className="contact">
      <div className="contactcontent reveal">
        <div className="contactheader">Contact</div>
        <div>
            <Tilt>
          <a href="https://www.linkedin.com/in/lucasmaul/" target="https://www.linkedin.com/in/lucasmaul/"><AiFillLinkedin className="socialicons"/></a>
          <a href="https://www.facebook.com/lucas.w.maul/" target="https://www.facebook.com/lucas.w.maul/"><AiFillFacebook className="socialicons"/></a>
          <a href="https://twitter.com/Lucas_Maul1995" target="https://twitter.com/Lucas_Maul1995"><AiFillTwitterSquare className="socialicons"/></a>
          <a href="https://www.instagram.com/lucasmaul/" target="https://www.instagram.com/lucasmaul/"><AiFillInstagram className="socialicons"/></a>
          </Tilt>
        </div>
      </div>
      <div className="contactcontainer reveal">
        <div className="contactinfo">
            <div className="contactbox">
                <div className="contacticon"><RiMapPinLine /></div>
                <div className="contacttext">
                    <h3>Address</h3>
                    <p>8409 stonewood drive, <br></br>Oklahoma City, Oklahoma, <br></br>73135</p>
                </div>
            </div>
            <div className="contactbox">
                <div className="contacticon"><BsFillTelephoneFill /></div>
                <div className="contacttext">
                    <h3>Phone</h3>
                    <p>405-203-3710</p>
                </div>
            </div>
            <div className="contactbox">
                <div className="contacticon"><AiOutlineMail /></div>
                <div className="contacttext">
                    <h3>Email</h3>
                    <p>lmaul77@gmail.com</p>
                </div>
            </div>
        </div>
        <Contact />
      </div>
    </section>
  </Parallax>
);

export default ImageFive;

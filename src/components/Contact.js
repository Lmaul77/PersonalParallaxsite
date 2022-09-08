import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_v3522s6",
        "template_gpp0j8a",
        form.current,
        "h1BevydKPIBe9k0iT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div className="contactform">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send Message</h2>
        <div className="inputBox">
          <input type="text" name="user_name" required="required" />
          <span>Full Name</span>
        </div>
        <div className="inputBox">
          <input type="text" name="user_email" required="required" />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <textarea name="message" required="required"></textarea>
          <span>Type your Message...</span>
        </div>
        <div className="inputBox">
          <button type="Submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

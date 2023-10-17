import React from "react";
import "./Contact.css";
import adobe from "../../images/adobe.png";
import facebook from "../../images/facebook.png";
import microsoft from "../../images/microsoft.png";
import walmart from "../../images/walmart.png";
import facebookicon from "../../images/facebookicon.png";
import twittericon from "../../images/twittericon.png";
import youtubeicon from "../../images/youtubeicon.png";
import instagramicon from "../../images/instagramicon.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientsImgs">
            <img src={adobe} alt="/" className="clientsImg" />
            <img src={facebook} alt="/" className="clientsImg" />
            <img src={microsoft} alt="/" className="clientsImg" />
            <img src={walmart} alt="/" className="clientsImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea name="message" rows="5" placeholder="Your Message" className="msg "></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
                <img src={facebookicon} alt="/" className="link"/>
                <img src={instagramicon} alt="/" className="link"/>
                <img src={youtubeicon} alt="/" className="link"/>
                <img src={twittericon} alt="/" className="link"/>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

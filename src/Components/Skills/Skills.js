import React from "react";
import "./Skills.css";
import UI from "../../images/ui-design.png";
import Web from "../../images/website-design.png";
import App from "../../images/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <spans className="skillDesc">
        I am a skilled and passionate web designer With experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding Of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </spans>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UI} alt="/" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>
              Highly skilled UI Designer
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Web} alt="/" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Highly creative and multi-talented Web Designer
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={App} alt="/" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Innovative and detail-oriented Senior App Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

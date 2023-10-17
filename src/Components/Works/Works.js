import React from "react";
import "./Works.css";
import port1 from "../../images/portfolio-1.png";
import port2 from "../../images/portfolio-2.png";
import port3 from "../../images/portfolio-3.png";
import port4 from "../../images/portfolio-4.png";
import port5 from "../../images/portfolio-5.png";
import port6 from "../../images/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        As a dedicated web developer, my commitment to client satisfaction goes
        beyond just technical expertise. I understand that effective
        communication, collaboration, and a genuine concern for their success
        are essential components of a successful project. 
      </span>
      <div className="worksImgs">
        
        <img src={port1} alt="/" className="worksImg" />
        <img src={port2} alt="/" className="worksImg" />
        <img src={port3} alt="/" className="worksImg" />
        <img src={port4} alt="/" className="worksImg" />
        <img src={port5} alt="/" className="worksImg" />
        <img src={port6} alt="/" className="worksImg" />

      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
};

export default Works;

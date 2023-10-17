import React from 'react';
import "./Intro.css";
import theme from "../../images/theme.jpg";
import {Link} from 'react-scroll';
import hire from "../../images/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Boddu Sheshank</span><br />Website Designer</span>
            <p className="introPara">I love building websites that are easy to use and can be <br /> accessed by anyone. I also love making my clients happy <br /> with their site's performance, so they can see it on any <br /> device they have.</p>
            <Link><button className='btn'><img src={hire} alt="/" className='btnImg'/>Hire me</button></Link>
        </div>

        <img src={theme} alt="/" className='bg'/>
    </section>
  )
}

export default Intro

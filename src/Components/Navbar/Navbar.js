import "./Navbar.css";
import React from "react";
import logoicon from "../../images/logoicon.png";
import {Link} from 'react-scroll';
import contactimg from "../../images/contact.png";
import menu from "../../images/menuicon.png";
import { useState } from "react";

const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);

  return (

    <nav className="navbar">
      <img src={logoicon} alt="logo" className="logo"/>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" smooth={true} spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" smooth={true} spy={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" smooth={true} spy={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="clients" smooth={true} spy={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
      }}>
        <img src={contactimg} alt="/" className="desktopMenuImg" />
        Contact me
      </button>

      <img src={menu} alt="logo" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" smooth={true} spy={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass="active" to="skills" smooth={true} spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
        <Link activeClass="active" to="works" smooth={true} spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass="active" to="clients" smooth={true} spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
        <Link activeClass="active" to="clients" smooth={true} spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <a className="nav-item" id="pat" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" >Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >Projects</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar

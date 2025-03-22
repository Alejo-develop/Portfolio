import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
  return (
    <div className="navbar-socialMedia-section">
      <div></div>
      <nav className="div-nav">
        <a href="#aboutme" className="item-nav">
          ABOUT ME
        </a>
        <a href="#myskills" className="item-nav">
          MY SKILLS
        </a>
        <a href="#projects" className="item-nav">
          PROJECTS
        </a>
      </nav>
      <div className="div-social-media">
        <a href="https://wa.me/+573243165096" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
        </a>
        <a href="https://github.com/Alejo-develop" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/alejandro-vergara-zapata-267238213/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon"/>
        </a>
        <a href="https://www.instagram.com/a.lej.o?igsh=MTdtbDNsYXZpZXF1Nw==" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;

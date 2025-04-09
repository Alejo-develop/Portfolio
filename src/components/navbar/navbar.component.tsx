import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RevealComponent from "../reveal/reveal.component";
import { SocialMediaLinks } from "../../utils/data";

const NavbarComponent = () => {
  return (
    <div className="navbar-socialMedia-section">
      <div></div>
      <nav className="div-nav">
        <RevealComponent width="fit-content" animationColor={false}>
          <a href="#aboutme" className="item-nav">
            ABOUT ME
          </a>
        </RevealComponent>
        <RevealComponent width="fit-content" animationColor={false}>
          <a href="#myskills" className="item-nav">
            MY SKILLS
          </a>
        </RevealComponent>
        <RevealComponent width="fit-content" animationColor={false}>
          <a href="#projects" className="item-nav">
            PROJECTS
          </a>
        </RevealComponent>
      </nav>
      <div className="div-social-media">
        <RevealComponent width="fit-content" animationColor={false}>
          <a href={SocialMediaLinks.whatsapp} target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
        </RevealComponent>
        <RevealComponent width="fit-content" animationColor={false}>
          <a href={SocialMediaLinks.gitHub} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </RevealComponent>
        <RevealComponent width="fit-content" animationColor={false}>
          <a
            href={SocialMediaLinks.linkedin}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </RevealComponent>
        <RevealComponent width="fit-content" animationColor={false}>
          <a
            href={SocialMediaLinks.instagram}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </RevealComponent>
      </div>
    </div>
  );
};

export default NavbarComponent;

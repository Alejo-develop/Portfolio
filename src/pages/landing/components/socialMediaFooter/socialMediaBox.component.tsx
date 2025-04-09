import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaLinks } from "../../../../utils/data";

const SocialMediaBox = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <a
          href={SocialMediaLinks.whatsapp}
          target="_blank"
          className="socialContainer containerOne"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="socialSvg instagramSvg"
          />
        </a>
        <a
          href={SocialMediaLinks.gitHub}
          target="_blank"
          className="socialContainer containerTwo"
        >
          <FontAwesomeIcon icon={faGithub} className="socialSvg instagramSvg" />
        </a>
        <a
          href={SocialMediaLinks.linkedin}
          target="_blank"
          className="socialContainer containerThree"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="socialSvg instagramSvg"
          />
        </a>
        <a
          href={SocialMediaLinks.instagram}
          target="_blank"
          className="socialContainer containerFour"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="socialSvg instagramSvg"
          />
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background-color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 0.3s;
  }
  /* Whatsapp*/
  .containerOne:hover {
    background-color: rgb(32, 192, 91);
    transition-duration: 0.3s;
  }
  /* Git-Hub*/
  .containerTwo:hover {
    background-color: #181717;
    transition-duration: 0.3s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
  }
  /* Instagram*/
  .containerFour:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Responsive */
  @media screen and (max-width: 760px) {
    padding: 2px 2px;
  }

  .socialContainer {
    width: 40px;
    height: 40px;
  }
`;

export default SocialMediaBox;

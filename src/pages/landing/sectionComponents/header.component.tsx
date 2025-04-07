import { TypeAnimation } from "react-type-animation";
import NavbarComponent from "../../../components/navbar/navbar.component";
import RevealComponent from "../../../components/reveal/reveal.component";

const HeaderCompoent = () => {
  return (
    <div className="header">
      <NavbarComponent />
      <div className="container-header">
        <div className="container-info-header">
          <RevealComponent width="fit-content">
            <h1 className="title-header">Alejo-Develop</h1>
          </RevealComponent>
          <RevealComponent width="fit-content">
            <h4 className="subtitle-header">Fullstack Developer</h4>
          </RevealComponent>
          <div style={{ textAlign: "center" }}>
            <RevealComponent width="fit-content">
              <p className="text-header">If you can think it...</p>
            </RevealComponent>

            <RevealComponent width="fit-content">
              <TypeAnimation
                sequence={["you can work it", 2000, "you can program it", 2000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-header"
              />
            </RevealComponent>
          </div>
        </div>
        <div className="container-img-header">
          <RevealComponent width="fit-content">
            <div className="box-img"></div>
          </RevealComponent>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompoent;

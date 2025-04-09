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
            <div className="container-reveal-title-header">
              <h1 className="title-header">Alejo-Develop</h1>
            </div>
          </RevealComponent>
          <RevealComponent width="fit-content">
            <div className="container-reveal-subtitle-header">
              <h4 className="subtitle-header">Fullstack Developer</h4>
            </div>
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
          <RevealComponent>
            <div className="container-img-toReveal">
              <div className="box-img">
                {/* tu imagen o contenido adentro */}
              </div>
            </div>
          </RevealComponent>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompoent;

import { TypeAnimation } from "react-type-animation";
import NavbarComponent from "../../../components/navbar/navbar.component";

const HeaderCompoent = () => {
  return (
    <div className="header">
      <NavbarComponent />
      <div className="container-header">
        <div className="container-info-header">
          <h1 className="title-header">Alejo-Develop</h1>
          <h4 className="subtitle-header">Fullstack Developer</h4>
          <div style={{ textAlign: "center" }}>
            <p className="text-header">If you can think it...</p>
            <TypeAnimation
              sequence={["you can work it", 2000, "you can program it", 2000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-header"
            />
          </div>
        </div>
        <div className="container-img-header">
          <div className="box-img"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompoent;

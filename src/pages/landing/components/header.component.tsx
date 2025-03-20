import { TypeAnimation } from "react-type-animation";

const HeaderCompoent = () => {
  return (
    <div className="header">
      <h1 className="title-header">Alejo-Develop</h1>
      <h4 className="subtitle-header">Fullstack Developer</h4>

      <div style={{textAlign: "center"}}>
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
  );
};

export default HeaderCompoent;

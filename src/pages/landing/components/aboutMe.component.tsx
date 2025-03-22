import { aboutMeData } from "../../../utils/aboutMe.data";

const AboutMeComponent = () => {
  return (
    <div className="aboutMe-div" id="aboutme">
      <h1 className="title-aboutMe">{aboutMeData.title}</h1>

      <div className="containerParagraph-aboutMe">
        <p className="text-aboutMe">{aboutMeData.paragraph1}</p>
        <p className="text-aboutMe">{aboutMeData.paragraph2}</p>
        <p className="text-aboutMe">{aboutMeData.paragraph3}</p>
      </div>
    </div>
  );
};

export default AboutMeComponent;

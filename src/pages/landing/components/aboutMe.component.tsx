import { aboutMeData, studies } from "../../../utils/aboutMe.data";
import StudiesCardComponent from "./studiesCard.component";

const AboutMeComponent = () => {
  return (
    <div className="aboutMe-div" id="aboutme">
      <h1 className="title-aboutMe">{aboutMeData.title}</h1>

      <div className="containerParagraph-aboutMe">
        <p className="text-aboutMe">{aboutMeData.paragraph1}</p>
        <p className="text-aboutMe">{aboutMeData.paragraph2}</p>
        <p className="text-aboutMe">{aboutMeData.paragraph3}</p>
      </div>

      <div>
        {studies.map((studie, index) => (
          <StudiesCardComponent
            key={index}
            title={studie.title}
            studie={studie.studie}
            img={studie.img}
            duration={studie.duration}
            studieType={studie.studieType}
            background={studie.background}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMeComponent;

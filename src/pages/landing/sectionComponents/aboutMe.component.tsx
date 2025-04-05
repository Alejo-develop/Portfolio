import { aboutMeData, softSkills, studies } from "../../../utils/data";
import SoftSkillCardComponent from "../components/softSkillCard/softSkillCard.component";
import StudiesCardComponent from "../components/studiesCard/studiesCard.component";

const AboutMeComponent = () => {
  return (
    <div className="aboutMe-div" id="aboutme">
      <div className="container-text-aboutMe">
        <h1 className="title-aboutMe">{aboutMeData.title}</h1>

        <div className="containerParagraph-aboutMe">
          <p className="text-aboutMe">{aboutMeData.paragraph1}</p>
          <p className="text-aboutMe">{aboutMeData.paragraph2}</p>
          <p className="text-aboutMe">{aboutMeData.paragraph3}</p>
        </div>
      </div>

      <div className="container-studies-softSkills">
        <div className="container-studies">
          <p className="title-studies-section">Studies & Certifications</p>
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
        <div className="container-softSkills">
          <p className="title-studies-section">Soft Skills</p>
          <div className="soft-skills-div">
            {softSkills.map((item, index) => (
              <SoftSkillCardComponent
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;

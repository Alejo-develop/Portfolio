import RevealComponent from "../../../components/reveal/reveal.component";
import { aboutMeData, softSkills, studies } from "../../../utils/data";
import SoftSkillCardComponent from "../components/softSkillCard/softSkillCard.component";
import StudiesCardComponent from "../components/studiesCard/studiesCard.component";

const AboutMeComponent = () => {
  return (
    <div className="aboutMe-div" id="aboutme">
      <div className="container-text-aboutMe">
        <RevealComponent>
          <h1 className="title-aboutMe">{aboutMeData.title}</h1>
        </RevealComponent>

        <div className="containerParagraph-aboutMe">
          <RevealComponent>
            <p className="text-aboutMe">{aboutMeData.paragraph1}</p>
          </RevealComponent>
          <RevealComponent>
            <p className="text-aboutMe">{aboutMeData.paragraph2}</p>
          </RevealComponent>
          <RevealComponent>
            <p className="text-aboutMe">{aboutMeData.paragraph3}</p>
          </RevealComponent>
        </div>
      </div>

      <div className="container-studies-softSkills">
        <div className="container-studies">
          <RevealComponent>
            <p className="title-studies-section">Studies & Certifications</p>
          </RevealComponent>
          {studies.map((studie, index) => (
            <RevealComponent>
              <StudiesCardComponent
                key={index}
                title={studie.title}
                studie={studie.studie}
                img={studie.img}
                duration={studie.duration}
                studieType={studie.studieType}
                background={studie.background}
              />
            </RevealComponent>
          ))}
        </div>
        <div className="container-softSkills">
          <RevealComponent>
            <p className="title-studies-section">Soft Skills</p>
          </RevealComponent>
          <div className="soft-skills-div">
            {softSkills.map((item, index) => (
              <RevealComponent>
                <SoftSkillCardComponent
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              </RevealComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;

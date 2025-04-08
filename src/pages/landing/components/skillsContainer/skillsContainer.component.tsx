import { SkillsInterface } from "../../../../interfaces/skills.interface";
import SkillCardComponent from "../skillCard/skillCard.component";
import "./skillsContainer.css";
import RevealComponent from "../../../../components/reveal/reveal.component";

interface SkillsContainerProps {
  items: SkillsInterface[];
  title: string;
}

const SkillsContainerComponents = ({ title, items }: SkillsContainerProps) => {
  return (
    <div style={{width: "100%"}} >
      <RevealComponent animationColor={false} width="100%">
        <div className="skills-container">
          <RevealComponent width="100%">
            <div className="sectionItem-skills-container">
              {items.map((item, index) => (
                <SkillCardComponent
                  icon={item.icon}
                  name={item.name}
                  index={index}
                />
              ))}
            </div>
          </RevealComponent>
          <div className="sectionTitle-skills-container">
            <p className="title-skills-container">{title}</p>
          </div>
        </div>
      </RevealComponent>
    </div>
  );
};

export default SkillsContainerComponents;

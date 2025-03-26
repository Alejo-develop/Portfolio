import { SkillsInterface } from "../../../../interfaces/skills.interface";
import SkillCardComponent from "../skillCard/skillCard.component";
import "./skillsContainer.css";

interface SkillsContainerProps {
  items: SkillsInterface[];
  title: string;
}

const SkillsContainerComponents = ({ title, items }: SkillsContainerProps) => {
  return (
    <div className="skills-container">
      <div className="sectionItem-skills-container">
        {items.map((item, index) => (
          <SkillCardComponent icon={item.icon} name={item.name} index={index} />
        ))}
      </div>
      <div className="sectionTitle-skills-container">
        <p className="title-skills-container">{title}</p>
      </div>
    </div>
  );
};

export default SkillsContainerComponents;

import { SoftSkillInterface } from "../../../../interfaces/skills.interface";
import "./softSkillCard.css";

interface SoftSkillCardProps extends SoftSkillInterface {
  index: number;
}

const SoftSkillCardComponent = ({index, title, description}: SoftSkillCardProps) => {
  return (
    <div className="softSkill-card" key={index}>
      <p className="title-softSkill-card">{title}</p>
      <p className="description-softSkill-card">{description}</p>
    </div>
  );
};

export default SoftSkillCardComponent;

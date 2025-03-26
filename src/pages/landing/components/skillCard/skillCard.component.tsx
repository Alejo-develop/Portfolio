import { SkillsInterface } from "../../../../interfaces/skills.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skillCard.css";

interface SkillCardProps extends SkillsInterface {
  index: number;
}

const SkillCardComponent = ({ icon, name, index }: SkillCardProps) => {
  return (
    <div key={index} className="skill-card">
      <div>
        {typeof icon === "string" ? (
          <img src={icon} alt={name} className="skill-img"/>
        ) : (
          <FontAwesomeIcon icon={icon} className="skill-icon"/>
        )}
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillCardComponent;

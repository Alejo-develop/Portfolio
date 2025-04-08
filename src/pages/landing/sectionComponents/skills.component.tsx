import { backendSkills, frontendSkills } from "../../../utils/data";
import SkillsContainerComponents from "../components/skillsContainer/skillsContainer.component";
import RevealComponent from "../../../components/reveal/reveal.component";

const SkillsSectionComponent = () => {
  return (
    <div className="mySkills-div" id="myskills">
      <RevealComponent>
        <h1 className="title-mySkills">MY SKILLS</h1>
      </RevealComponent>
      
      <SkillsContainerComponents items={frontendSkills} title="Front-End" />
      <SkillsContainerComponents items={backendSkills} title="Back-End" />
    </div>
  );
};

export default SkillsSectionComponent;

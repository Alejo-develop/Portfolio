import { backendSkills, frontendSkills } from "../../../utils/data";
import SkillsContainerComponents from "../components/skillsContainer/skillsContainer.component";

const SkillsSectionComponent = () => {
  return (
    <div className="mySkills-div" id="myskills">
      <h1 className="title-mySkills">MY SKILLS</h1>

      <SkillsContainerComponents items={frontendSkills} title="Front-End"/>
      <SkillsContainerComponents items={backendSkills} title="Back-End"/>
    </div>
  );
};

export default SkillsSectionComponent;

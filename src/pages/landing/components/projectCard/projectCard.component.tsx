import { ProjectInterface } from "../../../../interfaces/projects.interface";
import GitHubBoxComponent from "../gitHubBox/gitHubBox.component";
import "./projectCard.css";

interface ProjectCardProps extends ProjectInterface {
  index: number;
}

const ProjectCardComponent = ({index, name, description, img, link, type}: ProjectCardProps) => {
  return (
    <div className="project-card" key={index}>
      <p className="project-name">{name}</p>

      <div className="project-section-info">
        <div className="sectionPreview-project-Card">
            <img src={typeof img === 'string' ? img : ''} alt="" />
        </div>
        <div className="sectionInfo-Project-card">
            <p className="description-project-card">{description}</p>
        </div>
      </div>

      <div>
        {type === "mobile" ? (<GitHubBoxComponent typeRepository="Repository" repository={link}/>) : (<div></div>)}
      </div>
    </div>
  );
};

export default ProjectCardComponent;

import { projects } from "../../../utils/data";
import ProjectCardComponent from "../components/projectCard/projectCard.component";

const ProjectsSectionComponent = () => {
  return (
    <div className="projects-div" id="projects">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="container-projects">
        {projects.map((item, index) => (
          <ProjectCardComponent
            index={index}
            name={item.name}
            description={item.description}
            img={item.img}
            type={item.type}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSectionComponent;

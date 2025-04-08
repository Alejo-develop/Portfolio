import { projects } from "../../../utils/data";
import ProjectCardComponent from "../components/projectCard/projectCard.component";
import RevealComponent from "../../../components/reveal/reveal.component";

const ProjectsSectionComponent = () => {
  return (
    <div className="projects-div" id="projects">
      <RevealComponent>
        <h1 className="projects-title">PROJECTS</h1>
      </RevealComponent>
      <div className="container-projects">
        {projects.map((item, index) => (
          <RevealComponent>
            <ProjectCardComponent
              index={index}
              name={item.name}
              description={item.description}
              img={item.img}
              type={item.type}
              link={item.link}
            />
          </RevealComponent>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSectionComponent;

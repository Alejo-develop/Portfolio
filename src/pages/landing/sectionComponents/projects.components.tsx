import ProjectCardComponent from "../components/projectCard/projectCard.component";

const ProjectsSectionComponent = () => {
  return (
    <div className="projects-div" id="projects">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="container-projects">
        <ProjectCardComponent />
      </div>
    </div>
  );
};

export default ProjectsSectionComponent;

import SliderImgComponent from "../../../../components/sliderImg/sliderImg.component";
import { ProjectInterface } from "../../../../interfaces/projects.interface";
import GitHubBoxComponent from "../gitHubBox/gitHubBox.component";
import "./projectCard.css";

interface ProjectCardProps extends ProjectInterface {
  index: number;
}

const ProjectCardComponent = ({
  index,
  name,
  description,
  img,
  link,
  type,
}: ProjectCardProps) => {
  return (
    <div className="project-card" key={index}>
      <p className="project-name">{name}</p>

      <div className="project-section-info">
        <div
          className={
            type === "web"
              ? "sectionPreview-project-Card"
              : "sectionSlider-projectCard"
          }
        >
          {type === "web" ? (
            <img className="img-web-project" src={img as string} alt="" />
          ) : (
            <div>
              <SliderImgComponent data={img as string[]} />
            </div>
          )}
        </div>
        <div className="sectionInfo-Project-card">
          <p className="description-project-card">{description}</p>
        </div>
      </div>

      <div className="links-projects-div">
        <GitHubBoxComponent
          typeItem={type === "mobile" ? "check it on gitHub" : "Website"}
          text={type === "mobile" ? "Repository" : "Go to"}
          repository={link}
        />
      </div>
    </div>
  );
};

export default ProjectCardComponent;

import AboutMeComponent from "./sectionComponents/aboutMe.component";
import HeaderCompoent from "./sectionComponents/header.component";
import SkillsSectionComponent from "./sectionComponents/skills.component";
import "./landing.css";

export default function LandingPage() {
  return (
    <div>
      <HeaderCompoent />
      <AboutMeComponent />
      <SkillsSectionComponent />
    </div>
  );
}

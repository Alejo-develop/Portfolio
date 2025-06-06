import AboutMeComponent from "./sectionComponents/aboutMe.component";
import HeaderCompoent from "./sectionComponents/header.component";
import SkillsSectionComponent from "./sectionComponents/skills.component";
import "./landing.css";
import ProjectsSectionComponent from "./sectionComponents/projects.components";
import FooterSection from "./sectionComponents/footerLanding.section";

export default function LandingPage() {
  return (
    <div>
      <HeaderCompoent />
      <AboutMeComponent />
      <SkillsSectionComponent />
      <ProjectsSectionComponent />
      <FooterSection />
    </div>
  );
}

import AboutMeComponent from "./components/aboutMe.component";
import HeaderCompoent from "./components/header.component";
import SkillsSectionComponent from "./components/skills.component";
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

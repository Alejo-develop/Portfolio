import AboutMeComponent from "./components/aboutMe.component";
import HeaderCompoent from "./components/header.component";
import "./landing.css";

export default function LandingPage() {
  return (
    <div>
      <HeaderCompoent />
      <AboutMeComponent />
    </div>
  );
}

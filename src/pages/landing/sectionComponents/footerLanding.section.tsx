import RevealComponent from "../../../components/reveal/reveal.component";
import SocialMediaBox from "../components/socialMediaFooter/socialMediaBox.component";

const FooterSection = () => {
  return (
    <RevealComponent animationColor={false} width="100%">
      <footer className="container-footer">
        <div style={{ textAlign: "center", gap: "10px" }}>
          <p className="title-footer">Alejo-Develop</p>
          <p className="subtitle-footer">yeyito872@gmail.com</p>
        </div>

        <SocialMediaBox />

        <p className="copyright">© 2025 Developed by Alejandro Zapata</p>
      </footer>
    </RevealComponent>
  );
};

export default FooterSection;

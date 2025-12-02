import Footer from "../components/Footer";
import ProjectsWrapper from "../components/ProjectsWrapper";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <ProjectsWrapper />
      <Footer />
    </div>
  );
}

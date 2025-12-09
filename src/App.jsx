import NavigationComponent from "./portfolio/navigation-component.jsx";
import AiIconComponent from "./portfolio/ai-icon-component.jsx";
import HomeComponent from "./portfolio/home-component.jsx";
import AboutComponent from "./portfolio/about-component.jsx";
import SkillsComponent from "./portfolio/skills-component.jsx";
import ProjectsComponent from "./portfolio/projects-component.jsx";
import ContactComponent from "./portfolio/contact-component.jsx";
import { Routes, Route } from "react-router-dom";
import UseStateComponent from "./usestate/use-state-component.jsx";
import UseStateFormComponent from "./use-state-forms/use-state-form-component.jsx";
import RegistrationPageComponent from "./registration-page/registration-page-component.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<RegistrationPageComponent/>}/>
    </Routes>
  );
};

export default App

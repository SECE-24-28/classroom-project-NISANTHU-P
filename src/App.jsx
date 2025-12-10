import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationComponent from "./portfolio/navigation-component.jsx";
import HomeComponent from "./portfolio/home-component.jsx";
import AboutComponent from "./portfolio/about-component.jsx";
import SkillsComponent from "./portfolio/skills-component.jsx";
import ProjectsComponent from "./portfolio/projects-component.jsx";
import ContactComponent from "./portfolio/contact-component.jsx";
import MainNavigation from "./components/MainNavigation.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="skills" element={<SkillsComponent />} />
        <Route path="projects" element={<ProjectsComponent />} />
        <Route path="contact" element={<ContactComponent />} />
      </Route>
      <Route path="/components" element={<MainNavigation />} />
    </Routes>
  );
};

const PortfolioLayout = () => {
  return (
    <div>
      <NavigationComponent />
      <main>
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="skills" element={<SkillsComponent />} />
          <Route path="projects" element={<ProjectsComponent />} />
          <Route path="contact" element={<ContactComponent />} />
        </Routes>
      </main>
    </div>
  );
};

export default App

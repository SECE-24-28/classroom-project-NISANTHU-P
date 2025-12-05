import React from "react";
import {ProjectsStyle} from "./projects-style.js";

const ProjectsComponent = () => {
    return (
        <ProjectsStyle>
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Campus Mentorship Stories</h3>
                        <p>A web application where students and teachers can share their experiences and mentorship stories using Java Spring Boot with Thymeleaf.</p>
                        <div className="tech-stack">
                            <span className="tech-tag">Java</span>
                            <span className="tech-tag">Spring Boot</span>
                            <span className="tech-tag">Thymeleaf</span>
                            <span className="tech-tag">MySQL</span>
                        </div>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <h3>Box Office Revenue Prediction</h3>
                        <p>Machine Learning model to predict movie revenue before release using various features and algorithms for accurate forecasting.</p>
                        <div className="tech-stack">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Machine Learning</span>
                            <span className="tech-tag">Pandas</span>
                            <span className="tech-tag">Scikit-learn</span>
                        </div>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>Responsive personal portfolio showcasing projects and skills built with React and modern web technologies.</p>
                        <div className="tech-stack">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Styled Components</span>
                            <span className="tech-tag">React Router</span>
                        </div>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
    );
};

export default ProjectsComponent;
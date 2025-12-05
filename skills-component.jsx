import React from "react";
import {SkillsStyle} from "./skills-style.js";

const SkillsComponent = () => {
    return (
        <SkillsStyle>
            <div className="skills-container">
                <h2>Skills & Technologies</h2>
                
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul className="skills-list">
                        <li>Java</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Python</li>
                    </ul>
                </div>
                
                <div className="skill-category">
                    <h3>Web Technologies</h3>
                    <ul className="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                
                <div className="skill-category">
                    <h3>Databases & Tools</h3>
                    <ul className="skills-list">
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Canva</li>
                    </ul>
                </div>
            </div>
        </SkillsStyle>
    );
};

export default SkillsComponent;
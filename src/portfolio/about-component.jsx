import React from "react";
import {AboutStyle} from "./about-style.js";

const AboutComponent = () => {
    return (
        <AboutStyle>
            <div className="about-container">
                <h2>About Me</h2>
                
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm Nisanthu, currently in my second year pursuing B.E. Computer Science and Engineering at Sri Eshwar College of Engineering. 
                            I completed my schooling at Veveaham Matric Higher Secondary School, Dharapuram.
                        </p>
                        <p>
                            I am passionate about problem-solving and web development, enjoying the application of concepts through real-world projects. 
                            I have hands-on experience with Java, C++, C, Python, HTML, CSS, JavaScript, MySQL, and MongoDB.
                        </p>
                        <p>
                            I actively practice competitive programming with a max rating of 1500 on LeetCode and 950 on CodeForces. 
                            My short-term goal is to master the MERN stack and grow into a full-stack developer.
                        </p>
                    </div>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>🎓 Education</h3>
                        <p>B.E. Computer Science and Engineering</p>
                        <p>Sri Eshwar College of Engineering</p>
                    </div>

                    <div className="about-card">
                        <h3>💡 Interests</h3>
                        <p>Problem Solving, Web Development, Competitive Programming</p>
                    </div>
                    
                    <div className="about-card">
                        <h3>🎯 Goals</h3>
                        <p>Master MERN Stack, Become Full-Stack Developer</p>
                    </div>
                </div>
            </div>
        </AboutStyle>
    );
};

export default AboutComponent;
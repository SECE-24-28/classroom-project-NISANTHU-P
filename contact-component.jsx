import React from "react";
import {ContactStyle} from "./contact-style.js";

const ContactComponent = () => {
    return (
        <ContactStyle>
            <div className="contact-container">
                <h2>Contact Me</h2>
                
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>Email: nisanthu@example.com</p>
                    <p>GitHub: <a href="https://github.com/nisanthu" target="_blank" rel="noopener noreferrer">github.com/nisanthu</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/nisanthu" target="_blank" rel="noopener noreferrer">linkedin.com/in/nisanthu</a></p>
                    <p>Location: Your City, Country</p>
                </div>
            </div>
        </ContactStyle>
    );
};

export default ContactComponent;
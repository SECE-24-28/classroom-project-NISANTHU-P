import React from "react";
import { Link} from "react-router-dom";
import { NavigationStyle } from "./navigation-style.js";

const NavigationComponent = () => {

    return (
        <NavigationStyle>
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/">Nisanthu</Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
            </nav>
        </NavigationStyle>
    );
};

export default NavigationComponent;
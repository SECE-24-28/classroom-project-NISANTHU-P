import React from "react";
import { PositionStyle } from "./position-style.js";
const PositionComponent = () => {
    return(
        <PositionStyle>
            <div className="element-1"></div>
            <div className="element"></div>
            <div className="element"></div>
            <div className="element"></div>
            <div className="element"></div>
            <div className="square">
                <div className="square__element"></div>
            </div>
        </PositionStyle>
    );
};
export default PositionComponent;
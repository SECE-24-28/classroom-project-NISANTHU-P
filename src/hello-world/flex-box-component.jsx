import React from "react";
import { FlexBoxStyle } from "./flex-box-style.js";
const FlexBoxComponent = () => {
    return (
        <FlexBoxStyle>
                <div class="element">
                    <div class="element__item">
                        <h2 class="title">Learners Today, Leaders Tomorrow</h2>
                        <p class="sub-title">
                            With our continuous research and development, we provide 
                            you with an excellent Aptitude training.
                            </p>
                    </div>
                </div>
        </FlexBoxStyle>
    );
}

export default FlexBoxComponent;
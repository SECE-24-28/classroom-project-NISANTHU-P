import Reacty from "react";
import { TrustedByStyle } from "./trusted-by-style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const TrustedByComponent = () => {
    return (
        <TrustedByStyle>
            <div className="parent">
                <div className="main-box">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faBuildingColumns}  size="2x"style={{color:"rgb(0, 197, 190)"} } />
                        </div>
                    </div>
                    <div className="value">100+</div>
                    <div className="name">COLLEGES</div>
                </div>
                <div className="rectangle"></div>
            </div>

             <div className="parent">
                <div className="main-box">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faBuildingColumns}  size="2x"style={{color:"rgb(0, 197, 190)"} } />
                        </div>
                    </div>
                    <div className="value">150</div>
                    <div className="name">PROFESSIONAL TRAINERS</div>
                </div>
                <div className="rectangle"></div>
            </div>

             <div className="parent">
                <div className="main-box">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faBuildingColumns}  size="2x"style={{color:"rgb(0, 197, 190)"} } />
                        </div>
                    </div>
                    <div className="value">1000+</div>
                    <div className="name">STUDY MATERIALS</div>
                </div>
                <div className="rectangle"></div>
            </div>

             <div className="parent">
                <div className="main-box">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faBuildingColumns}  size="2x"style={{color:"rgb(0, 197, 190)"} } />
                        </div>
                    </div>
                    <div className="value">1,00,000+</div>
                    <div className="name">STUDENTS</div>
                </div>
                <div className="rectangle"></div>
            </div>


        </TrustedByStyle>
    );
};

export default TrustedByComponent;
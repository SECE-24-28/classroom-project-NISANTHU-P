import Reacty from "react";
import { TrustedByStyle } from "./trusted-by-style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedByComponent = ({ data, styles }) => {
    return (
        <TrustedByStyle styles={styles}>
            {data.map((item, index) => (
                <div className="parent" key={index}>
                    <div className="main-box">
                        <div className="icon">
                            <div className="circle">
                                <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: item.color }} />
                            </div>
                        </div>
                        <div className="value">{item.values}</div>
                        <div className="name">{item.details}</div>
                    </div>
                    <div className="rectangle"></div>
                </div>
            ))}
        </TrustedByStyle>
    );
};

export default TrustedByComponent;
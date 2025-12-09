import React from 'react';
import { ContactStyle } from './contact-style';

const ContactComponent = () => {
    return (
        <ContactStyle>
                <div className="parent">
                    <div className="element">
                        <div className="child-1">
                            <h1>GET IN TOUCH</h1>
                            <p>Have questions or feedback? We're here to help. Send us a message and we'll respond soon.</p>
                            <button className="contact">Contact us</button>
                        </div>
                        <div className="child-2">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
        </ContactStyle>
    );

};

export default ContactComponent;
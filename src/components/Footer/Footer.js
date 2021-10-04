import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='section'>
                <div>
                    <h2>Education Coaching</h2>
                    <p>Questions</p>
                    <p>Jobs</p>
                    <p>Help</p>
                    <p>Mobile</p>
                </div>
                <div>
                    <h2>Product</h2>
                    <p>Teams</p>
                    <p>Talent</p>
                    <p>Advertising</p>
                    <p>Enterprise</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Work</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
            <h2 className="footer">Copyright © 2021 Education Coaching Center.com</h2>
        </div>
    );
};

export default Footer;
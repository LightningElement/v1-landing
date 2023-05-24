import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Footer = () => {
    return (
        <div id='footer'>
            
            <div id="sb_footer footer_padding">
                <div id="footer_logo">
                    <img src="./images/Logo.svg" alt="Logo" />
                    <p id="footertext">Ⓒ2022 LZero Protocol Terms of Service | Privacy Policy </p>
                </div>
                <div id="footer-links">

                    <div id="footer_links-div">
                        <h4 id='footer_titles'>Services</h4>
                        <NavLink to=''>
                            <p id="lines">Events</p>
                        </NavLink>
                        <NavLink to=''>
                            <p id="lines">Hosting</p>
                        </NavLink>
                        <NavLink to=''>
                            <p id="lines">Workspace</p>
                        </NavLink>
                    </div>
                    <div id="footer_links-div">
                        <h4 id='footer_titles'>Community</h4>
                        <NavLink to=''>
                            <p id="lines">Twitter</p>
                        </NavLink>
                        <NavLink to=''>
                            <p id="lines">Discord</p>
                        </NavLink>
                    </div>
                    <div id="footer_ressources">
                        <h4 id="footer_titles">Ressources</h4>
                        <NavLink to=''>
                            <p id="lines">Help Center</p>
                        </NavLink>
                        <NavLink to=''>
                            <p id="lines">Contact Us</p>
                        </NavLink>
                        <NavLink to=''>
                            <p id="lines">Blog</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id="elipse-3"></div>
            <div id="elipse-4"></div>
        </div>
    );
};

export default Footer;
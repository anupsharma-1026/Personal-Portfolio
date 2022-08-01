import React from 'react';
import './Footer.css';
import * as Icon from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>

                        <Icon.HouseHeartFill size={30} style={{ color: "white", marginRight: "2rem", marginBottom: "0.5rem" }} />
                    </div>
                    <p>Hingane Home Colony King of Kings Group,near Karvenagar Pune-52</p>
                    <p>India</p>
                    <div className='phone'>
                        <a href='tel:+918390471664'>
                            <h4><Icon.TelephoneForward size={20} style={{ color: "white", marginRight: "1rem" }} />
                                91-8390471664</h4>
                        </a>
                    </div>
                </div>


                <div className='right'>
                    <h4>About</h4>
                    <a href='mailto:anupsharma1026@gmail.com'><p>anupsharma1026@gmail.com</p></a>
                    <div className='social'>
                        <a href="https://github.com/anupsharma-1026">
                        <Icon.Github className="icons" size={30} style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                        <a href='https://www.linkedin.com/in/anup-sharma-857a66238'>
                        <Icon.Linkedin className="icons" size={30} style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                        <a href='https://instagram.com/anup_sharma_1026?igshid=YmMyMTA2M2Y='>
                        <Icon.Instagram className="icons" size={30} style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100008316817719'>
                        <Icon.Facebook className="icons" size={30} style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
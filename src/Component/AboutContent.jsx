import React from 'react';
import "./AboutContent.css"
import { Link } from 'react-router-dom';
import React1 from "../Asets/react1.png"
import React2 from "../Asets/react2.webp"




const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I ?</h1>
                <p>I Am a Full Stack Developer. I Create good Pojects responsive Secure Website For My Clients.</p>
                <Link to="/Contact">
                    <button className='btn submitBtn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutContent;
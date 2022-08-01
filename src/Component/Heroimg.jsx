import React from 'react';
import "./Heroimg.css";
import IntroImg from "../Asets/intro-bg.jpg";
import {Link} from "react-router-dom";


const Heroimg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt="IntroImg" />
            </div>
            <div className='content'>
                <p>HI, I`M Anup Sharma.</p>
                <h1>MERN Stack Developer.</h1>
                <div>
                <Link to="/project" className='btn proBtn'>Project</Link>
                <Link to="/contact" className='btn'>Contact</Link>
            </div>
            </div>
            
        </div>
    );
};

export default Heroimg;
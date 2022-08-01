import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Heroimg2 from '../Component/Heroimg2';
import AboutContent from '../Component/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="About Us." text="Im a friendly Full Stack Developer." />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default About;
import React from 'react';
import Navbar from '../Component/Navbar';
import Heroimg from '../Component/Heroimg';
import Work from '../Component/Work';
import Footer from '../Component/Footer';
import AboutContent from '../Component/AboutContent';
import Form from '../Component/Form';

const Home = () => {
    return (
        <div>            
            <Navbar />
            <Heroimg /> 
            <Work />
            <AboutContent/>
            <Form/>
            <Footer />            
           
        </div>
        
    );
};

export default Home;
import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Heroimg2 from '../Component/Heroimg2';
import Form from '../Component/Form';


const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Heroimg2 heading="Contact Me." text=""/>
            <Form />
        <Footer/>
        </div>
    );
};

export default Contact;
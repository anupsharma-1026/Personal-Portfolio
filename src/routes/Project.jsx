import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Heroimg2 from '../Component/Heroimg2';
// import PriceingCard from '../Component/PriceingCard';
import Work from '../Component/Work';


const Project = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading={"project"} text={"Some Of My Most Recent Works"} />
            <Work />
            {/* <PriceingCard /> */}
            <Footer />
        </div>
    );
};

export default Project;
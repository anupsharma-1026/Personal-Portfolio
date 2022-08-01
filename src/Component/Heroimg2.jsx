import React from 'react';
import "./Heroimg2.css"

const Heroimg2 = (props) => {
    return (
        <>
             < div className="hero-img aboutImg" >            
                <div className="heading">                  
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>                  
                </div>
            </div >
        </>
    );
};

export default Heroimg2;
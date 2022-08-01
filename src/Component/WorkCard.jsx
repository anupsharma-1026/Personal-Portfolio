import React from 'react';
import './WorkCard.css'

const WorkCard = (props) => {
    return (       
        
                <div className="project-card">
                    <img src={props.imgsrc}alt="image"/>
                    <h2 className="project-title">{props.title} </h2>
                    <div className="pro-details">
                        <p className='projectText'>{props.text}</p>
                        <div className="pro-btns">
                            <a href ={props.view} className="btn proBtn">View</ a>
                            {/* <NavLink to="#  " className="btn sourceBtn">Source</NavLink> */}

                        </div>
                    </div>
                </div>
        
    );
};

export default WorkCard;

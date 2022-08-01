import React from 'react';
import WorkCard from './WorkCard';
import WorkCardD from './WorkCardD';
import './Work.css'

const Work = () => {
    return (
        
        <div className="work-container">
            <h1 className="project-heading">Project</h1>
            <div className="project-container">
                {WorkCardD.map((value, ind)=>{
                    return(
                        <WorkCard key={ind}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        view={value.view}

                        />
                        
                    )
                })}
                
            </div>
        </div>
        
    );
};

export default Work;

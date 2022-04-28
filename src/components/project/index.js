import './style.css'

import React from '../../assets/react.png'

const Project = (props) => {
    //console.log("Inside project react-component");
    //console.log("props", props);
    const skills = (props.skills).split(",");
    //console.log("skills", skills);
    
    return(
        <div className="project">
            <div className="project-title">
                <h3>{props.title}</h3>
            </div>
            <div className="project-images">
                <img src={props.image} alt="Project"/>
            </div>
            <div className="project-description">
                <ul className="list">
                    {skills.map((skill, i) => (
                        <li key={'skill_' + i}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="project-links">                    
                <a className="btn mdi mdi-web-box" href={props.linkProject} target="_blank" rel="noreferrer" > Project</a>
                <a className="btn mdi mdi-unfold-more-vertical" href={props.linkCode} target="_blank" rel="noreferrer" > Code</a>
            </div>
        </div>
    );
};

export default Project;
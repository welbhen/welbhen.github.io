import './style.css'

const Project = (props) => {
    const skills = (props.skills).split(",");
    return (
        <div className="project">
            <div className="project-title">
                <h3>{props.title}</h3>
            </div>
            <div className="project-video">
                <iframe
                    src={props.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </div>
            <div className="project-description">
                <ul className="list">
                    {skills.map((skill, i) => (
                        <li key={'skill_' + i}>#{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="project-links">
                {
                    props.linkProject !== "null" ?
                        <>
                            <a className="btn mdi mdi-web-box" href={props.linkProject} target="_blank" rel="noreferrer" > See the project</a>
                            <a className="btn mdi mdi-unfold-more-vertical" href={props.linkCode} target="_blank" rel="noreferrer" > Read the code</a>
                        </>
                        :
                        <a className="btn mdi mdi-unfold-more-vertical" href={props.linkCode} target="_blank" rel="noreferrer" > Read the code</a>
                }


            </div>
        </div>
    );
};

export default Project;
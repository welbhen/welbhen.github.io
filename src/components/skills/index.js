import './style.css';

import Nodejs from '../../assets/images/node-js.png';
import React from '../../assets/images/react.png';
import Express from '../../assets/images/express.png';
import MongoDB from '../../assets/images/mongo.png';
import Heroku from '../../assets/images/heroku.png';
import Git from '../../assets/images/git.png';
import Rest from '../../assets/images/rest.png';
import MySQL from '../../assets/images/mysql.png';
import Java from '../../assets/images/java.png';

const Skills = () => {
    return (
        <div className="skills">
            <ul className="skill-list">
                <li className="skill-item">
                    <img src={Nodejs} alt="Node.js logo" />
                </li>
                <li className="skill-item">
                    <img src={React} alt="React logo" />
                </li>
                <li className="skill-item">
                    <img src={Express} alt="Express.js logo" />
                </li>
                <li className="skill-item">
                    <img src={MongoDB} alt="MongoDB logo" />
                </li>
                <li className="skill-item">
                    <img src={Heroku} alt="Heroku logo" />
                </li>
                <li className="skill-item">
                    <img src={Git} alt="Git logo" />
                </li>
                <li className="skill-item">
                    <img src={Rest} alt="Rest logo" />
                </li>
                <li className="skill-item">
                    <img src={MySQL} alt="MySQL logo" />
                </li>
                <li className="skill-item">
                    <img src={Java} alt="Java logo" />
                </li>
            </ul>
        </div>
    );
};

export default Skills;
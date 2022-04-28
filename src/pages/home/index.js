import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';

import Nodejs from '../../assets/node-js.png'
import React from '../../assets/react.png'
import Express from '../../assets/express.png'
import MongoDB from '../../assets/mongo.png'

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [menu, setMenu] = useState("about");

    const setAboutMenu = () => {
        setMenu("about");
    }
    const setCareerMenu = () => {
        setMenu("career");
    }
    const setContactMenu = () => {
        setMenu("contact");
    }
    
    const goToProjects = () => {
        navigate('/projects');
    }

    return(
        <div className="page">
            <Header />
            <div className="projects-container">
                <div className="skills">
                    <ul className="skill-list">
                        <li>
                            <img src={Nodejs} alt="Node.js logo"/>
                        </li>
                        <li>
                            <img src={React} alt="React logo"/>
                        </li>
                        <li>
                            <img src={Express} alt="Express.js logo"/>
                        </li>
                        <li>
                            <img src={MongoDB} alt="MongoDB logo"/>
                        </li>
                    </ul>
                </div>
                <div className="about">
                    <div className="left-menu">
                        <div>
                            <button onClick={setAboutMenu} className="btn"><h3>About</h3></button>
                        </div>
                        <div>
                            <button onClick={setCareerMenu} className="btn"><h3>Career</h3></button>
                        </div>
                        <div>
                            <button onClick={setContactMenu} className="btn"><h3>Contact</h3></button>
                        </div>
                        <div>
                            <button onClick={goToProjects} className="btn"><h3>Projects</h3></button>
                        </div> 
                    </div>
                    <div className="right-menu">
                        {
                            menu === "about"
                            ?
                            <h4>Welberth Henrique A. Marques, 26 years old brazilian engineer.<br/>
                                Interested in web dev and software engineering junior positions.
                            </h4>
                            :
                            <>
                                {
                                    menu === "career"
                                    ?
                                    <h5>I have a bachelor's degree in Electrical Engineering, proactive, organized, 
                                        with excellent communication, project management and logical reasoning skills.<br/><br/>
                                        I chose to transition my career 
                                        to a more promising market such as web development and computer engineering 
                                        in order to follow the tendencies and seek for a better long-term career.<br/><br/>
                                        I am currently working as an autonomous electrical engineer while finishing my MBA 
                                        degree and studying to become a web dev.<br/><br/>
                                        I have more than 3 years of experience as responsible for project approval and 
                                        almost 2 years as head of projects and technical team.<br/><br/>
                                        I am a professional with no fear of challenges, always tuned for new technologies 
                                        and in constant learning.</h5>
                                    :
                                    <h4><Contact /></h4>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
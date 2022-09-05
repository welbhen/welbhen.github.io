import './style.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Skills from '../../components/skills';
import Text from '../../components/text';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import text from "../../assets/texts.json";

const Home = () => {
    const navigate = useNavigate();

    const [menu, setMenu] = useState("about");
    const [rightComponent, setRightComponent] = useState(<Text textContent={text.about} />);

    const goToProjects = () => {
        navigate('/projects');
    };

    useEffect(() => {
        if (menu === "about") {
            setRightComponent(<Text textContent={text.about} />);
        } else if (menu === "career") {
            setRightComponent(<Text textContent={text.career} />);
        } else if (menu === "contact") {
            setRightComponent(<Contact />);
        }
    }, [menu]);

    return (
        <div className="page">
            <Header />
            <div className="projects-container">
                <Skills />
                <div className="about">
                    <div className="left-menu">

                        <button onClick={() => setMenu("about")} className="btn"><h3>About</h3></button>

                        <button onClick={() => setMenu("career")} className="btn"><h3>Career</h3></button>

                        <button onClick={() => setMenu("contact")} className="btn"><h3>Contact</h3></button>

                        <button onClick={goToProjects} className="btn"><h3>Projects</h3></button>

                    </div>
                    <div className="right-menu">
                        {rightComponent}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
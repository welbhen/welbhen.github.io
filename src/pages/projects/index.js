import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Project from '../../components/project';

import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <div className="page">
            <Header />
            <button onClick={goToHome} className="btn mdi mdi-backburger back-btn"> Back to Home Page</button>

            <div className="projects-container">
                <Project
                    title="Sticky Notes App"
                    skills="Node.js,Express,MySQL,Sequelize,Handlebars,Body-Parser,CSS"
                    linkProject="null"
                    linkCode="https://github.com/welbhen/StickyNotesApp"
                    image=""
                    video="https://www.youtube.com/embed/d72dR9R69CI"
                />
                <Project
                    title="Solar PV Calculator"
                    skills="Node.js,Express,HTML,CSS"
                    linkProject="https://solarapi-calculator.herokuapp.com/"
                    linkCode="https://github.com/welbhen/solar-calculator"
                    image="https://i.ibb.co/2nFt5vB/solar-calculator.jpg"
                    video="https://www.youtube.com/embed/RBsUADlXxT8"
                />
                <Project
                    title="Blog Website"
                    skills="Node.js,Express,MongoDB,Mongoose,Handlebars,Body-Parser,bcryptjs,Passport"
                    linkProject="https://blogapp-studies.herokuapp.com/"
                    linkCode="https://github.com/welbhen/blogapp"
                    image="https://i.ibb.co/1nM8xM7/blog-app.jpg"
                    video="https://www.youtube.com/embed/SZPo0qnCU7U"
                />
                <Project
                    title="Space Flight News (back-end)"
                    skills="Node.js,Express,MongoDB,Mongoose,cron,REST"
                    linkProject="null"
                    linkCode="https://github.com/welbhen/spaceflightnews-backend"
                    image=""
                    video="https://www.youtube.com/embed/o3_8ARzcfxc"
                />
                <Project
                    title="Space Flight News (front-end)"
                    skills="Node.js,React,axios,HTML,CSS"
                    linkProject="null"
                    linkCode="https://github.com/welbhen/spaceflightnews-frontend"
                    image=""
                    video="https://www.youtube.com/embed/iKpsppk_a5c"
                />
                <Project
                    title="HomeShop (back-end)"
                    skills="Node.js,Express,MongoDB,Mongoose,bcryptjs,Passport,REST"
                    linkProject="https://homeshop-backend.herokuapp.com/"
                    linkCode="https://github.com/welbhen/homeshop-backend"
                    image="https://i.ibb.co/mTGZNrJ/homeshop-back.jpg"
                    video="https://www.youtube.com/embed/BgkED3IdMHw"
                />
                <Project
                    title="HomeShop (front-end)"
                    skills="Node.js,React,Redux,axios,sweetalert2,HTML,CSS"
                    linkProject="https://homeoffice-shop.herokuapp.com/"
                    linkCode="https://github.com/welbhen/homeshop-frontend"
                    image="https://i.ibb.co/ZxXhkC8/homeshop-front.jpg"
                    video="https://www.youtube.com/embed/mX4MLivruOk"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
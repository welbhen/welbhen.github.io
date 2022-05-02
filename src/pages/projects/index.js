import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Project from '../../components/project';

import { useNavigate } from "react-router-dom";

/* ##### HOSTING IMAGES AT:
    https://welberth-marques.imgbb.com/
*/

const Projects = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return(
        <div className="page">
            <Header />
            <button onClick={goToHome} className="btn mdi mdi-backburger back-btn"> Back to Home Page</button>
            
            <div className="projects-container">
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
                    skills="Node.js,Express,Mongoose,Handlebars,Body-Parser,bcryptjs,Passport"
                    linkProject="https://blogapp-studies.herokuapp.com/"
                    linkCode="https://github.com/welbhen/blogapp"
                    image="https://i.ibb.co/1nM8xM7/blog-app.jpg"
                    video="https://www.youtube.com/embed/SZPo0qnCU7U"
                />
                <Project 
                    title="HomeShop (front-end)"
                    skills="Node.js,React,react-router,Redux,axios,immer,sweetalert2,HTML,CSS"
                    linkProject="https://homeoffice-shop.herokuapp.com/"
                    linkCode="https://github.com/welbhen/homeshop-frontend"
                    image="https://i.ibb.co/ZxXhkC8/homeshop-front.jpg"
                    video="https://www.youtube.com/embed/mX4MLivruOk"
                />
                <Project 
                    title="HomeShop (back-end)"
                    skills="Node.js,Express,Mongoose,bcryptjs,Passport,cors,morgan"
                    linkProject="https://homeshop-backend.herokuapp.com/"
                    linkCode="https://github.com/welbhen/homeshop-backend"
                    image="https://i.ibb.co/mTGZNrJ/homeshop-back.jpg"
                    video="https://www.youtube.com/embed/BgkED3IdMHw"
                />             
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css';

import Home from './pages/home/';
import Projects from './pages/projects/';

const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>  
    );
};

export default MyRoutes;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css';

import Home from './pages/home/';

const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>  
    );
};

export default MyRoutes;
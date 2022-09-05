import './style.css'
import Logo from '../../assets/images/logo.png';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
        const navigate = useNavigate();

        const [hamburgerMenu, setHamburgerMenu] = useState("closed");

        const switchHamburgerMenu = () => {
                if (hamburgerMenu === "closed") {
                        setHamburgerMenu("open");
                }
                if (hamburgerMenu === "open") {
                        setHamburgerMenu("closed");
                }
        }

        const goToHome = () => {
                navigate('/');
        }
        return (
                <header>
                        <div className="hamburger-menu-container">
                                {
                                        hamburgerMenu === "closed" ?
                                                <button onClick={switchHamburgerMenu} className="btn mdi mdi-menu hamburger-menu" />
                                                :
                                                <div>
                                                        <button onClick={switchHamburgerMenu} className="btn mdi mdi-menu-open hamburger-menu" />
                                                        <div className="nav-content">
                                                                <a className="btn mdi mdi-history" href="https://welbhen.github.io/curriculum-vitae/" target="_blank" rel="noreferrer" > Curriculum Vitae</a>
                                                                <a className="btn mdi mdi-code-braces-box" href="https://www.hackerrank.com/welberth_henriq1" target="_blank" rel="noreferrer" > HackerRank</a>
                                                                <a className="btn mdi mdi-code-tags" href="https://www.codecademy.com/profiles/welbmarques" target="_blank" rel="noreferrer" > Codecademy</a>
                                                        </div>
                                                </div>
                                }

                        </div>
                        <div id="top" className="header-content">
                                <button onClick={goToHome} className="logo-btn">
                                        <img src={Logo} alt="Welberth's logo" />
                                </button>
                        </div>
                        <div className="header-content">
                                <a className="btn mdi mdi-email" href="mailto:welberth_henrique@hotmail.com" target="_blank" rel="noreferrer" > </a>
                                <a className="btn mdi mdi-whatsapp" href="https://wa.me/5564993322566" target="_blank" rel="noreferrer" > </a>
                                <a className="btn mdi mdi-linkedin" href="https://www.linkedin.com/in/welberthhen/" target="_blank" rel="noreferrer" > </a>
                                <a className="btn mdi mdi-github" href="https://github.com/welbhen" target="_blank" rel="noreferrer" > </a>
                        </div>
                </header>

        );
}

export default Header;
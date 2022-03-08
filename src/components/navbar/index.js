import './style.css'
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return(
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <img src={Logo} className="img-fluid"/>
            </header>
        </div>
    );
}

export default Navbar;
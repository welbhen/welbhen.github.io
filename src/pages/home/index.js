import './style.css';
import Navbar from '../../components/navbar';

const Home = () => {
    return(
        <div className="container-fluid h-100">
            <Navbar />
            <div className="row">
                About Me 
                Links to social media
                Attach CV
            </div>
            <div className="row col-12">
                <div className="col-6 project">
                    Project 1
                </div>
                <div className="col-6 project">
                    Project 2
                </div>
            </div>
            <div className="row col-12">
                <div className="col-6 project">
                    Project 3
                </div>
                <div className="col-6 project">
                    Project 4
                </div>
            </div>
            ### here is the Contact ###
        </div>
    );
};

export default Home;
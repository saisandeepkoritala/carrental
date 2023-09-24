import logo from "../pics/about.jpg";
import car1 from "../pics/aboutcar.png";
import car2 from "../pics/aboutcar2.png";
import car3 from "../pics/aboutcar3.png";
import car4 from "../pics/car1.png";
import car5 from "../pics/car2.png";
import car6 from "../pics/car3.png";
import {BsTelephone} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
const About = () => { 
return (
    <div className="about">
        <div className="upper">
            <div className="upper-left">
                <img src={logo} alt=""/>
            </div>
            <div className="upper-right">
                <p>About Company</p>
                <h1>You start the engine </h1>
                <h1>and your adventure</h1>
                <h1>begins</h1>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                <div className="cars">
                    <div>
                        <img src={car1} alt="" />
                        <h1>20</h1>
                        <p>Car Types</p>
                    </div>
                    <div>
                        <img src={car2} alt="" />
                        <h1>85</h1>
                        <p>Rental Outlets</p>
                    </div>
                    <div>
                        <img src={car3} alt="" />
                        <h1>75</h1>
                        <p>Repair Shops</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="middle">
            <h2>Plan your trip now</h2>
            <h1>Quick & easy car rental</h1>
            <div className="middle-part">
                <div>
                    <img src={car4} alt="" />
                    <h1>Select Car</h1>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div>
                    <img src={car5} alt="" />
                    <h1>Contact Operator</h1>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div>
                    <img src={car6} alt="" />
                    <h1>Let's Drive</h1>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>

            </div>
        </div>
        <div className="banner">
            <h1>Book a car by getting in touch with us</h1>
            <h1> -- </h1>
            <h1>(123) 456 - 7869</h1>
        </div>
        <div className="footer">
            <div>
                <h1>CAR Rental</h1>
                <h2>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</h2>
                <BsTelephone size="30"/><p>(123)- 456 - 7890</p>
                <BiLogoGmail size="30"/><p>Carrental@gmail.com</p>
                <h2>Design by seedStudio</h2>
            </div>
            <div>
                <h1>COMPANY</h1>
                <h2>New York</h2>
                <h2>Careers</h2>
                <h2>Mobile</h2>
                <h2>Blog</h2>
                <h2>How we work</h2>
            </div>
            <div>
                <h1>WORKING HOURS</h1>
                <h2>Mon - Fri: 9:00 AM - 9:00 PM</h2>
                <h2>SAT: 9:00 AM - 6:00 PM</h2>
                <h2>SUN: Closed</h2>
            </div>
            <div>
                <h1>SUBSCRIPTION</h1>
                <h2>Subscribe your Email address for latest news & updates.</h2>
                <input placeholder="Enter Email Address"/>
                <button>Submit</button>
            </div>
        </div>
    </div>
);
};

export default About;

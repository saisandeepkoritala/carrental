import logo from "../pics/large.png"
import Selection from "./Selection";
import logo1 from "../pics/new.png";
import Tips from "./Tips";
import Home2 from "./Home2";
import Home3 from './Home3';
import Home4 from "./Home4";


const Home = ({sel_options,sel_options1,sel_options2}) => {
return (
    <div className="home">
        <div className="hero">
            <div className="hero-content">
                <div className="plans">
                    <h3>Plan your trip now</h3>
                    <h1>Save <strong className="strong">big</strong> with our</h1>
                    <h1>car rental</h1>
                    <h5>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h5>
                    <button className="btn1">Book Ride</button>
                    <button className="btn2">Learn More</button>
                </div>
            </div>
            <div className="hero-pic">
                <img src={logo} alt=""/>
            </div>
        </div>
        <div className="book">
            <div className="book-inner">
                <h2>Car Type</h2>
                <Selection sel_options={sel_options} />
            </div>
            <div className="book-inner1">
                <h2>Pick Up</h2>
                <Selection sel_options={sel_options1}/>
            </div>
            <div className="book-inner2">
                <h2>Drop Of</h2>
                <Selection sel_options={sel_options2}/>
            </div>
            <div>
                <h2>Pick up date</h2>
                <input type="date"/>
            </div>
            <div>
                <h2>Drop of date</h2>
                <input type="date"/>
            </div>
            <div>
                <h2>Confirm</h2>
                <button>Search</button>
            </div>
            
        </div>
        <>
            <Tips/>
        </>
        <>
            <Home2/>
        </>
        <>
            <img src={logo1} alt="" className="bigpic"></img>
        </>
        <>
            <Home3/>
        </>
        <>
            <Home4/>
        </>
    </div>
)
}

export default Home;

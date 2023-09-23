import {BiCar} from "react-icons/bi";
import {AiTwotoneCar} from "react-icons/ai";
import {RiCustomerServiceLine} from "react-icons/ri";
const Tips = () => {
return (
    <div className="tips">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
        <div className="tips3">
            <div className="1tip">
                <BiCar size="60" className="blur"/>
                <h2>Select Car</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div className="2tip">
                <RiCustomerServiceLine size="60" className="blur"/>
                <h2>Select Car</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div className="3tip">
                <AiTwotoneCar size="60" className="blur"/>
                <h2>Select Car</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
        </div>
    </div>
)
}

export default Tips;

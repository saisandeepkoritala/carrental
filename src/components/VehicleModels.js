import React from "react";
import data from "../data/dataModels";
import rent0 from "../pics/rent1.png";
import rent1 from "../pics/rent2.png";
import rent2 from "../pics/rent3.png";
import rent3 from "../pics/rent4.png";
import rent4 from "../pics/rent5.png";
import rent5 from "../pics/rent6.png";

const VehicleModels = () => {
    const images = [rent0, rent1, rent2, rent3, rent4, rent5];

    const rendered = data.map((car, i) => (
        <div key={i} className="car">
            <div className="header">
                <img src={images[i]} alt=""/>
            </div>
            <div className="footer">
                <div>
                    <h3 className="red">{car.name}</h3>
                    <p>Rating</p>
                    <p>{car.nick}</p>
                    <p>{car.type}</p>
                    <p>Fuel</p>
                </div>    
                <div>
                    <h3 className="green">{car.price}$</h3>
                    <p>{car.rating}</p>
                    <p>Type</p>
                    <p>Yes</p>
                    <p>{car.fuel}</p>
                </div>
            </div>
            <div>
                <button>Book a Ride</button>
            </div>
        </div>

    ));

    return <div className="models">
        {rendered}
        </div>;
};

export default VehicleModels;

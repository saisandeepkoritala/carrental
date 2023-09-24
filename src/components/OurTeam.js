import React from "react";
import data from "../data/dataModels";
import man0 from "../pics/man1.png";
import man1 from "../pics/man2.png";
import man2 from "../pics/man3.png";
import man3 from "../pics/man4.png";
import man4 from "../pics/man5.png";
import man5 from "../pics/man6.png";

const VehicleModels = () => {
    const images = [man0, man1, man2, man3, man4, man5];
    const names=["James","Arun","Kathy","Suzie","Mark" ,"Linda"];
    const job=["Salesman","Business Owner","Photographer","Car Detailist","Mechanic","Manager"]

    const rendered = data.map((car, i) => (
        <div key={i} className="box">
            <img src={images[i]} alt="" width="200px" />
            <h3>{names[i]}</h3>
            <p>{job[i]}</p>
        </div>
    ));

    return <div className="models">
        {rendered}
        </div>;
};

export default VehicleModels;

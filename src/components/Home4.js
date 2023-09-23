import harry from "../pics/harry.jpg";
import ron from "../pics/ron.jpg";
const Home4=()=>{
    return(
        <>
            <div className="home4">
                <h2>Reviewed by People</h2>
                <h1>Client's Testimonials</h1>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="cards">
                <div className="card1">
                    <h1>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</h1>
                    <div>
                        <img src={harry} alt=""/>
                        <div>
                            <p>Parry Hotter</p>
                            <p>Belgrade</p>
                        </div>
                        <strong>99</strong>
                    </div>
                    

                </div>
                <div className="card2">
                    <h1>"The car was in great condition and made our trip even better. Highly recommend for this car rental website, the rental rates were very affordable!"</h1>
                    <div>
                        <img src={ron} alt=""/>
                        <div>
                            <p>Ron Rizzly</p>
                            <p>Novi Sad</p>
                        </div>
                        <strong>95</strong>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home4;
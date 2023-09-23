import pic1 from "../pics/pic1.png";
import pic2 from "../pics/pic2.png";
import pic3 from "../pics/pic3.png";
const Home3=()=>{
    return (
        <div className="home3">
            <div className="left">
                <h3>Why Choose Us</h3>
                <h1>Best valued deals you will ever find</h1>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                </p>
                <button>Find Details</button>
            </div>
            <div className="right">
                <div>
                    <div>
                        <img src={pic1} alt=""/>
                        <h1>
                        Cross Country Drive
                        </h1>
                        <p>
                        Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                        </p>
                    </div>
                    <div>
                        <img src={pic2} alt=""/>
                        <h1>
                        All Inclusive Pricing
                        </h1>
                        <p>
                        Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                        </p>
                    </div>
                    <div>
                        <img src={pic3} alt=""/>
                        <h1>
                            No Hidden Charges
                        </h1>
                        <p>
                        Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3;
import CoffeeCardImage from "../assets/images/icons/1.png"
import CoffeeCardImage2 from "../assets/images/icons/2.png"
import CoffeeCardImage3 from "../assets/images/icons/3.png"
import CoffeeCardImage4 from "../assets/images/icons/4.png"
const Awesome = () => {
    return (
        <div className="bg-[#ECEAE3] ">
            <div className="container mx-auto flex gap-4 justify-center items-center px-5 md:px-10 py-10 text-[#331A15]">
                <div>
                    <img src={CoffeeCardImage} alt="" />
                    <h4 className="text-4xl font-semibold">Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={CoffeeCardImage2} alt="" />
                    <h4 className="text-4xl font-semibold">High Quality</h4>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={CoffeeCardImage} alt="" />
                    <h4 className="text-4xl font-semibold">Pure Grades</h4>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={CoffeeCardImage} alt="" />
                    <h4 className="text-4xl font-semibold">Proper Roasting</h4>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Awesome;
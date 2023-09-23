import Rush from "./../../../assets/images/rush.png";
import Rectangle from "./../../../assets/images/Rectangle 2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Hero ngoding disini
    <section className="pt-36 bg-section">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/3 sm:z-50">
            <h1 className="text-xl font-bold mb-3 md:text-2xl">
              Plan Your Trip
            </h1>
            <h1 className="text-3xl font-semibold md:text-5xl">
              Save{" "}
              <span className="text-primary sm:text-black md:text-black lg:text-primary">
                Much
              </span>{" "}
              With Our Rental
            </h1>
            <p className="text-base font-medium text-grey-text my-5">
              Rent your dream cars. Low prices, drive anywhere. Easy pick-up
              option and more
            </p>
            <button className="bg-primary rounded-md text-white p-2 hover:bg-section hover:text-black shadow">
              <Link to="/book">Book now</Link>
            </button>
          </div>
          <div className="w-full self-end px-4 lg:w-2/3">
            <div className="relative mt-10 lg:mt-9">
              <img
                src={Rush}
                alt=""
                className="max-w-full absolute z-40 -bottom-80 md:relative md:-bottom-10 lg:-bottom-10"
              />
              <span className="absolute -z-10 -bottom-96 lg:right-0 lg:-bottom-40 md:-bottom-32 md:-right-52 sm:z-10">
                <img src={Rectangle} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
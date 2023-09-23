import car from "/src/assets/json/car.js";
import cars from "/src/assets/icons/fleet/cars.svg";
import year from "/src/assets/icons/fleet/year.svg";
import ac from "/src/assets/icons/fleet/ac.svg";
import steer from "/src/assets/icons/fleet/steer.svg";
import seat from "/src/assets/icons/fleet/seat.svg";

const CarList = () => {
  return car.map((e, index) => {
    return (
      <div key={index} className="sm:flex bg-white rounded-xl py-8">
        <div className="flex flex-col items-center sm:w-1/2">
          <div className="flex items-center justify-center h-full">
            <img src={`${e.img}`} alt="" />
          </div>
          <a href="https://v-rent.netlify.app/book">
            <button className="hidden sm:block mt-10 bg-[#C05F31] py-2 px-5 rounded-md text-white ">
              Reserve Now
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center mt-10 sm:mt-0 sm:w-1/2">
          <div className="grid grid-flow-row grid-cols-2 gap-5 w-4/5 sm:w-full">
            <div className="flex items-center sm:justify-start justify-center mb-5">
              <h1 className="font-bold text-3xl">{e.type}</h1>
            </div>
            <div className="flex  justify-center sm:justify-start items-center mb-5">
              <h1 className="font-bold text-xl lg:text-lg xl:text-xl">
                Rp {e.price}
                <span className="font-normal text-lg lg:text-sm text-gray-500">
                  /day
                </span>
              </h1>
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-2 gap-7 pl-2 pr-6 mt-5 w-4/5 sm:w-full ml-28 sm:ml-0">
            <div className="flex gap-3">
              <img className="w-9" src={cars} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">{e.brand}</p>
            </div>
            <div className="flex gap-5">
              <img className="w-7" src={year} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">{e.year}</p>
            </div>
            <div className="flex gap-5">
              <img className="w-6" src={seat} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">{e.seat}</p>
            </div>
            <div className="flex gap-3">
              <img className="w-9" src={cars} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">
                {e.variant}
              </p>
            </div>

            <div className="flex gap-3">
              <img className="w-8" src={ac} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">{e.ac}</p>
            </div>
            <div className="flex gap-6">
              <img className="w-7" src={steer} alt="" />
              <p className=" lg:text-sm xl:text-lg text-gray-500">
                {e.transmission}
              </p>
            </div>
          </div>
          <a href="https://v-rent.netlify.app/book">
            <button className="sm:hidden mt-10 bg-[#C05F31] py-2 px-5 rounded-md text-white ">
              Reserve Now
            </button>
          </a>
        </div>
      </div>
    );
  });
};

export default CarList;

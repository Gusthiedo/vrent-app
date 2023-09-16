import cars from "/src/assets/icons/fleet/cars.svg";
import year from "/src/assets/icons/fleet/year.svg";
import ac from "/src/assets/icons/fleet/ac.svg";
import steer from "/src/assets/icons/fleet/steer.svg";
import seat from "/src/assets/icons/fleet/seat.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  const getCarList = async () => {
    const { data } = await axios.get("http://localhost:3003/api/cars");
    console.log(data.data);

    if (data) {
      setCarList(data.data);
    }
  };

  useEffect(() => {
    getCarList();
  }, []);

  const handleReserve = (e) => {
    e.preventDefault();
    navigate("/book");
  };

  return carList.map((e) => {
    return (
      <div
        className={`${
          e.availability
            ? "transition-all duration-200 hover:scale-105"
            : "opacity-30"
        } sm:flex bg-white rounded-xl py-8 relative `}
      >
        <div className="flex flex-col items-center sm:w-1/2">
          <div className="flex items-center justify-center h-full">
            <img src={`/src/assets/images/fleet/${e.img}.png`} alt="" />
          </div>

          <button
            className="hidden sm:block mt-10 bg-[#C05F31] py-2 px-5 rounded-md text-white "
            onClick={handleReserve}
            disabled={e.availability ? false : true}
          >
            Reserve Now
          </button>
        </div>

        <div className="flex flex-col items-center mt-10 sm:mt-0 sm:w-1/2">
          <div className="grid grid-flow-row grid-cols-2 gap-5 w-4/5 sm:w-full">
            <div className="flex items-center sm:justify-start justify-center mb-5">
              <h1 className="font-bold text-3xl">{e.name}</h1>
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
          <div className="grid grid-flow-row grid-cols-2 gap-7 pl-2 pr-6 mt-5 w-4/5 sm:w-full ml-7 justify-center ">
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
              <p className=" lg:text-sm xl:text-lg text-gray-500">{e.type}</p>
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
          <button
            className="sm:hidden mt-10 bg-[#C05F31] py-2 px-5 rounded-md text-white"
            onClick={handleReserve}
            disabled={e.availability ? false : true}
          >
            Reserve Now
          </button>
        </div>
        {e.availability ? (
          <div className="py-2 px-5 border-green-500 border-2 text-green-500 absolute top-0 rounded-md">
            Available
          </div>
        ) : (
          <div className="py-2 px-5 bg-red-500 text-white absolute top-0 rounded-md">
            Unavailable
          </div>
        )}
      </div>
    );
  });
};

export default CarList;

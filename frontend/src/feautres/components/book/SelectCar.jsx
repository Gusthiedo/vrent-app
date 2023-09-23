import car from "../../../assets/icons/icon-car.png";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const SelectCar = ({ setCar, setCarId }) => {
  const [Cars, setCars] = useState();

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const response = await axios.get("http://localhost:3003/api/cars");
    setCars(response.data.data);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setCarId(e.target.selectedIndex);
    setCar(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="select-car"
        className="font-medium flex items-center gap-1 mb-1"
      >
        <img src={car} alt="" />
      </label>
      <select
        className="text-grey-text border border-slate-400 h-10 rounded indent-2 focus:outline-none"
        name="select-car"
        required
        onChange={handleOnChange}
        // defaultValue={"Select your car.."}
      >
        <option value="" hidden>
          Select your car..
        </option>
        {Cars &&
          Cars.map((car, index) => (
            <option id={car.id_car} key={index}>
              {car.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectCar;

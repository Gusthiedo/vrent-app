import icon1 from "../../../assets/icons/iconc1.svg";
import icon2 from "../../../assets/icons/iconc2.svg";
import icon3 from "../../../assets/icons/iconc3.svg";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  const handleReserve = (e) => {
    e.preventDefault();
    navigate("/book");
  };
  return (
    <section className="container flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-black md:mb-6 md:text-lg xl:text-xl">
          Why Choose Us
        </p>
        <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
          <span className="text-[#c56a40]">Best</span> deals you will ever find
        </h1>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <button
            onClick={handleReserve}
            className="hover:brightness-75 font-semibold bg-[#c56a40] rounded-md py-4 px-8 text-xl text-white shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="flex lg:py-12 rounded-lg lg:text-left lg:h-auto xl:w-5/12 mt-12">
        <div className="ml-10">
          <div className="flex items-center gap-4 my-10">
            <div className="w-24 h-24 rounded-full bg-[#e8c5b5] flex items-center justify-center">
              <img className="w-16" src={icon1} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center w-[45%]">
              <h3 className="text-3xl font-semibold mb-5">Drive Anywhere</h3>
              <p className="text-sm text-[#686868]">
                No limit distances, ride anywhere you want, make it like yours
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-10">
            <div className="w-24 h-24 rounded-full bg-[#e8c5b5] flex items-center justify-center">
              <img className="w-16" src={icon2} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center w-[45%]">
              <h3 className="text-3xl font-semibold mb-5">
                All Included Pricing
              </h3>
              <p className="text-sm text-[#686868]">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-10">
            <div className="w-24 h-24 rounded-full bg-[#e8c5b5] flex items-center justify-center">
              <img className="w-16" src={icon3} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center w-[45%]">
              <h3 className="text-3xl font-semibold mb-5">No Hidden Charges</h3>
              <p className="text-sm text-[#686868]">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;

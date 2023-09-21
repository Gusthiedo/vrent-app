import rectangle from "/src/assets/images/fleet/Rectangle.png";
import rush from "/src/assets/images/fleet/rush.png";
import innova from "/src/assets/images/fleet/innova.png";

const Hero = () => {
  return (
    <section>
      <div className=" flex justify-center w-full lg:h-screen overflow-hidden ">
        <div className="w-4/5 md:w-3/5 lg:w-2/5">
          <div className="text-center lg:text-left flex flex-col lg:justify-center items-center md:px-8 lg:px-12 xl:px-16 2xl:px-20  py-20 md:py-28 lg:pt-72 xl:pt-56">
            <img className="lg:hidden" src={rush} alt="" />
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-wide leading-[1.15]">
              Best <span className="text-[#C05F31]">variety</span> vehicle for
              all you needs
            </h1>
            <p className="w-4/5 lg:w-full text-base md:text-lg lg:text-xl xl:text-2xl mt-2 tracking-wide text-gray-500">
              Select from a variety of our fleet to rent. Drive anywhere, make
              it like yours
            </p>
          </div>
        </div>
        <div className=" w-3/5 hidden lg:block">
          <div className="h-screen relative">
            <img
              className="absolute h-screen w-full z-0"
              src={rectangle}
              alt=""
            />
            <img
              className="absolute z-10 bottom-5 right-0 lg:mr-0 xl:-mr-10 2xl:-mr-16 w-2/3"
              src={innova}
              alt=""
            />
            <img className="absolute z-20 w-4/5" src={rush} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

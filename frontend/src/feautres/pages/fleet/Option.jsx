import CarList from "../../components/fleet/CarList";

const Option = () => {
  return (
    <section>
      <div className="bg-[#F8F8F8] w-full">
        <div className="w-full text-center py-20">
          <h1 className=" text-4xl md:text-5xl xl:text-6xl font-bold px-5">
            Option vehicles
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 pb-3 md:pb-20 mx-3 md:mx-20 gap-3 md:gap-10">
          <CarList />
        </div>
      </div>
    </section>
  );
};

export default Option;

import { Card } from "flowbite-react";
import icon1 from "../../../assets/icons/icont1.svg";
import Testi from "../../../assets/json/testimoni.json";

const Testimoni = () => {
  return (
    <div className="bg-gray-100">
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center font-bold">Review by Client</p>
          <h1 className="text-center text-5xl font-bold tracking-tight pt-4">
            Our&apos;s Testimoni
          </h1>
          <p className="pt-6 text-center leading-relaxed text-gray-500 xl:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {Testi.map((data) => {
              return (
                <Card
                  key={data.id}
                  className="flex items-center gap-4 bg-gray-50 shadow-none"
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {data.description}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      alt="Man"
                      src={data.images}
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-1 text-lg font-medium text-gray-700">
                        {data.users}
                      </p>
                    </div>
                    <div className="flex ps-28">
                      <img className="w-8" src={icon1} alt="" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoni;

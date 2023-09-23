import processIcon from "../../../assets/icons/process-icon-car1.svg";
import processIcon2 from "../../../assets/icons/process-icon-car2.svg";
import arrow from "../../../assets/icons/arrow.svg";
import processIconCs from "../../../assets/icons/process-icon-cs.svg";

const Plan = () => {
  return (
    <section>
      <div className="container mt-80  md:mt-32 lg:mt-10">
        <div className="text-center pt-40">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2">
            Plan your trip
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium">
            Quick and easy process
          </h2>
        </div>

        <div className="content flex flex-col sm:flex-row sm:mt-8 lg:mt-16 text-center gap-4 sm:gap-6">
          <div className="content-select-car flex flex-col items-center py-10 gap-5">
            <div>
              <img
                className="w-20 h-20 lg:w-full lg:h-full"
                src={processIcon}
                alt=""
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Select Cars
            </h3>
            <p className="text-grey-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium aspernatur tenetur consequatur minus, dolor veritatis
              dignissimos, illo eligendi, error sed iusto in nesciunt. Sit vitae
              aut magni obcaecati quibusdam sequi.
            </p>
          </div>

          <div className="m-auto">
            <img
              className="w-7 rotate-90 sm:w-24 sm:rotate-0"
              src={arrow}
              alt=""
            />
          </div>

          <div className="content-select-car flex flex-col items-center py-10 gap-5">
            <div>
              <img
                className="w-20 h-20 lg:w-full lg:h-full"
                src={processIconCs}
                alt=""
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Contact Us
            </h3>
            <p className="text-grey-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              fugiat ex cum reprehenderit consequuntur eos dolore doloremque
              nobis. Ducimus ab ipsa quod, repudiandae velit ipsum neque
              recusandae a iusto et!
            </p>
          </div>

          <div className="m-auto">
            <img
              className="w-7 rotate-90 sm:w-24 sm:rotate-0"
              src={arrow}
              alt=""
            />
          </div>

          <div className="content-select-car flex flex-col items-center py-10 gap-5">
            <div>
              <img
                className="w-20 h-20 lg:w-full lg:h-full"
                src={processIcon2}
                alt=""
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Lets Drive
            </h3>
            <p className="text-grey-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              fugiat ex cum reprehenderit consequuntur eos dolore doloremque
              nobis. Ducimus ab ipsa quod, repudiandae velit ipsum neque
              recusandae a iusto et!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleReserve = (e) => {
    e.preventDefault();
    navigate("/book");
  };
  return (
    // Hero About ngoding disini
    <div>
      <div className="grid grid-cols-2 gap-8 gap-y-6 pt-10">
        <div className="col-span-1 p-6 pl-0 pb-0">
          <img
            className="rounded-tr-full rounded-br-xl"
            src="https://asset.kompas.com/crops/PEisvt6qY6sYNjIXjwVqB9Q3ZDE=/0x0:1000x667/780x390/data/photo/2021/11/04/61835cddc38a7.jpg"
            alt=""
          />
        </div>
        <div className="p-4 flex justify-center flex-col">
          <h1 className="font-bold text-4xl font-rubik">About V-rent</h1>
          <br />
          <p className="text-xl text-grey-text">
            <strong className="text-black">V-rent</strong> is Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Nihil esse molestiae quasi
            necessitatibus provident nesciunt quas eligendi pariatur, cumque
            ipsum libero quidem! Ducimus asperiores officia, consequuntur
            voluptate, nemo laboriosam accusamus ab dolore dolor impedit ex. At
            illum fugiat reiciendis ab. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti aliquid at numquam omnis quaerat
            reprehenderit nihil, obcaecati vel a iusto asperiores! Odio
            excepturi delectus culpa! Hic accusantium saepe ducimus eaque!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-gray-100 pb-10">
        <div className="p-4 flex justify-center flex-col">
          <h1 className="font-bold text-6xl">
            Best{" "}
            <span className="text-primary border-transparent">solution</span>{" "}
            for your transportation needs
          </h1>
          <br />
          <p className="text-xl text-grey-text">
            V-rent is Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis nesciunt ipsam maiores iure reiciendis consequatur quaerat
            eveniet temporibus minima reprehenderit laborum mollitia totam quia
            voluptatibus molestias.
          </p>
          <br />
          <a
            onClick={handleReserve}
            href="#"
            className="bg-primary text-base text-white font-semibold p-3 rounded-md shadow-md hover:shadow-xl shadow-black h-12 w-28"
          >
            Book Now
          </a>
        </div>
        <div className="p-6 pr-0 pt-0">
          <img
            className="rounded-bl-full"
            src="https://www.seva.id/wp-content/uploads/2022/03/shutterstock_492130867.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

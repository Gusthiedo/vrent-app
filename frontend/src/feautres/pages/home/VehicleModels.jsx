function VehicleModels() {
  return (
    <section id="vehicle-models" className="bg-primary pt-4 pb-8">
      <div className="flex flex-col items-center text-white gap-2 mb-4">
        <p className="text-2xl">Vehicle Models</p>
        <h1 className="text-4xl font-medium">Our Rental Fleet</h1>
        <h3 className="w-96 text-center">
          Choose a variety of our amazing vehicles to rent for your next trip
        </h3>
      </div>

      {/* Specification box di sebelah kanan */}
      <div className="flex justify-center">
      <div>
        <ul className="flex flex-col gap-1">
          <li className="text-2xl text-center bg-white hover:bg-black py-2 px-4">Innova</li>
          <li className="text-2xl text-center bg-white hover:bg-black py-2 px-4">Rush</li>
          <li className="text-2xl text-center bg-white hover:bg-black py-2 px-4">Hiace</li>
          <li className="text-2xl text-center bg-white hover:bg-black py-2 px-4">Brio</li>
        </ul>
      </div>

        <div className="mb-4 text-2xl font-bold">Rp. 450/day</div>
        <div className="flex justify-between">
          <div className="font-bold">Brand</div>
          <div className="text-normal">Toyota</div>
          <div className="font-bold">Type</div>
          <div className="text-normal">Kijang</div>
          <div className="font-bold">Year</div>
          <div className="text-normal">2021</div>
          <div className="font-bold">Seat</div>
          <div className="text-normal">6</div>
          <div className="font-bold">AC</div>
          <div className="text-normal">Yes</div>
          <div className="font-bold">Transmission</div>
          <div className="text-normal">Manual</div>
          <a
            href="reservation.html"
            className="mt-4 py-2 px-4 bg-black text-white text-lg font-bold text-center rounded-full hover:bg-blue-600 cursor-pointer"
          >
            Reserve Now
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default VehicleModels;
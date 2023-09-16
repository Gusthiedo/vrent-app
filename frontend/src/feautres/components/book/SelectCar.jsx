import car from '../../../assets/icons/icon-car.png';

function SelectCar() {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor="select-car" className="font-medium flex items-center gap-1 mb-1">
        <img src={car} alt="" />
        Select Car
      </label>
      <select className='text-grey-text border border-slate-400 h-10 rounded indent-2 focus:outline-none'name="select-car" required>
        <option hidden value="">Select Your Car Type</option>
        <option value="">Ayla</option>
        <option value="">Honda APV</option>
        <option value="">Honda C-RV</option>
        <option value="">Kijang Innova</option>
        <option value="">Suzuki Ignis</option>
        <option value="">Toyota Agya</option>
        <option value="">Toyota Rush</option>
       </select>
    </div>
  )
}

export default SelectCar;
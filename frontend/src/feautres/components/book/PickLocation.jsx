/* eslint-disable react/prop-types */
import location from '../../../assets/icons/icon-location.png';

function PickLocation({ children, defaultOption }) {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor="select-pick-location" className="font-medium flex items-center gap-1 mb-1">
        <img src={location} alt="" />
        { children }
      </label>
      <select className='text-grey-text border border-slate-400 h-10 rounded indent-2 focus:outline-none'name="select-pick-location" required>
        <option hidden value="">{ defaultOption }</option>
        <option value="">Jakarta</option>
        <option value="">Bogor</option>
        <option value="">Depok</option>
        <option value="">Tangerang</option>
        <option value="">Bekasi</option>
       </select>
    </div>
  )
}

export default PickLocation;
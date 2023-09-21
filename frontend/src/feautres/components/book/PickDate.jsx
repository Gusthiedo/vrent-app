/* eslint-disable react/prop-types */
import calendar from '../../../assets/icons/icon-calendar.png';

function PickDate({ children, setDate, contoh }) {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor="select-pick-date" className="font-medium flex items-center gap-1 mb-1">
        <img src={calendar} alt="" />
        { children }
      </label>
      <input value={contoh} onChange={(e) => setDate(e.target.value)} type="date" name='select-pick-date' className='text-grey-text border border-slate-400 h-10 rounded indent-2 focus:outline-none' required />
    </div>
  )
}

export default PickDate;
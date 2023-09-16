import phone from '../../../assets/icons/icon-phone.png';
import mail from '../../../assets/icons/icon-mail.png';

function Vrent() {
  return (
    <div className="flex flex-col gap-2 sm:w-80">
      <h3 className="text-3xl text-primary font-semibold">V<span className="text-black text-xl">-Rent</span></h3>
      <p className="text-grey-text">
        We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs
      </p>
      <div className='text-sm flex flex-row gap-6 sm:flex-col sm:gap-2'>
        <p className='flex items-center gap-1 font-semibold ml-1'>
          <span className='w-4 sm:w-auto'>
            <img className='object-cover' src={phone} alt="" />
          </span>
          +62 xxx xxxx xxxx</p>
        <p className='flex items-center gap-1 font-semibold'>
          <span className='w-[25px] sm:w-auto'>
            <img className='object-cover' src={mail} alt="" />
          </span>
          vrent@gmail.com</p>
      </div>
    </div>
  )
}

export default Vrent;
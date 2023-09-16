import { Link } from 'react-router-dom';
import icon from '../../../assets/icons/icon-header.png';

const NavbarTitle = () => {
	return (
		// Navbar Title ngoding disini
		<Link to='/'>
			<div className='flex gap-1'>
				<div className='w-16'>
					<img className='object-cover' src={icon} alt="" />
				</div>
				<div className='flex items-center'>
					<span className='text-5xl text-primary font-semibold'>V</span>
					<span className='text-2xl text-black font-semibold translate-y-1'>-Rent</span>
				</div>
			</div>
		</Link>
	);
};

export default NavbarTitle;

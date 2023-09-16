import { useState } from "react";
import NavAuth from "../feautres/components/navbar/NavAuth";
import NavList from "../feautres/components/navbar/NavList";
import NavbarTitle from "../feautres/components/navbar/NavbarTitle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-primary transition ease transform duration-300`;

	return (
		// Navbar ngoding disini
		<div className="w-full py-2 shadow-md shadow-slate-200">
			<div className="w-[90%] mx-auto min-[900px]:flex justify-center min-[900px]:justify-between items-center relative">
				<NavbarTitle />
				<div className={`min-[900px]:w-2/3 flex items-start min-[900px]:items-center justify-between min-[900px]:h-auto min-[900px]:translate-x-0 overflow-hidden min-[900px]:overflow-auto transition-all duration-200 ${isOpen ? `` : `h-0 -translate-x-40 `}`}>
					<NavList />
					<NavAuth />
				</div>
				<button
					className="flex flex-col h-10 w-10 border-2 border-primary rounded justify-center items-center group absolute top-1 right-0 min-[900px]:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;

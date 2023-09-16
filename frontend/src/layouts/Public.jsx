/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Public = ({ children }) => {
	return (
		// Public ngoding disini
		<section>
			<Navbar />
			{children}
			<Footer />
		</section>
	);
};

export default Public;

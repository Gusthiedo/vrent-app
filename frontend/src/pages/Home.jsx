import Banner from "../feautres/pages/home/Banner";
import Choose from "../feautres/pages/home/Choose";
import Hero from "../feautres/pages/home/Hero";
import Testimoni from "../feautres/pages/home/Testimoni";
import Public from "../layouts/Public";
import Plan from "../feautres/pages/home/Plan";

const Home = () => {
	return (
		<Public>
			<div>
				{/* Home ngoding disini */}
				<Hero />
				<Plan />
				<Banner />
				<Choose />
				<Testimoni />
			</div>
		</Public>
	);
};

export default Home;

import Hero from "../feautres/pages/fleet/Hero";
import Option from "../feautres/pages/fleet/Option";
import Public from "../layouts/Protected";

const Fleet = () => {
  return (
    <Public>
      <div className=" font-rubik">
        <Hero />
        <Option />
      </div>
    </Public>
  );
};

export default Fleet;
